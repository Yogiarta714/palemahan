// DRAF STRUKTUR. Ganti isi dengan artikel final setelah sumber diverifikasi.
// Setiap angka/statistik wajib punya sumber dan tahun.
// content adalah daftar "blok" yang nanti dirender satu per satu di halaman artikel.

export const articles = [
    {
        id: "a-sampah-1",
        slug: "contoh-memilah-sampah-dari-sumber",
        draft: true,
        title: "[Contoh] Memilah Sampah dari Sumber",
        category: "sampah",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        image: { src: null, alt: "", credit: "" },
        readingTime: 4, // menit
        date: "2026-11-03",
        content: [
            { type: "heading", text: "[Contoh] Subjudul pertama" },
            { type: "paragraph", text: "[Contoh] Paragraf isi artikel." },
        ],
        keyFacts: [{ text: "[isi fakta penting]", source: "[nama sumber]", year: "[tahun]" }],
        tryToday: {
            title: "Pisahkan sampah organik dan anorganik hari ini",
            description: "[Contoh] Satu tindakan kecil yang bisa langsung dicoba.",
            challengeId: "bebas-plastik",
        },
        sources: [{ label: "[Nama sumber]", url: "https://example.com" }],
        related: ["contoh-mangrove-pesisir"],
    },
    {
        id: "a-pesisir-1",
        slug: "contoh-mangrove-pesisir",
        draft: true,
        title: "[Contoh] Mangrove: Benteng Hijau Pesisir",
        category: "pesisir-laut",
        summary: "[Contoh] Ringkasan satu atau dua kalimat tentang isi artikel.",
        image: { src: null, alt: "", credit: "" },
        readingTime: 5,
        date: "2026-11-03",
        content: [
            { type: "heading", text: "[Contoh] Subjudul pertama" },
            { type: "paragraph", text: "[Contoh] Paragraf isi artikel." },
        ],
        keyFacts: [],
        tryToday: null,
        sources: [],
        related: ["contoh-memilah-sampah-dari-sumber"],
    },
];

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug);
