/* =====================================================================
   📝 DATA-KENANGAN.JS  —  FILE UTAMA YANG KAMU UBAH
   ---------------------------------------------------------------------
   Semua tulisan, tanggal, foto, video, dan lagu diatur di sini.
   Kamu TIDAK perlu menyentuh file lain untuk ganti isi website.

   ATURAN PENTING:
   - Teks selalu di dalam tanda kutip "seperti ini".
   - Jangan hapus koma (,) di akhir baris.
   - Tanggal pakai format "TAHUN-BULAN-TANGGAL", contoh "2025-11-29".
   - Foto taruh di folder  assets/foto/   lalu tulis "assets/foto/nama-file.jpg"
   - Video taruh di folder assets/video/  lalu tulis "assets/video/nama-file.mp4"
   - Lagu taruh di folder  assets/lagu/   lalu tulis "assets/lagu/nama-file.mp3"
   ===================================================================== */

const DATA = {

  /* ---------- 1. LAGU LATAR ---------- */
  // Ganti file di assets/lagu/ lalu ubah nama file di bawah ini.
  lagu: {
    file: "assets/lagu/lagu-romantis.mp3",
    judul: "Lagu Kita",          // tampil di tombol musik
    volume: 0.5                  // 0 = senyap, 1 = paling keras
  },

  /* ---------- 2. LAYAR PEMBUKA ---------- */
  pembuka: {
    judul: "Untuk Nazwa",
    subjudul: "Semoga Cayang SUKAAAA.",
    tombol: "▶ MULAI"
  },

  /* ---------- 3. PROFIL BERDUA ---------- */
  pasangan: {
    cowok: {
      nama: "Ilham",
      foto: "assets/foto/foto-7.jpg",
      julukan: "Player 1",
      deskripsi: "Yang paling ganteng kece abis anjay burit."
    },
    cewek: {
      nama: "Nazwa",
      foto: "assets/foto/foto-8.jpg",
      julukan: "Player 2",
      deskripsi: "Yang pipi nya bulat awak halus pipi begalambung."
    },
    tanggalJadian: "2025-11-29",
    perkenalan: "Ini bukan sekadar website. ini website dibuat dengan cinta anjayyyy."
  },

  /* ---------- 4. HITUNG MUNDUR ---------- */
  // Kosongkan tanggal ("") supaya otomatis menghitung ke anniversary berikutnya.
  hitungMundur: {
    judul: "Menuju Hari Spesial",
    tanggal: "",                       // contoh isi manual: "2026-02-14"
    keterangan: "Anniversary kita 💗"
  },

  /* ---------- 5. TIMELINE PERJALANAN ---------- */
  // Tambah momen baru: copy satu blok { ... }, lalu ubah isinya.
  // "media" boleh foto (tipe: "foto") atau video (tipe: "video"), atau hapus barisnya.
  timeline: [
    {
      tanggal: "2025-09-10",
      judul: "Pertama Kenal",
      cerita: "awal kenal, cerita soal masa kecil sklinya tekajut kalo pernah 1 tk.",
      media: { tipe: "foto", file: "assets/foto/foto-10.jpg" }
    },
    {
      tanggal: "2025-10-18",
      judul: "Jalan Pertama Berdua",
      cerita: "awalan nya malu malu sekalinya pengedar sabu.",
      media: { tipe: "foto", file: "assets/foto/foto-11.jpg" }
    },
    {
      tanggal: "2025-11-29",
      judul: "Resmi Jadian",
      cerita: "Hari di mana awa dan iam cinta cinta an.",
      media: { tipe: "video", file: "assets/video/video-1.mp4" }
    },
    {
      tanggal: "2026-11-01",
      judul: "Bingung mau naro foto apa",
      cerita: "ini lucu btw.",
      media: { tipe: "foto", file: "assets/foto/foto-6.jpg" }
    }
  ],

  /* ---------- 6. GALERI FOTO & VIDEO ---------- */
  galeri: [
    { tipe: "foto",  file: "assets/foto/foto-9.jpg",   keterangan: "photobooth 1x setahun wokwok" },
    { tipe: "foto",  file: "assets/foto/foto-5.jpg",   keterangan: "INI LUCU PLIS" },
    { tipe: "video", file: "assets/video/video-2.mp4", keterangan: "Momen bulat marah" },
    { tipe: "foto",  file: "assets/foto/foto-4.jpg",   keterangan: "BAAAAAA" }
  ],

  /* ---------- 7. SURAT CINTA ---------- */
  // Setiap baris dalam tanda kutip = satu paragraf.
  surat: {
    pembuka: "Untuk Nazwa,",
    isi: [
      "Aku cinta banget sama kamuuu, jangan selingkuh ya ayanggg 😭💗 pwis pwis, aku sayang kamuuu banyak-banyak!!.",
      "Makasih yaa udah mau sama aku, udah sabar ngadepin tingkah aku yang kadang suka random HAHAHA. Pokoknya jangan bosen sama aku yaa, aku masih mau terus sama kamuuu.",
      "I LOVE YOUUUU, jangan ke mana-mana ya cintakuuu. Kalau ada apa-apa bilang, jangan malah nyari yang lain. Aku maunya kamu, kamu, dan kamuuu. Huaaaaa sayangggg 😭🫵🏻💕."
    ],
    penutup: "Selamanya milikmu,",
    pengirim: "Ilham"
  },

  /* ---------- 8. BUKU TAMU ---------- */
  bukuTamu: {
    judul: "Buku Tamu",
    keterangan: "Tinggalkan ucapan manis untuk kami berdua."
  },

  /* ---------- 9. HIASAN ---------- */
  hiasan: {
    emojiMelayang: ["💗", "💕", "💖", "🍐", "✨"],   // 🍐 = jambu kita
    emojiKlik: ["💗", "💖", "🍐"]
  },

  /* ---------- 10. PENUTUP ---------- */
  footer: "Dibuat dengan 💗 oleh Ilham untuk Nazwa"
};
