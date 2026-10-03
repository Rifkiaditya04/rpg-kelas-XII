# apply-visual-refresh.ps1
# Menerapkan 36 perubahan visual ke world-1-rpg-v2.html dengan pemeriksaan ketat.
#   Dry-run (default) : hanya memeriksa, TIDAK menulis apa pun.
#   -Apply            : menulis file hanya bila SEMUA pola cocok dengan jumlah yang diharapkan.
# Prasyarat: file sudah dikembalikan ke versi commit (git restore), lihat petunjuk.
# Jalankan dari folder repo (rpg-kelas-XII). Jangan di-commit.

param(
  [string]$Path = ".\prototype\bahasa-indonesia\world-1-rpg-v2.html",
  [switch]$Apply
)
$ErrorActionPreference = 'Stop'

$spec = @'
@@ A00-npc-ke-png | R | 28
<<<
(npc-(?:rifki|leli|raka|zaein|safira))\.jpg
===
$1.png
>>>
@@ A01-font-import | L
<<<
family=Outfit:wght@400;600;700;800
===
family=Nunito:wght@400;600;700;800
>>>
@@ A02-font-family | L
<<<
font-family: 'Outfit', sans-serif;
===
font-family: 'Nunito', system-ui, sans-serif;
>>>
@@ A03-body-html | L
<<<
body, html { height: 100vh; overflow: hidden; background: #0f172a; }
===
body, html { height: 100vh; height: 100dvh; overflow: hidden; background: #cfc6b8; }
>>>
@@ A04-bg-color-blur | L
<<<
background-color: #0f172a;
===
background-color: #cfc6b8; filter: blur(5px); transform: scale(1.06);
>>>
@@ A05-overlay-hangat | L
<<<
linear-gradient(to top, rgba(15,23,42,0.85) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.2) 100%)
===
linear-gradient(to top, rgba(40,30,20,0.28) 0%, rgba(40,30,20,0.12) 50%, rgba(40,30,20,0.05) 100%)
>>>
@@ A06-hud-right-pos | L
<<<
.hud-right { position: absolute; right: 24px; top: 24px; z-index: 50; display: flex; gap: 8px; }
===
.hud-right { position: absolute; left: 24px; bottom: 16px; z-index: 50; display: flex; gap: 8px; opacity: 0.65; }
    .hud-right:hover { opacity: 1; }
>>>
@@ A07-btn-reset-padding | L
<<<
border: 1px solid var(--glass-border); padding: 8px 16px; border-radius: 10px;
===
border: 1px solid var(--glass-border); padding: 6px 12px; border-radius: 10px;
>>>
@@ A08-btn-reset-font | L
<<<
cursor: pointer; font-weight: 600; color: #fff; font-size: 13px;
===
cursor: pointer; font-weight: 600; color: #fff; font-size: 12px;
>>>
@@ A09-char-width | L
<<<
width: 35%; z-index: 15; pointer-events: none;
===
width: 34%; z-index: 15; pointer-events: none;
>>>
@@ A10-char-img | L
<<<
width: 100%; height: 100%; object-fit: cover; object-position: top center;
===
width: 100%; height: 85%; object-fit: contain; object-position: bottom center; filter: drop-shadow(0 8px 10px rgba(0,0,0,0.25));
>>>
@@ A11-img-tag | L
<<<
" alt="Avatar">
===
" alt="" onerror="this.style.visibility='hidden'" onload="this.style.visibility='visible'">
>>>
@@ B01-dialog-bg | L
<<<
background: linear-gradient(135deg, rgba(248,246,240,0.97) 0%, rgba(255,255,255,0.95) 100%);
===
background: rgba(245,235,221,0.95);
>>>
@@ B02-dialog-radius-padding | L
<<<
border-radius: 20px; padding: 28px 32px;
===
border-radius: 16px; padding: 22px 26px;
>>>
@@ B03-dialog-shadow | L
<<<
box-shadow: 0 16px 48px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8);
===
box-shadow: 0 6px 18px rgba(30,20,10,0.22);
>>>
@@ B04-dialog-border | L
<<<
border: 2px solid transparent;
===
border: 1px solid rgba(255,255,255,0.6);
>>>
@@ B05-dialog-clip | L
<<<
background-clip: padding-box;
===
>>>
@@ B06-hapus-before | R
<<<
[ \t]*\.dialog-box::before \{[^}]*\}\n
===
>>>
@@ B07-hapus-keyframes | R
<<<
[ \t]*@keyframes borderShimmer [^\n]*\n
===
>>>
@@ B08-dialog-content | L
<<<
.dialog-content { display: flex; flex-direction: column; justify-content: center; }
===
.dialog-content { display: block; max-height: 46vh; overflow-y: auto; padding-bottom: 12px; }
>>>
@@ B09-dialog-title | L
<<<
.dialog-title { font-size: 26px; font-weight: 800; color: var(--text-dark); margin-bottom: 2px; }
===
.dialog-title { display: inline; font-size: 20px; font-weight: 800; color: #2A2A2E; }
>>>
@@ B10-dialog-subtitle | L
<<<
.dialog-subtitle { font-size: 12px; color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 14px; }
===
.dialog-subtitle { display: inline; font-size: 13px; font-weight: 700; color: #3D3D42; text-transform: none; letter-spacing: 0; margin: 0; }
    .dialog-subtitle::before { content: "\00a0\2014\00a0"; }
>>>
@@ B11-dialog-text | L
<<<
font-size: 17px; color: #1e293b; line-height: 1.7; margin-bottom: 20px;
===
font-size: 15px; color: #2A2A2E; line-height: 1.55; margin-bottom: 20px; display: block; margin-top: 10px;
>>>
@@ B12-btn-bg | L
<<<
background: linear-gradient(180deg, #3b82f6 0%, var(--primary) 100%);
===
background: linear-gradient(180deg, #3B6FD6 0%, #2450A8 100%);
>>>
@@ B13-btn-radius | L
<<<
border-radius: 14px; font-size: 15px; font-weight: 700; cursor: pointer;
===
border-radius: 10px; font-size: 15px; font-weight: 700; cursor: pointer;
>>>
@@ C01-right-panel | L
<<<
padding: 24px 32px 32px 0;
===
padding: 24px 32px 28px 2vw; gap: 16px;
>>>
@@ C02-dialog-size | L
<<<
position: relative; z-index: 20;
===
position: relative; z-index: 20;
      width: clamp(340px, 42vw, 760px); align-self: flex-start; margin-left: 3vw;
>>>
@@ C03-css-baru | L
<<<
/* UTILS */
===
/* TATA LETAK REFERENSI: ekor balon, tombol tunggal, kartu evidence, layar sempit */
    .dialog-box::after { content: ''; position: absolute; left: -12px; top: 38px; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-right: 12px solid rgba(245,235,221,0.95); }
    .action-group .btn-action:only-child { width: 100%; text-align: center; }
    .evidence-card { align-self: stretch; background: rgba(255,255,255,0.94); border: 1px solid rgba(255,255,255,0.6); border-radius: 14px; padding: 14px 20px; box-shadow: 0 6px 18px rgba(30,20,10,0.22); }
    .evidence-title { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 800; color: #2A2A2E; }
    .evidence-title svg { width: 18px; height: 18px; flex: none; }
    .evidence-empty { font-size: 12px; color: #3D3D42; margin-top: 4px; }
    #inline-mission-panel.active ~ #evidence-card { display: none; }
    @media (max-width: 900px) {
      .dialog-box { width: auto; margin-left: 0; }
      .right-panel { padding-left: 12px; }
      .vn-character-layer { width: 28%; }
    }

    /* UTILS */
>>>
@@ C04-kartu-evidence-html | R
<<<
(<iframe id="mission-frame" src="about:blank"></iframe>\s*</div>)
===
$1
      <div id="evidence-card" class="evidence-card">
        <div class="evidence-title"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="12" width="4" height="9" rx="1" fill="#F59E3F"/><rect x="10" y="7" width="4" height="14" rx="1" fill="#4C8DF6"/><rect x="17" y="3" width="4" height="18" rx="1" fill="#2E9E5B"/></svg>Learning Evidence</div>
        <div class="evidence-empty">Belum ada evidence.</div>
      </div>
>>>
@@ D01-misi-radius | L
<<<
border-radius: 20px; overflow: hidden;
===
border-radius: 16px; overflow: hidden;
>>>
@@ D02-misi-shadow | L
<<<
box-shadow: 0 16px 48px rgba(0,0,0,0.3);
===
box-shadow: 0 6px 18px rgba(30,20,10,0.22);
>>>
@@ D03-misi-border | L
<<<
border: 2px solid rgba(255,255,255,0.15);
===
border: 1px solid rgba(255,255,255,0.6);
>>>
@@ D04-misi-header-bg | L
<<<
padding: 14px 24px; background: var(--text-dark);
===
padding: 12px 20px; background: rgba(247,233,225,0.97);
>>>
@@ D05-misi-header-garis | L
<<<
border-bottom: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;
===
border-bottom: 1px solid rgba(30,20,10,0.12); flex-shrink: 0;
>>>
@@ D06-misi-judul | L
<<<
#inline-mission-panel .mission-header h3 { color: #fff; font-size: 16px; font-weight: 700; }
===
#inline-mission-panel .mission-header h3 { color: #2A2A2E; font-size: 16px; font-weight: 800; }
>>>
@@ D07-iframe-radius | L
<<<
border-radius: 0 0 18px 18px;
===
border-radius: 0 0 15px 15px;
>>>
'@

$full    = (Resolve-Path -LiteralPath $Path).Path
$raw     = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)
$hadCRLF = $raw.Contains("`r`n")
$t       = $raw.Replace("`r`n", "`n")
$spec    = $spec.Replace("`r`n", "`n")

$rx = [regex]'(?ms)^@@ (?<name>\S+) \| (?<mode>[LR])(?: \| (?<n>\d+))?\n<<<\n(?<find>.*?)\n===\n(?<repl>.*?)\n?>>>$'
$edits = @(foreach ($m in $rx.Matches($spec)) {
  [pscustomobject]@{
    Name = $m.Groups['name'].Value; Mode = $m.Groups['mode'].Value
    Exp  = $(if ($m.Groups['n'].Success) { [int]$m.Groups['n'].Value } else { 1 })
    Find = $m.Groups['find'].Value; Repl = $m.Groups['repl'].Value
  }
})
$nHeaders = ([regex]::Matches($spec, '(?m)^@@ ')).Count
$nEdits   = $edits.Count
if ($nEdits -ne $nHeaders) { throw "Spesifikasi rusak: $nHeaders blok, hanya $nEdits terbaca." }

function Get-Count($text, $e) {
  if ($e.Mode -eq 'L') {
    $n = 0; $i = 0
    while (($i = $text.IndexOf($e.Find, $i, [System.StringComparison]::Ordinal)) -ge 0) { $n++; $i += $e.Find.Length }
    return $n
  }
  return ([regex]::Matches($text, $e.Find)).Count
}

Write-Host ""
Write-Host "File : $full"
Write-Host "Pola : $nEdits (jumlah kecocokan harus sama dengan 'harapan')"
Write-Host ""
'{0,-28} {1,6} {2,8}   {3}' -f 'POLA', 'ADA', 'HARAPAN', 'STATUS'
$bad = 0
foreach ($e in $edits) {
  $c  = Get-Count $t $e
  $ok = ($c -eq $e.Exp)
  if (-not $ok) { $bad++ }
  '{0,-28} {1,6} {2,8}   {3}' -f $e.Name, $c, $e.Exp, $(if ($ok) { 'OK' } else { 'TIDAK SESUAI' })
}
Write-Host ""
if ($bad -gt 0) {
  Write-Host "BERHENTI: $bad pola tidak sesuai. Tidak ada file yang diubah." -ForegroundColor Red
  Write-Host "Bila banyak pola bernilai 0, file kemungkinan sudah pernah diubah. Jalankan git restore dulu (lihat petunjuk)."
  exit 1
}
if (-not $Apply) {
  Write-Host "Dry-run selesai: semua $nEdits pola cocok. Tidak ada file yang diubah." -ForegroundColor Green
  Write-Host "Untuk menerapkan:  powershell -ExecutionPolicy Bypass -File .\apply-visual-refresh.ps1 -Apply"
  exit 0
}

$backup = Join-Path $env:TEMP ("world-1-rpg-v2.backup-{0}.html" -f (Get-Date -Format 'yyyyMMdd-HHmmss'))
Copy-Item -LiteralPath $full -Destination $backup
Write-Host "Cadangan: $backup"

foreach ($e in $edits) {
  if ((Get-Count $t $e) -ne $e.Exp) { throw "Pola $($e.Name) berubah jumlahnya saat diterapkan. Tidak ada file yang ditulis." }
  if ($e.Mode -eq 'L') { $t = $t.Replace($e.Find, $e.Repl) }
  else                 { $t = [regex]::Replace($t, $e.Find, $e.Repl) }
}

if ($hadCRLF) { $t = $t.Replace("`n", "`r`n") }
[System.IO.File]::WriteAllText($full, $t, (New-Object System.Text.UTF8Encoding($false)))

$v = [System.IO.File]::ReadAllText($full, [System.Text.Encoding]::UTF8)
Write-Host ""
Write-Host "VERIFIKASI SETELAH MENULIS:"
foreach ($c in @(@('borderShimmer',0), @('Outfit',0), @('Nunito',2), @('cfc6b8',2), @('evidence-card',4))) {
  $n = ([regex]::Matches($v, [regex]::Escape($c[0]))).Count
  '{0,-16} ditemukan {1}  (harapan {2})  {3}' -f $c[0], $n, $c[1], $(if ($n -eq $c[1]) { 'OK' } else { 'PERIKSA' })
}
$jpg = ([regex]::Matches($v, 'npc-(rifki|leli|raka|zaein|safira)\.jpg')).Count
$png = ([regex]::Matches($v, 'npc-(rifki|leli|raka|zaein|safira)\.png')).Count
'{0,-16} jpg={1} (harapan 0)  png={2} (harapan 28)  {3}' -f 'npc-*', $jpg, $png, $(if ($jpg -eq 0 -and $png -eq 28) { 'OK' } else { 'PERIKSA' })
Write-Host ""
if (Get-Command git -ErrorAction SilentlyContinue) { git diff --numstat -- $Path }
Write-Host "Selesai. Muat ulang browser dengan Ctrl+Shift+R." -ForegroundColor Green
