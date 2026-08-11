const DATA_URL='../../knowledge-base/bahasa-indonesia/v1/golden-dataset-v1.json';
const SUPPORTED_TYPES=new Set(['mcq','multi_select','ordering','evidence_matching','dialogue_analysis']);
const $=id=>document.getElementById(id);
let questions=[],index=0,xp=0,correct=0,answered=false,selected=[];

async function loadData(){
  try{
    const response=await fetch(DATA_URL,{cache:'no-store'});
    if(!response.ok)throw new Error(`Dataset HTTP ${response.status}`);
    const data=await response.json();
    const gate=validateDataset(data);
    if(!gate.ok)throw new Error(`Quality gate gagal: ${gate.errors.join(' | ')}`);
    questions=data.items;
    render();
  }catch(error){
    $('loadError').classList.remove('hidden');
    $('loadError').innerHTML=`<h2>Dataset tidak dapat dimuat</h2><p>${escapeHtml(error.message)}</p><p class="small">Prototype harus dijalankan melalui web server/hosting agar fetch JSON dapat bekerja.</p>`;
  }
}

function validateDataset(data){
  const errors=[];
  if(!data||!Array.isArray(data.items)||!data.items.length)errors.push('items kosong');
  const ids=new Set();
  for(const q of data.items||[]){
    for(const field of ['id','chapter_id','topic_id','skill','cognitive_level','difficulty','question_type','question','answer','explanation','source','provenance','mode','game_mechanic'])if(q[field]===undefined||q[field]===null||q[field]==='')errors.push(`${q.id||'unknown'}: field ${field} wajib`);
    if(ids.has(q.id))errors.push(`ID duplikat ${q.id}`); ids.add(q.id);
    if(!SUPPORTED_TYPES.has(q.question_type))errors.push(`${q.id}: question_type tidak didukung: ${q.question_type}`);
    if(!q.source?.student_book?.pages||!q.source?.student_book?.section)errors.push(`${q.id}: provenance student_book tidak lengkap`);
    if(!q.source?.teacher_guide?.pages||!q.source?.teacher_guide?.section)errors.push(`${q.id}: provenance teacher_guide tidak lengkap`);
    if(['mcq','multi_select','ordering','evidence_matching','dialogue_analysis'].includes(q.question_type)&&(!Array.isArray(q.options)||q.options.length<2))errors.push(`${q.id}: options tidak valid`);
    if(q.question_type==='multi_select'&&!Array.isArray(q.answer))errors.push(`${q.id}: multi_select harus memiliki answer array`);
    if(q.question_type!=='multi_select'&&Array.isArray(q.answer))errors.push(`${q.id}: single-answer tidak boleh answer array`);
  }
  return {ok:errors.length===0,errors};
}

function escapeHtml(value){return String(value).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function typeLabel(q){return q.question_type.replaceAll('_',' ');}
function isMulti(q){return q.question_type==='multi_select';}
function render(){
  answered=false;selected=[];const q=questions[index];
  $('world').textContent=q.game_mechanic;
  $('counter').textContent=`Soal ${index+1} dari ${questions.length} · ${q.chapter_id} · ${typeLabel(q)}`;
  $('score').textContent=`XP ${xp}`;
  $('progress').style.width=((index)/questions.length*100)+'%';
  let html=`<div class="question">${escapeHtml(q.question)}</div><div class="options">`;
  q.options.forEach((text,j)=>html+=`<button class="option" data-j="${j}">${String.fromCharCode(65+j)}. ${escapeHtml(text)}</button>`);
  html+=`</div><div class="actions"><button class="button" id="submit" disabled>Periksa Jawaban</button></div><div id="feedback" class="feedback hidden"></div>`;
  $('questionArea').innerHTML=html;
  document.querySelectorAll('.option').forEach(button=>button.onclick=()=>choose(Number(button.dataset.j),q));
  $('submit').onclick=()=>check(q);
}
function choose(j,q){
  if(answered)return;
  if(isMulti(q)){const p=selected.indexOf(j);p<0?selected.push(j):selected.splice(p,1);}else selected=[j];
  document.querySelectorAll('.option').forEach((button,k)=>button.classList.toggle('selected',selected.includes(k)));
  $('submit').disabled=!selected.length;
}
function check(q){
  if(answered)return; answered=true;
  const expected=Array.isArray(q.answer)?q.answer.map(a=>q.options.indexOf(a)).sort((a,b)=>a-b):[q.options.indexOf(q.answer)];
  const actual=[...selected].sort((a,b)=>a-b);
  const ok=actual.length===expected.length&&actual.every((v,n)=>v===expected[n]);
  if(ok){xp+=100;correct++;}
  document.querySelectorAll('.option').forEach((button,k)=>{if(expected.includes(k))button.classList.add('correct');else if(selected.includes(k))button.classList.add('wrong');button.disabled=true;});
  $('score').textContent=`XP ${xp}`;
  const feedback=$('feedback');feedback.classList.remove('hidden');
  feedback.innerHTML=`<strong>${ok?'✓ Jawaban benar!':'✗ Belum tepat.'}</strong><p>${escapeHtml(q.explanation)}</p><p class="small">${escapeHtml(q.game_mechanic)} · ${escapeHtml(q.id)}</p><button class="button" id="next">${index===questions.length-1?'Lihat Hasil':'Soal Berikutnya'}</button>`;
  $('next').onclick=()=>{if(index===questions.length-1)finish();else{index++;render();}};
}
function finish(){
  $('game').classList.add('hidden');$('result').classList.remove('hidden');
  $('result').innerHTML=`<h1>🏆 Mission Complete</h1><p>Kamu menyelesaikan micro-prototype Bahasa Indonesia.</p><div class="stats"><div class="stat"><strong>${correct}/${questions.length}</strong><br><span class="small">Benar</span></div><div class="stat"><strong>${xp}</strong><br><span class="small">XP</span></div><div class="stat"><strong>${Math.round(correct/questions.length*100)}%</strong><br><span class="small">Akurasi</span></div></div><p>Seed tervalidasi melalui quality gate konten dan renderer data-driven. Ini tetap micro-prototype, bukan desain visual final.</p><button class="button" onclick="location.reload()">Main Lagi</button>`;
}
loadData();