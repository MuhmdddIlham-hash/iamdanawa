/* =====================================================================
   ⚙️ MAIN.JS — logika website (biasanya tidak perlu diubah)
   Isi website diambil dari js/data-kenangan.js
   ===================================================================== */

const $ = (id) => document.getElementById(id);
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

function formatTanggal(str) {
  const [t, b, h] = str.split("-").map(Number);
  return `${h} ${BULAN[b - 1]} ${t}`;
}
function keTanggal(str) {
  const [t, b, h] = str.split("-").map(Number);
  return new Date(t, b - 1, h);
}
function amankan(teks) {
  const div = document.createElement("div");
  div.textContent = teks;
  return div.innerHTML;
}
function buatMedia(media, kontrol = true) {
  if (!media) return "";
  if (media.tipe === "video") {
    return `<video src="${media.file}#t=0.5" ${kontrol ? "controls" : "muted loop autoplay"} playsinline preload="metadata"></video>`;
  }
  return `<img src="${media.file}" alt="" loading="lazy" />`;
}

/* ---------- 1. ISI TEKS DARI DATA ---------- */
function isiKonten() {
  const P = DATA.pasangan;
  $("pembuka-judul").textContent = DATA.pembuka.judul;
  $("pembuka-subjudul").textContent = DATA.pembuka.subjudul;
  $("tombol-mulai").textContent = DATA.pembuka.tombol;
  $("logo-teks").textContent = `${P.cowok.nama} & ${P.cewek.nama}`;
  $("perkenalan").textContent = P.perkenalan;

  ["cowok", "cewek"].forEach((k) => {
    $(`foto-${k}`).src = P[k].foto;
    $(`foto-${k}`).alt = P[k].nama;
    $(`nama-${k}`).textContent = P[k].nama;
    $(`julukan-${k}`).textContent = P[k].julukan;
    $(`desk-${k}`).textContent = P[k].deskripsi;
  });
  $("tanggal-jadian").textContent = formatTanggal(P.tanggalJadian);

  const hari = Math.floor((new Date() - keTanggal(P.tanggalJadian)) / 86400000);
  $("jumlah-hari").textContent = Math.max(0, hari);

  $("judul-countdown").textContent = DATA.hitungMundur.judul;
  $("ket-countdown").textContent = DATA.hitungMundur.keterangan;
  $("judul-tamu").textContent = DATA.bukuTamu.judul;
  $("ket-tamu").textContent = DATA.bukuTamu.keterangan;
  $("teks-footer").textContent = DATA.footer;
  $("surat-pembuka").textContent = DATA.surat.pembuka;
  $("surat-penutup").textContent = DATA.surat.penutup;
  $("surat-pengirim").textContent = DATA.surat.pengirim;
}

/* ---------- 2. TIMELINE ---------- */
function isiTimeline() {
  $("daftar-timeline").innerHTML = DATA.timeline.map((m, i) => `
    <article class="item-timeline ${i % 2 ? "kanan" : "kiri"} muncul-saat-scroll" data-testid="timeline-item-${i}">
      <div class="titik-timeline"><span>${i + 1}</span></div>
      <div class="kartu-timeline panel-mc">
        <span class="lencana">${formatTanggal(m.tanggal)}</span>
        <h3 class="judul-mc">${amankan(m.judul)}</h3>
        <p>${amankan(m.cerita)}</p>
        ${m.media ? `<div class="bingkai-foto bingkai-lebar">${buatMedia(m.media)}</div>` : ""}
      </div>
    </article>`).join("");
}

/* ---------- 3. GALERI + LIGHTBOX ---------- */
function isiGaleri() {
  $("grid-galeri").innerHTML = DATA.galeri.map((g, i) => `
    <figure class="item-galeri muncul-saat-scroll" style="--miring:${[-3, 2, -1.5, 3, -2][i % 5]}deg" data-index="${i}" data-testid="gallery-item-${i}">
      <span class="selotip"></span>
      <div class="bingkai-foto">${buatMedia(g, false)}${g.tipe === "video" ? '<span class="ikon-play">▶</span>' : ""}</div>
      <figcaption>${amankan(g.keterangan)}</figcaption>
    </figure>`).join("");

  $("grid-galeri").addEventListener("click", (e) => {
    const item = e.target.closest(".item-galeri");
    if (!item) return;
    const g = DATA.galeri[item.dataset.index];
    $("isi-lightbox").innerHTML = buatMedia(g, true) + `<p class="judul-mc">${amankan(g.keterangan)}</p>`;
    $("lightbox").hidden = false;
  });
  const tutup = () => { $("lightbox").hidden = true; $("isi-lightbox").innerHTML = ""; };
  $("tutup-lightbox").addEventListener("click", tutup);
  $("lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") tutup(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") tutup(); });
}

/* ---------- 4. HITUNG MUNDUR ---------- */
function targetHitungMundur() {
  if (DATA.hitungMundur.tanggal) return keTanggal(DATA.hitungMundur.tanggal);
  const jadian = keTanggal(DATA.pasangan.tanggalJadian);
  const kini = new Date();
  let target = new Date(kini.getFullYear(), jadian.getMonth(), jadian.getDate());
  if (target <= kini) target = new Date(kini.getFullYear() + 1, jadian.getMonth(), jadian.getDate());
  if (target <= jadian) target = new Date(jadian.getFullYear() + 1, jadian.getMonth(), jadian.getDate());
  return target;
}
function jalankanHitungMundur() {
  const target = targetHitungMundur();
  $("tanggal-target").textContent = "TARGET: " + formatTanggal(`${target.getFullYear()}-${target.getMonth() + 1}-${target.getDate()}`).toUpperCase();
  const tick = () => {
    const sisa = Math.max(0, target - new Date());
    $("cd-hari").textContent = Math.floor(sisa / 86400000);
    $("cd-jam").textContent = String(Math.floor(sisa / 3600000) % 24).padStart(2, "0");
    $("cd-menit").textContent = String(Math.floor(sisa / 60000) % 60).padStart(2, "0");
    $("cd-detik").textContent = String(Math.floor(sisa / 1000) % 60).padStart(2, "0");
  };
  tick();
  setInterval(tick, 1000);
}

/* ---------- 5. SURAT ---------- */
function siapkanSurat() {
  $("peti-surat").addEventListener("click", () => {
    $("peti-surat").classList.add("terbuka");
    const kertas = $("kertas-surat");
    if (!kertas.hidden) return;
    setTimeout(() => {
      kertas.hidden = false;
      const wadah = $("surat-isi");
      wadah.innerHTML = "";
      let p = 0;
      const ketik = () => {
        if (p >= DATA.surat.isi.length) return;
        const el = document.createElement("p");
        wadah.appendChild(el);
        const teks = DATA.surat.isi[p++];
        let i = 0;
        const t = setInterval(() => {
          el.textContent = teks.slice(0, ++i);
          if (i >= teks.length) { clearInterval(t); setTimeout(ketik, 250); }
        }, 22);
      };
      ketik();
      kertas.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 600);
  });
}

/* ---------- 6. BUKU TAMU (localStorage) ---------- */
const KUNCI_TAMU = "bukuTamu_" + DATA.pasangan.cowok.nama + "_" + DATA.pasangan.cewek.nama;
function ambilUcapan() {
  try { return JSON.parse(localStorage.getItem(KUNCI_TAMU)) || []; } catch { return []; }
}
function tampilkanUcapan() {
  const list = ambilUcapan();
  $("daftar-tamu").innerHTML = list.length
    ? list.map((u, i) => `
      <div class="kartu-ucapan panel-mc" data-testid="guestbook-entry-${i}">
        <div class="kepala-ucapan"><span class="avatar">${amankan(u.nama.charAt(0).toUpperCase())}</span>
          <strong class="judul-mc">${amankan(u.nama)}</strong><small>${amankan(u.waktu)}</small></div>
        <p>${amankan(u.pesan)}</p>
      </div>`).join("")
    : `<div class="kosong panel-mc" data-testid="guestbook-empty">Belum ada ucapan. Jadilah yang pertama! 🍐</div>`;
}
function siapkanBukuTamu() {
  tampilkanUcapan();
  $("form-tamu").addEventListener("submit", (e) => {
    e.preventDefault();
    const nama = $("input-nama").value.trim();
    const pesan = $("input-pesan").value.trim();
    if (!nama || !pesan) return;
    const kini = new Date();
    const list = ambilUcapan();
    list.unshift({ nama, pesan, waktu: `${kini.getDate()} ${BULAN[kini.getMonth()]} ${kini.getFullYear()}` });
    localStorage.setItem(KUNCI_TAMU, JSON.stringify(list.slice(0, 100)));
    e.target.reset();
    tampilkanUcapan();
    ledakanHati(window.innerWidth / 2, window.innerHeight / 2, 14);
  });
}

/* ---------- 7. MUSIK ---------- */
const audio = $("audio-latar");
function siapkanMusik() {
  audio.src = DATA.lagu.file;
  audio.volume = DATA.lagu.volume;
  $("tombol-musik").addEventListener("click", () => (audio.paused ? audio.play() : audio.pause()));
  audio.addEventListener("play", perbaruiTombolMusik);
  audio.addEventListener("pause", perbaruiTombolMusik);
}
function perbaruiTombolMusik() {
  const main = !audio.paused;
  $("tombol-musik").classList.toggle("sedang-main", main);
  $("label-musik").textContent = main ? DATA.lagu.judul : "Putar";
}

/* ---------- 8. PEMBUKA ---------- */
function siapkanPembuka() {
  document.body.classList.add("terkunci");
  $("tombol-mulai").addEventListener("click", (e) => {
    audio.play().catch(() => {});
    ledakanHati(e.clientX, e.clientY, 20);
    $("pembuka").classList.add("keluar");
    document.body.classList.remove("terkunci");
    setTimeout(() => $("pembuka").remove(), 900);
  });
}

/* ---------- 9. EFEK: hati melayang, klik, muncul saat scroll ---------- */
function hatiMelayang() {
  const wadah = $("wadah-melayang");
  setInterval(() => {
    if (document.hidden || wadah.childElementCount > 18) return;
    let el;
    if (Math.random() < 0.18) {
      el = buatSprite("jambu", "melayang sprite-melayang");
    } else {
      el = document.createElement("span");
      el.className = "melayang";
      el.textContent = DATA.hiasan.emojiMelayang[Math.floor(Math.random() * DATA.hiasan.emojiMelayang.length)];
    }
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 14 + Math.random() * 18 + "px";
    el.style.animationDuration = 7 + Math.random() * 6 + "s";
    wadah.appendChild(el);
    setTimeout(() => el.remove(), 13000);
  }, 900);
}
function ledakanHati(x, y, jumlah = 6) {
  for (let i = 0; i < jumlah; i++) {
    const el = document.createElement("span");
    const kotak = Math.random() < 0.4;
    el.className = kotak ? "partikel partikel-kotak" : "partikel";
    if (!kotak) el.textContent = DATA.hiasan.emojiKlik[Math.floor(Math.random() * DATA.hiasan.emojiKlik.length)];
    const sudut = Math.random() * Math.PI * 2;
    const jarak = 40 + Math.random() * 70;
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.style.setProperty("--dx", Math.cos(sudut) * jarak + "px");
    el.style.setProperty("--dy", Math.sin(sudut) * jarak - 30 + "px");
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 900);
  }
}
function efekKlik() {
  document.addEventListener("click", (e) => {
    if (e.target.closest("input, textarea, video, .lightbox")) return;
    ledakanHati(e.clientX, e.clientY);
  });
}
function munculSaatScroll() {
  const obs = new IntersectionObserver((entri) => {
    entri.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("muncul"); obs.unobserve(en.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll(".muncul-saat-scroll").forEach((el) => obs.observe(el));
}

/* ---------- JALANKAN SEMUA ---------- */
isiKonten();
isiTimeline();
isiGaleri();
jalankanHitungMundur();
siapkanSurat();
siapkanBukuTamu();
siapkanMusik();
siapkanPembuka();
gambarSprite("sprite-cinnamoroll", "cinnamoroll");
gambarSprite("sprite-kitty", "kitty");
gambarSprite("sprite-hati", "hati");
gambarSprite("sprite-jambu-nav", "jambu");
hatiMelayang();
efekKlik();
munculSaatScroll();
