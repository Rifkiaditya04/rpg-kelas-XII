# trim-npc.ps1
# Memeriksa dan memangkas ruang transparan di sekeliling PNG karakter NPC.
#   Dry-run (default) : hanya melaporkan ukuran dan margin transparan. TIDAK menulis apa pun.
#   -Apply            : menulis hasil pangkas ke npc-*.png (file sumber Rifki.png, Leli.png, dst. tidak disentuh).
# Jalankan dari folder repo (rpg-kelas-XII). Jangan di-commit.

param(
  [string]$Dir = ".\phase-3\visuals\Desain referensi fix",
  [int]$MaxHeight = 1600,
  [switch]$Apply
)
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$names = 'npc-rifki','npc-leli','npc-raka','npc-zaein','npc-safira'
$dirFull = (Resolve-Path -LiteralPath $Dir).Path
$stage = Join-Path $dirFull '_trim'
if ($Apply) { New-Item -ItemType Directory -Force -Path $stage | Out-Null }

'{0,-12} {1,11}  {2,6} {3,6} {4,6} {5,6}  {6,7}' -f 'FILE','UKURAN','ATAS%','BAWAH%','KIRI%','KANAN%','ISI/TINGGI'
foreach ($n in $names) {
  $p = Join-Path $dirFull "$n.png"
  if (-not (Test-Path -LiteralPath $p)) { Write-Host "$n.png tidak ada, dilewati" -ForegroundColor Yellow; continue }

  $img = [System.Drawing.Image]::FromFile($p)
  try {
    $w = $img.Width; $h = $img.Height

    # Perkecil ke maks 256 px agar pemindaian cepat
    $scale = [Math]::Min(1.0, 256.0 / [Math]::Max($w, $h))
    $sw = [int][Math]::Max(1, [Math]::Round($w * $scale))
    $sh = [int][Math]::Max(1, [Math]::Round($h * $scale))
    $small = New-Object System.Drawing.Bitmap($sw, $sh, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($small)
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBilinear
    $g.DrawImage($img, 0, 0, $sw, $sh)
    $g.Dispose()

    $minX = $sw; $minY = $sh; $maxX = -1; $maxY = -1
    for ($y = 0; $y -lt $sh; $y++) {
      for ($x = 0; $x -lt $sw; $x++) {
        if ($small.GetPixel($x, $y).A -gt 24) {
          if ($x -lt $minX) { $minX = $x }; if ($x -gt $maxX) { $maxX = $x }
          if ($y -lt $minY) { $minY = $y }; if ($y -gt $maxY) { $maxY = $y }
        }
      }
    }
    $small.Dispose()
    if ($maxX -lt 0) { Write-Host "$n.png: tidak ada piksel terlihat, dilewati" -ForegroundColor Yellow; continue }

    # Kembalikan ke koordinat asli + bantalan kecil
    $padX = [int]($w * 0.015); $padY = [int]($h * 0.01)
    $x0 = [Math]::Max(0, [int][Math]::Floor($minX / $scale) - $padX)
    $y0 = [Math]::Max(0, [int][Math]::Floor($minY / $scale) - $padY)
    $x1 = [Math]::Min($w - 1, [int][Math]::Ceiling(($maxX + 1) / $scale) + $padX)
    $y1 = [Math]::Min($h - 1, [int][Math]::Ceiling(($maxY + 1) / $scale) + $padY)
    $cw = $x1 - $x0 + 1; $ch = $y1 - $y0 + 1

    '{0,-12} {1,11}  {2,6:N1} {3,6:N1} {4,6:N1} {5,6:N1}  {6,7:N0}%' -f `
      $n, "$w x $h", (100.0*$y0/$h), (100.0*($h-1-$y1)/$h), (100.0*$x0/$w), (100.0*($w-1-$x1)/$w), (100.0*$ch/$h)

    if ($Apply) {
      $rect = New-Object System.Drawing.Rectangle($x0, $y0, $cw, $ch)
      $crop = ([System.Drawing.Bitmap]$img).Clone($rect, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
      $outBmp = $crop
      if ($MaxHeight -gt 0 -and $ch -gt $MaxHeight) {
        $nh = $MaxHeight; $nw = [int][Math]::Round($cw * $MaxHeight / $ch)
        $outBmp = New-Object System.Drawing.Bitmap($nw, $nh, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
        $g2 = [System.Drawing.Graphics]::FromImage($outBmp)
        $g2.Clear([System.Drawing.Color]::Transparent)
        $g2.CompositingMode = [System.Drawing.Drawing2D.CompositingMode]::SourceCopy
        $g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $g2.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $g2.DrawImage($crop, 0, 0, $nw, $nh)
        $g2.Dispose(); $crop.Dispose()
      }
      $outBmp.Save((Join-Path $stage "$n.png"), [System.Drawing.Imaging.ImageFormat]::Png)
      $outBmp.Dispose()
    }
  } finally { $img.Dispose() }
}

if (-not $Apply) {
  Write-Host ""
  Write-Host "Dry-run selesai. Tidak ada file yang diubah." -ForegroundColor Green
  Write-Host "ATAS% / BAWAH% besar (mis. di atas 10%) berarti karakter 'melayang' karena ada ruang transparan."
  Write-Host "Untuk memangkas:  powershell -ExecutionPolicy Bypass -File .\trim-npc.ps1 -Apply"
  exit 0
}

# Semua gambar sumber sudah ditutup; salin hasil ke npc-*.png
Write-Host ""
foreach ($n in $names) {
  $src = Join-Path $stage "$n.png"
  if (Test-Path -LiteralPath $src) {
    $before = (Get-Item -LiteralPath (Join-Path $dirFull "$n.png")).Length
    Copy-Item -LiteralPath $src -Destination (Join-Path $dirFull "$n.png") -Force
    $after = (Get-Item -LiteralPath (Join-Path $dirFull "$n.png")).Length
    '{0,-12} {1,9:N0} B  ->  {2,9:N0} B' -f $n, $before, $after
  }
}
Remove-Item -LiteralPath $stage -Recurse -Force
Write-Host "Selesai. File sumber (Rifki.png, Leli.png, dst.) tidak disentuh. Muat ulang browser dengan Ctrl+Shift+R." -ForegroundColor Green
