import mangroveRoots from "../assets/images/artikel-mangrove-akar.webp";

// Isian bawaan untuk artikel
const base = {
    draft: true,
    image: { src: null, alt: "", credit: "" },
    date: "2026-11-04",
    content: [],
    keyFacts: [],
    takeaways: [],
    tryToday: null,
    sources: [],
    related: [],
};

export const articles = [
    {
        ...base,
        id: "a-pesisir-1",
        slug: "contoh-mangrove-pesisir", // ganti saat final, lalu perbarui referensinya (related, hotspots)
        title: "Mangrove Ngurah Rai: Benteng Hijau di Hilir Sungai",
        category: "pesisir-laut",
        summary:
            "Hutan bakau di selatan Bali menahan gelombang dan menjadi rumah bagi puluhan jenis mangrove. Tapi karena berada di hilir sungai, ia juga menerima kiriman sampah plastik.",
        image: {
            src: mangroveRoots,
            alt: "Akar penyangga pohon mangrove yang menjuntai ke air gelap, dengan daun hijau di sisi kanan",
            width: 1400,
            height: 933,
            caption:
                "Akar penyangga mangrove di Florida Keys, Amerika Serikat. Foto ilustrasi, bukan dari Bali",
            credit: "Foto: Florida-Guidebook.com / Unsplash",
        },
        readingTime: 3,
        tags: ["mangrove", "pesisir", "akar", "tahura", "ngurah rai", "sampah plastik"],
        takeaways: [
            "Akar mangrove menahan lumpur dan meredam gelombang, sehingga melindungi pesisir.",
            "Mangrove Ngurah Rai berada di hilir sungai, jadi sampah plastik dari sungai kerap tersangkut di akarnya.",
            "Plastik yang kamu tolak hari ini adalah satu sampah yang tidak sampai ke akar mangrove.",
        ],
        content: [
            {
                type: "paragraph",
                text: "Di selatan Bali, di antara Kota Denpasar dan Kabupaten Badung, terbentang hutan bakau yang menjadi satu-satunya taman hutan raya di pulau ini: Tahura Ngurah Rai. Kawasan ini ditetapkan pada 1993 dengan luas 1.373,5 hektare. Setelah keputusan pemerintah pada 2021, luas yang tercatat menjadi sekitar 1.158 hektare.",
            },
            { type: "heading", text: "Akar yang bekerja tanpa henti" },
            {
                type: "paragraph",
                text: "Dari kejauhan, hutan ini tampak seperti hamparan hijau yang tenang. Dari dekat, kamu akan melihat akar-akar menjulang dari lumpur dan air payau. Akar itulah yang bekerja: menahan lumpur agar pantai tidak terkikis dan memecah tenaga gelombang sebelum sampai ke daratan.",
            },
            {
                type: "paragraph",
                text: "Tahura Ngurah Rai menyimpan 33 jenis mangrove. Yang paling banyak adalah perapat (Sonneratia alba), yang dalam bahasa Bali disebut prapat. Jenis seperti ini punya akar timbul yang berfungsi menopang pohonnya, dan akar yang tertutup endapan menjadi lemah.",
            },
            { type: "facts" },
            {
                type: "paragraph",
                text: "Sebuah kajian internasional menemukan bahwa hutan mangrove selebar 100 meter dapat mengurangi tinggi gelombang antara 13 dan 66 persen. Angka ini sangat dipengaruhi kerapatan pohon, kedalaman air, dan besar gelombang, jadi hasilnya tidak sama di setiap tempat. Pesannya tetap jelas: semakin lebar dan rapat hutannya, semakin besar perlindungannya.",
            },
            {
                type: "paragraph",
                text: "Hutan ini juga menjadi sumber hidup. Sebuah kelompok nelayan di Pemogan, Denpasar, menangkap sekitar 2,5 kilogram kepiting bakau per hari untuk dijual ke pasar ikan Jimbaran. Mereka meyakini mangrove yang bersih membuat sumber daya perikanan tumbuh lebih baik.",
            },
            { type: "heading", text: "Di hilir, menampung kiriman dari hulu" },
            {
                type: "paragraph",
                text: "Masalahnya, Tahura Ngurah Rai berada di hilir sungai. Saat musim hujan mencapai puncak, sampah dari Tukad Mati dan Tukad Badung yang mengapit kawasan ini terbawa arus lalu tersangkut di akar-akar mangrove. Pada 2023, kelompok nelayan itu melaporkan memungut rata-rata hingga tiga ton sampah plastik per minggu dari dalam hutan. Isinya botol, kemasan, kantong kresek, sampai sandal dan sepatu. Para nelayan memungutnya dengan kano, pagi dan sore menyesuaikan pasang air laut. Plastik yang terkumpul dipilah, lalu diangkut lembaga swadaya masyarakat untuk didaur ulang.",
            },
            {
                type: "paragraph",
                text: "Pada Desember 2025, sampah plastik juga terlihat tersangkut di mangrove Pulau Serangan, yang termasuk kawasan Tahura. Sampah yang menumpuk bukan sekadar pemandangan buruk. Plastik yang tersangkut dapat mengganggu pertumbuhan mangrove. Artinya, benteng alami yang melindungi pesisir justru terancam oleh sampah yang kita hasilkan di daratan.",
            },
            { type: "heading", text: "Pemulihan terus berjalan" },
            {
                type: "paragraph",
                text: "Kabar baiknya, upaya memulihkan hutan ini tidak berhenti. Pada 2 September 2026, sebanyak 5.000 bibit mangrove ditanam di Tahura Ngurah Rai dalam kegiatan yang menjadi bagian dari inisiatif laboratorium hidup untuk penelitian mangrove. Menanam saja belum cukup kalau sampah terus datang dari hulu. Hutan yang pulih membutuhkan hutan yang bersih.",
            },
            { type: "heading", text: "Mulai dari hulu, mulai dari tanganmu" },
            {
                type: "paragraph",
                text: "Memunguti sampah di hutan mangrove sangat penting, tetapi lebih baik lagi kalau sampah itu tidak pernah sampai ke sana. Setiap kantong plastik yang kamu tolak dan setiap botol yang kamu isi ulang adalah satu sampah yang tidak ikut terbawa sungai. Kamu juga bisa ikut aksi bersih-bersih bersama komunitas di sekitarmu. Mulailah dari satu kebiasaan kecil hari ini.",
            },
        ],
        keyFacts: [
            {
                text: "Tahura Ngurah Rai ditetapkan pada 1993 seluas 1.373,5 hektare. Keputusan pemerintah pada 2021 menetapkan luasnya sekitar 1.158 hektare.",
                source: "Mongabay Indonesia",
                year: "2023",
            },
            {
                text: "Hutan mangrove selebar 100 meter dapat mengurangi tinggi gelombang 13 sampai 66 persen.",
                source: "McIvor dkk., The Nature Conservancy dan Wetlands International",
                year: "2012",
            },
            {
                text: "Kelompok nelayan di Pemogan, Denpasar, memungut rata-rata hingga 3 ton sampah plastik per minggu di Hutan Mangrove Ngurah Rai.",
                source: "ANTARA Bali",
                year: "2023",
            },
        ],
        tryToday: {
            title: "Tolak satu kantong plastik hari ini",
            description:
                "Plastik yang tidak kamu pakai hari ini adalah plastik yang tidak akan terbawa sungai ke akar mangrove. Mulai dari hal kecil: bawa tas belanja sendiri atau tolak kantong tambahan saat membeli sesuatu.",
            challengeId: "bebas-plastik",
        },
        sources: [
            {
                label: "Mongabay Indonesia (2023). Kala hutan mangrove Ngurah Rai dominan blok pemanfaatan",
                url: "https://mongabay.co.id/2023/03/15/kala-hutan-mangrove-ngurah-rai-dominan-blok-pemanfaatan/amp/",
            },
            {
                label: "Mongabay Indonesia (2019). Menyusuri Taman Hutan Raya Ngurah Rai sambil belajar lingkungan",
                url: "https://mongabay.co.id/2019/05/19/menyusuri-taman-hutan-raya-ngurah-rai-sambil-belajar-lingkungan/",
            },
            {
                label: "McIvor dkk. (2012). Reduction of Wind and Swell Waves by Mangroves. The Nature Conservancy dan Wetlands International",
                url: "https://library.sprep.org/sites/default/files/reduction-wind-swell-waves-by-mangvoes.pdf",
            },
            {
                label: "ANTARA Bali (19 Juni 2023). Nelayan pungut 3 ton sampah plastik per minggu di hutan mangrove",
                url: "https://bali.antaranews.com/berita/318798/nelayan-pungut-3-ton-sampah-plastik-per-minggu-di-hutan-mangrove",
            },
            {
                label: 'ANTARA (2 September 2026). BLDF inisiasi "Living Laboratory" mangrove dukung riset berkelanjutan',
                url: "https://www.antaranews.com/berita/5722376/bldf-inisiasi-living-laboratory-mangrove-dukung-riset-berkelanjutan",
            },
            {
                label: "Kompas.com (10 Desember 2025). Jelajah mangrove di Pulau Serangan Bali, terancam sampah dan sedimentasi",
                url: "https://lestari.kompas.com/read/2025/12/10/103500386/jelajah-mangrove-di-pulau-serangan-bali-terancam-sampah-dan-sedimentasi?page=all",
            },
        ],
        related: ["contoh-memilah-sampah-dari-sumber", "contoh-tanpa-plastik"],
    },
    {
        ...base,
        id: "a-sampah-1",
        slug: "contoh-memilah-sampah-dari-sumber",
        title: "[Contoh] Memilah Sampah dari Sumber",
        category: "sampah",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        readingTime: 4,
        tags: ["sampah", "pilah", "organik", "anorganik", "rumah tangga"],
        content: [
            {
                type: "paragraph",
                text: "[Contoh] Paragraf pembuka yang dimulai dari kasus nyata di Bali.",
            },
            { type: "heading", text: "[Contoh] Subjudul pertama" },
            {
                type: "paragraph",
                text: "[Contoh] Paragraf penjelasan. Tulis dengan bahasa yang ringkas dan mudah dipahami.",
            },
            { type: "subheading", text: "[Contoh] Sub-subjudul" },
            {
                type: "list",
                items: ["[Contoh] Poin pertama", "[Contoh] Poin kedua", "[Contoh] Poin ketiga"],
            },
            { type: "heading", text: "[Contoh] Subjudul kedua" },
            {
                type: "paragraph",
                text: "[Contoh] Paragraf penutup yang mengarah ke tindakan nyata.",
            },
        ],
        keyFacts: [
            {
                text: "[Isi fakta penting pertama yang bersumber]",
                source: "[Nama sumber]",
                year: "[Tahun]",
            },
            {
                text: "[Isi fakta penting kedua yang bersumber]",
                source: "[Nama sumber]",
                year: "[Tahun]",
            },
        ],
        tryToday: {
            title: "Tolak satu kantong plastik hari ini",
            description: "[Contoh] Satu tindakan kecil yang bisa langsung dicoba.",
            challengeId: "bebas-plastik",
        },
        sources: [
            { label: "[Nama sumber 1]", url: "" },
            { label: "[Nama sumber 2]", url: "" },
        ],
        related: ["contoh-mangrove-pesisir", "contoh-tanpa-plastik"],
    },
    {
        ...base,
        id: "a-iklim-1",
        slug: "contoh-iklim-dan-subak",
        title: "[Contoh] Perubahan Iklim dan Petani Subak",
        category: "iklim",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        readingTime: 5,
        tags: ["iklim", "subak", "pertanian", "cuaca"],
    },
    {
        ...base,
        id: "a-biodiversitas-1",
        slug: "contoh-jalak-bali",
        title: "[Contoh] Jalak Bali: Burung Endemik Pulau Dewata",
        category: "biodiversitas",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        readingTime: 4,
        tags: ["jalak bali", "endemik", "burung"],
    },
    {
        ...base,
        id: "a-energi-1",
        slug: "contoh-energi-surya",
        title: "[Contoh] Energi Surya di Pulau Dewata",
        category: "energi",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        readingTime: 6,
        tags: ["surya", "listrik", "energi bersih"],
    },
    {
        ...base,
        id: "a-gaya-hidup-1",
        slug: "contoh-tanpa-plastik",
        title: "[Contoh] Tanpa Plastik Sekali Pakai",
        category: "gaya-hidup",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        readingTime: 4,
        tags: ["plastik", "tumbler", "belanja"],
    },
];

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug);
