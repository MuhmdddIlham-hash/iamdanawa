/* =====================================================================
   👾 KARAKTER-PIXEL.JS — gambar pixel Cinnamoroll, Hello Kitty, jambu, hati
   Setiap huruf = 1 pixel warna. Titik (.) = transparan.
   Mau ubah warna? Ganti kode warna di WARNA_PIXEL.
   ===================================================================== */

const WARNA_PIXEL = {
  k: "#1b1b2f", // garis hitam
  w: "#ffffff", // putih
  g: "#e6ecf5", // bayangan putih
  b: "#7cc4ff", // biru
  d: "#3f7fd1", // biru tua
  r: "#ff3b5c", // merah pita
  p: "#ffb3cc", // pink pipi
  y: "#ffd34d", // kuning
  h: "#6bbf3a", // hijau jambu
  j: "#3f8a22", // hijau tua
  m: "#ff7fa8", // daging jambu pink
  c: "#7a4f2b"  // coklat tangkai
};

const SPRITE = {
  cinnamoroll: [
    "....kkkkkkkk....",
    "..kkwwwwwwwwkk..",
    ".kwwwwwwwwwwwwk.",
    "kwwwwwwwwwwwwwwk",
    "kwwwbkwwwwkbwwwk",
    "kwwwbbwwwwbbwwwk",
    "kwppwwwwwwwwppwk",
    "kgwwwwwkkwwwwwgk",
    "kwkkgwwwwwwgkkwk",
    "kwwwkkkkkkkkwwwk",
    "kwwwk.kbbk.kwwwk",
    ".kwwk.kwwk.kwwk.",
    "..kk.kwwwwk.kk..",
    ".....kwkkwk.....",
    "......k..k......",
    "................"
  ],
  kitty: [
    "..kk.......kkrr.",
    ".kwwk.....kwrrrr",
    ".kwwwkkkkkwwkrrk",
    "kwwwwwwwwwwwkrr.",
    "kwwwwwwwwwwwwk..",
    "kwwkwwwwwwkwwwk.",
    "kwwkwwwwwwkwwwk.",
    "kwwwwwyywwwwwwk.",
    "kkwwwwwwwwwwwkk.",
    ".kgwwwwwwwwwgk..",
    "..kkkkkkkkkkk...",
    "....kddbbddk....",
    "...kwkbbbbkwk...",
    "....kbbkkbbk....",
    "....kwk..kwk....",
    ".....k....k....."
  ],
  jambu: [
    ".......cc.......",
    "......cjjh......",
    ".....kkjhkk.....",
    "...kkhhhhhhkk...",
    "..khhhhhhhhhhk..",
    ".khhmmmmmmmmhhk.",
    ".khmmmmmmmmmmhk.",
    "khmmmyymmyymmmhk",
    "khmmmmmmmmmmmmhk",
    "khmmmyymmyymmmhk",
    ".khmmmmmmmmmmhk.",
    ".khhmmmmmmmmhhk.",
    "..khhhhhhhhhhk..",
    "...kkhhhhhhkk...",
    ".....kkkkkk.....",
    "................"
  ],
  hati: [
    "................",
    "..kkkk....kkkk..",
    ".krrrrk..krrrrk.",
    "krrwwrrkkrrrrrrk",
    "krwwrrrrrrrrrrrk",
    "krrrrrrrrrrrrrrk",
    "krrrrrrrrrrrrrrk",
    ".krrrrrrrrrrrrk.",
    "..krrrrrrrrrrk..",
    "...krrrrrrrrk...",
    "....krrrrrrk....",
    ".....krrrrk.....",
    "......krrk......",
    ".......kk.......",
    "................",
    "................"
  ]
};

// Gambar sprite ke <canvas> (ukuran 16x16, diperbesar lewat CSS)
function gambarSprite(idCanvas, namaSprite) {
  const canvas = document.getElementById(idCanvas);
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  SPRITE[namaSprite].forEach((baris, y) => {
    baris.padEnd(16, ".").split("").forEach((huruf, x) => {
      if (huruf === "." || !WARNA_PIXEL[huruf]) return;
      ctx.fillStyle = WARNA_PIXEL[huruf];
      ctx.fillRect(x, y, 1, 1);
    });
  });
}

// Bikin elemen canvas baru berisi sprite (dipakai untuk hiasan melayang)
function buatSprite(namaSprite, kelas) {
  const c = document.createElement("canvas");
  c.width = 16; c.height = 16;
  if (kelas) c.className = kelas;
  const id = "spr-" + Math.random().toString(36).slice(2);
  c.id = id;
  document.body.appendChild(c);
  gambarSprite(id, namaSprite);
  c.removeAttribute("id");
  return c;
}
