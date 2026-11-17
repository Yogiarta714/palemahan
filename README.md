# Palemahan

**Learn Today, Protect Tomorrow.**

Platform edukasi lingkungan berbahasa Indonesia dari Bali, untuk belajar, menguji pemahaman, lalu beraksi.

**Situs:** [palemahan.vercel.app](https://palemahan.vercel.app/)

Karya untuk **Techno Versary Vol. II, Web Design Competition**
Tema: *EcoDigital For Environment* · Subtema: **Edukasi Lingkungan**

---

## Daftar Isi

- [Tentang Palemahan](#tentang-palemahan)
- [Fitur](#fitur)
- [Teknologi](#teknologi)
- [Memulai](#memulai)
- [Perintah yang Tersedia](#perintah-yang-tersedia)
- [Struktur Proyek](#struktur-proyek)
- [Mengelola Konten](#mengelola-konten)
- [Penyimpanan Data dan Privasi](#penyimpanan-data-dan-privasi)
- [Aksesibilitas dan Performa](#aksesibilitas-dan-performa)
- [Deploy](#deploy)
- [Sumber Data dan Kredit Aset](#sumber-data-dan-kredit-aset)
- [Tim](#tim)
- [Lisensi dan Hak Cipta](#lisensi-dan-hak-cipta)

---

## Tentang Palemahan

Palemahan mengajak generasi muda memahami isu lingkungan, dimulai dari Bali, menguji pemahaman lewat kuis, lalu mengubahnya menjadi aksi nyata sehari-hari.

Pendekatannya **Bali-first**: setiap topik dibuka dari kasus nyata di Bali, lalu dihubungkan ke konteks Indonesia dan global. Filosofinya **From Awareness to Action**. Pengguna tidak berhenti pada "tahu", tetapi dibawa melalui alur **Learn → Test → Act** yang saling terhubung: artikel merekomendasikan kuis, kuis merekomendasikan aksi.

*Palemahan* adalah salah satu dari tiga unsur *Tri Hita Karana*, yaitu hubungan harmonis manusia dengan alam dan lingkungan.

Tiga pembeda utama:

1. **Loop yang terhubung.** Artikel, Eco Quiz, dan Eco Action saling mengarahkan.
2. **Bali-first.** Konten, peta, dan studi kasus lokal, dengan sumber yang dicantumkan.
3. **Progres personal tanpa akun.** Eco Journey tersimpan di perangkat pengguna.

## Fitur

| Fitur | Keterangan |
|---|---|
| **Pusat Belajar** (`/jelajahi`) | Artikel ringkas dengan pencarian dan filter kategori. Tiap artikel memuat fakta penting bersumber, poin utama, dan kotak "Coba Hari Ini". |
| **Eco Quiz** (`/kuis`) | Kuis berbasis skenario sehari-hari dengan skor otomatis, penjelasan tiap jawaban, hasil, dan opsi mengulang. |
| **Peta Eco Bali** (`/peta-bali`) | Peta ilustratif Pulau Bali buatan sendiri (SVG) dengan titik-titik isu lingkungan. Tiap titik menautkan ke artikel, kuis, dan aksi terkait. |
| **Eco Action** (`/aksi`) | Tantangan 7 hari dengan pelacak harian dan ringkasan progres. |
| **Eco Journey** | Ringkasan progres belajar: artikel dibaca, hasil kuis, tantangan, dan titik peta yang sudah dilihat. |
| **Cerita "Jejak Satu Botol"** (`/cerita/jejak-botol`) | Cerita interaktif berbasis gulir yang mengikuti perjalanan satu botol plastik dari rumah di Bali sampai ke laut, beserta akibatnya. Punya tombol Kembali/Lanjut dan versi statis untuk pengguna yang mengurangi animasi. |
| **Kontak** (`/kontak`) | Formulir kontak dengan validasi, terhubung ke Formspree. |
| **Halaman 404** | Penanganan rute yang tidak ditemukan. |

Istilah merek **Eco Quiz**, **Eco Action**, dan **Eco Journey** dipakai konsisten di seluruh antarmuka. Seluruh teks lainnya berbahasa Indonesia.

## Teknologi

- [React](https://react.dev/) dengan [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (token desain di `src/index.css`)
- [React Router](https://reactrouter.com/)
- [Motion](https://motion.dev/) untuk transisi halaman dan cerita berbasis gulir
- [Lucide React](https://lucide.dev/) untuk ikon
- Fraunces dan Inter (font), dimuat secara lokal
- `localStorage` untuk progres pengguna, tanpa backend
- [Formspree](https://formspree.io/) untuk formulir kontak
- [Vercel](https://vercel.com/) untuk hosting

Versi tiap paket tercatat di `package.json`.

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org/) versi LTS terbaru (disarankan 20.19 ke atas)
- npm (sudah termasuk dalam Node.js)
- Git

### Instalasi

```bash
# 1. Klon repositori
git clone https://github.com/Yogiarta714/palemahan.git
cd palemahan

# 2. Pasang dependensi
npm install

# 3. Jalankan server pengembangan
npm run dev
```

Buka alamat yang tampil di terminal (biasanya `http://localhost:5173`). Perubahan pada kode akan langsung termuat ulang di peramban.

### Membuat build produksi

```bash
npm run build      # hasil ada di folder dist/
npm run preview    # pratinjau build secara lokal
```

## Perintah yang Tersedia

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan server pengembangan |
| `npm run build` | Membuat build produksi ke folder `dist/` |
| `npm run preview` | Menjalankan pratinjau lokal dari build produksi |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Struktur Proyek

```
src/
├── assets/images/        Foto dan gambar (WebP)
├── components/
│   ├── action/           Komponen Eco Action (pelacak hari, ringkasan Eco Journey)
│   ├── articles/         Komponen Pusat Belajar dan detail artikel
│   ├── contact/          Formulir kontak
│   ├── home/             Bagian-bagian Beranda
│   ├── layout/           Navbar, Footer, Layout, ScrollToTop, PageLoader
│   ├── map/              Peta Eco Bali (peta, daftar lokasi, panel cerita)
│   ├── quiz/             Komponen Eco Quiz
│   ├── story/            Cerita "Jejak Satu Botol" (panggung, adegan, versi statis)
│   └── ui/               Komponen dasar: Button, Logo, ContourPattern, Photo, dan lainnya
├── context/              Penyedia state progres (Eco Journey)
├── data/                 Seluruh konten (artikel, kuis, tantangan, titik peta, cerita)
├── hooks/                Hook khusus (useProgress, usePageTitle, dan lainnya)
├── lib/                  Fungsi bantu (penyimpanan, kuis, streak, validasi, format tanggal)
├── pages/                Satu berkas per halaman/rute
├── App.jsx               Daftar rute (dimuat per halaman dengan React.lazy)
├── index.css             Token desain Tailwind dan gaya dasar
└── main.jsx              Titik masuk aplikasi
```

## Mengelola Konten

Semua konten berada di `src/data/`, terpisah dari kode tampilan, sehingga bisa diedit tanpa menyentuh komponen.

| Berkas | Isi |
|---|---|
| `articles.js` | Artikel: judul, kategori, isi, fakta penting, sumber |
| `categories.js` | Daftar kategori |
| `quizzes.js` | Soal Eco Quiz per kategori |
| `challenges.js` | Tantangan 7 hari Eco Action |
| `hotspots.js` | Titik di Peta Eco Bali (koordinat, ringkasan, fakta, foto) |
| `baliMap.js` | Gambar peta SVG dan pemetaan koordinat |
| `story.js` | Teks kartu cerita "Jejak Satu Botol" |
| `credits.js` | Kredit dan sumber untuk halaman Tentang |

Aturan konten:

- **Setiap statistik wajib memiliki sumber dan tahun.** Angka tanpa sumber tidak dipublikasikan.
- **Topik yang cepat berubah** (misalnya status TPA Suwung) selalu memakai pola "Per [tanggal], [sumber] menyatakan...", dan harus diperiksa ulang sebelum rilis.
- **Setiap gambar** memiliki teks alternatif, kredit, dan lisensi yang tercatat.
- Ilustrasi yang bukan dari lokasi sebenarnya diberi keterangan "foto ilustrasi".

## Penyimpanan Data dan Privasi

Palemahan tidak memakai akun maupun basis data. Progres pengguna disimpan hanya di peramban, pada `localStorage` dengan kunci `palemahan:v1`:

| Data | Isi |
|---|---|
| `articlesRead` | Artikel yang sudah dibaca |
| `quizResults` | Hasil kuis per kategori |
| `challenges` | Progres tantangan 7 hari |
| `mapVisited` | Titik peta yang sudah dibuka |

Untuk mengatur ulang progres, jalankan di konsol peramban:

```js
localStorage.removeItem("palemahan:v1");
```

## Aksesibilitas dan Performa

- HTML semantik, tautan "Lewati ke konten", fokus yang terlihat, dan navigasi keyboard.
- Teks alternatif pada gambar dan ilustrasi.
- Menghormati pengaturan `prefers-reduced-motion`: animasi dikurangi, dan cerita interaktif tersedia dalam versi statis.
- Halaman dimuat per rute (`React.lazy`) agar bundel awal tetap kecil.
- Gambar berformat WebP, font dimuat lokal.
- Peta dibuat sendiri dengan SVG tanpa pustaka peta pihak ketiga.

## Deploy

Situs di-deploy di Vercel: **https://palemahan.vercel.app/**

Pengaturan yang dipakai:

| Pengaturan | Nilai |
|---|---|
| Framework preset | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

Berkas `vercel.json` berisi aturan *rewrite* agar semua rute diarahkan ke aplikasi satu halaman, sehingga memuat ulang halaman seperti `/peta-bali` tidak menghasilkan 404.

## Sumber Data dan Kredit Aset

Daftar lengkap sumber statistik dan kredit foto tersedia di halaman **[Tentang → Sumber dan kredit](https://palemahan.vercel.app/tentang#sumber)** serta di `src/data/credits.js`. Di antaranya:

| Aset | Sumber | Lisensi |
|---|---|---|
| Garis pantai pada peta | [Natural Earth](https://www.naturalearthdata.com/), disederhanakan dan diperhalus | Domain publik |
| Font Fraunces dan Inter | Proyek font terbuka | SIL Open Font License 1.1 |
| Ikon | [Lucide](https://lucide.dev/) | ISC |
| Foto | Dicatat per foto (nama pembuat, sumber, dan lisensi) di `src/data/credits.js` | Sesuai masing-masing foto |
| Ilustrasi cerita "Jejak Satu Botol" | Dibuat sendiri oleh tim (SVG) | Hak cipta tim |

Data dan statistik dalam artikel dikutip dari sumber primer atau media tepercaya dengan tahun yang dicantumkan, antara lain lembaga pemerintah, lembaga riset, dan media nasional. Kandidat sumber utama: KLHK/SIPSN, BPS, UNEP, IPCC, FAO, IUCN Red List, dan dokumen resmi pemerintah daerah Bali.

## Tim

| Nama | Peran |
|---|---|
| I Kadek Yogiarta Adi Winata | Pengembang dan perancang |
| Dewa Made Pradnyana Kusuma | Riset sumber, kurasi foto |
| I Putu Gede Oka Adyuta | Riset sumber, kuis, dan pengujian |

## Lisensi dan Hak Cipta

© 2026 Tim Palemahan. Dibuat untuk Techno Versary Vol. II.

Aset pihak ketiga (foto, font, ikon, data) tunduk pada lisensi masing-masing sebagaimana tercatat di bagian [Sumber Data dan Kredit Aset](#sumber-data-dan-kredit-aset).
