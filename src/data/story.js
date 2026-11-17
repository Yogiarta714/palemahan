// Isi cerita "Jejak Satu Botol".

// Warna air dan laut
export const palette = {
    air: "#A9C7BE",
    laut: "#2F5D62",
    lautDalam: "#1E3F44",
};

export const chapters = [
    {
        id: "rumah",
        label: "Bab 1",
        title: "Rumah",
        ringkas: "Botol habis diminum, lalu tertinggal di pinggir jalan.",
        alt: "Ilustrasi: gerbang rumah Bali dengan pohon jepun, seseorang berjalan pergi, sebuah botol plastik kosong tertinggal di dekat tong sampah.",
        beats: [
            { at: 0, text: "Botol ini baru saja habis diminum. Bagi kita, ceritanya selesai." },
            {
                at: 0.5,
                text: "Bagi si botol, perjalanannya baru dimulai. Ia tertinggal di pinggir jalan.",
            },
        ],
    },
    {
        id: "selokan",
        label: "Bab 2",
        title: "Selokan",
        ringkas: "Hujan membawa botol ke selokan bersama sampah lain.",
        alt: "Ilustrasi: selokan berjeruji saat hujan, botol hanyut bersama daun dan gelas plastik; seseorang berpayung berdiri di trotoar.",
        beats: [
            { at: 0, text: "Hujan turun, dan botol yang tertinggal ikut terbawa ke selokan." },
            { at: 0.3, text: "Di sana ia bergabung dengan daun, ranting, dan sampah lain." },
            {
                at: 0.55,
                kind: "akibat",
                title: "Air meluap",
                // TODO sumber: rujukan primer (mis. BPBD, Kementerian PU, atau KLH) tentang sampah yang menyumbat saluran air.
                text: "Sampah yang menumpuk di jeruji menghalangi aliran air. Saat hujan deras, air lebih mudah meluap ke jalan.",
            },
        ],
    },
    {
        id: "sungai",
        label: "Bab 3",
        title: "Sungai",
        ringkas: "Arus tukad membawa botol; sebagian sampah tersangkut di jembatan.",
        alt: "Ilustrasi: sungai berkelok di antara sawah berundak, petani bercaping di jembatan, ranting dan sampah menumpuk di tiang jembatan.",
        beats: [
            { at: 0, text: "Di tukad, arus membawa botol melewati sawah dan jembatan." },
            {
                at: 0.3,
                text: "Sebagian sampah tersangkut di tiang jembatan. Sebagian lagi terus hanyut.",
            },
            {
                at: 0.55,
                kind: "akibat",
                title: "Tukad tercemar",
                // TODO sumber: rujukan primer tentang sampah tersangkut dan pencemaran sungai.
                text: "Sampah yang tersangkut terus menumpuk. Aliran terhambat dan air tukad menjadi keruh.",
            },
        ],
    },
    {
        id: "laut",
        label: "Bab 4",
        title: "Laut",
        ringkas: "Di muara dan laut, botol pecah menjadi serpihan yang makin kecil.",
        alt: "Ilustrasi: muara dengan hutan mangrove, nelayan di atas jukung, dasar laut berkarang; botol pecah menjadi serpihan.",
        beats: [
            { at: 0, text: "Di muara, air tawar bertemu air asin." },
            {
                at: 0.3,
                text: "Botol pecah pelan-pelan menjadi serpihan yang makin kecil, tetapi tidak benar-benar hilang.",
            },
            {
                at: 0.55,
                kind: "akibat",
                title: "Sampai ke hutan bakau",
                text: "Serpihan plastik dapat menjerat atau tertelan satwa laut. Di hutan bakau Ngurah Rai, nelayan memungut rata-rata hingga 3 ton sampah plastik per minggu.",
                fact: { source: "ANTARA Bali", year: "2023" },
            },
        ],
    },
    {
        id: "aksi",
        label: "Bab 5",
        title: "Apa yang bisa kita lakukan",
        ringkas: "Perjalanan bisa berbeda kalau dimulai dari tanganmu.",
        alt: "Ilustrasi: seseorang membawa botol ke tiga tong pilah; tunas tumbuh di dekat tumbler.",
        beats: [
            { at: 0, text: "Perjalanan ini bisa berbeda." },
            { at: 0.3, text: "Mulai dari satu botol di tanganmu: pilah, kurangi, pakai ulang." },
            {
                at: 0.55,
                kind: "akibat",
                title: "Botol punya jalan lain",
                text: "Botol yang dipilah bisa diolah ulang dan tidak ikut terbawa hujan ke sungai dan laut.",
            },
            {
                at: 0.78,
                kind: "fakta",
                title: "Memilah kini diwajibkan",
                text: "KLH/BPLH dan Pemprov Bali menyatakan warga wajib memilah sampah mulai 1 Juli 2026.",
                fact: { source: "KLH/BPLH, siaran pers 10 Juni", year: "2026" },
            },
        ],
    },
];

// Daftar datar semua kartu, berurutan. Dipakai untuk tombol Kembali/Lanjut.
export const beats = chapters.flatMap((c, chapter) =>
    c.beats.map((b) => ({ ...b, chapter, label: c.label, chapterTitle: c.title })),
);

// Posisi progres gulir (0 sampai 1) tempat kartu ke-`index` mulai tampil.
export const beatStart = (index) => (beats[index].chapter + beats[index].at) / chapters.length;

// Indeks kartu pertama di tiap bab.
export const chapterOffset = chapters.map((_, i) =>
    chapters.slice(0, i).reduce((n, c) => n + c.beats.length, 0),
);

export const actions = [
    {
        title: "Pilah",
        text: "Pisahkan sisa makanan dan daun dari sampah lain, lalu kumpulkan sampah anorganik yang bersih dan kering.",
        // Data KLH yang dikutip Kompas Denpasar (Maret 2026), dari draf artikel "Dari Rumah ke TPA".
        fact: {
            text: "Sekitar 60% sampah Bali berupa organik.",
            source: "KLH, dikutip Kompas Denpasar",
            year: "2026",
        },
    },
    { title: "Kurangi", text: "Tolak plastik sekali pakai yang tidak kamu perlukan hari ini." },
    { title: "Pakai ulang", text: "Bawa tumbler dan tas belanja sendiri ke warung dan pasar." },
];
