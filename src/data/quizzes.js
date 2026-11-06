// DRAF. Satu kuis per kategori; id kuis = id kategori (dipakai di URL /kuis/:kategori).
// type: 'skenario' atau 'fakta'. correctIndex = nomor opsi yang benar (mulai dari 0).
// explanation: tulis pendek (1-2 kalimat), langsung ke intinya, dan menarik.
// source (opsional): untuk soal fakta/mitos, sumber dan tahunnya.

export const quizzes = [
    {
        category: "sampah",
        title: "Eco Quiz: Pengelolaan Sampah",
        questions: [
            {
                id: "sampah-1",
                type: "skenario",
                prompt: "Kamu membeli sebotol air di warung dan penjualnya mengambil kantong plastik baru. Apa langkah yang paling tepat?",
                options: [
                    "Menerima saja, kantong itu toh akan dibuang",
                    "Menolak kantong dan membawa botolnya langsung atau dengan tas sendiri",
                    "Meminta dua kantong supaya lebih kuat",
                    "Membuang kantongnya di jalan setelah keluar warung",
                ],
                correctIndex: 1,
                explanation:
                    "Sampah terbaik adalah yang tidak pernah dibuat. Menolak kantong yang tidak perlu lebih efektif daripada mengelolanya setelah jadi sampah.",
            },
            {
                id: "sampah-2",
                type: "fakta",
                prompt: "Mitos atau fakta: sampah organik di TPA tidak bermasalah karena mudah terurai.",
                options: ["Fakta", "Mitos"],
                correctIndex: 1,
                explanation:
                    "Mitos! Tertimbun tanpa udara, sampah organik terurai dengan cara berbeda dan bisa menghasilkan gas metana serta air lindi. Memilahnya dari rumah mencegah itu.",
            },
        ],
    },
    {
        category: "pesisir-laut",
        title: "Eco Quiz: Pesisir dan Laut",
        questions: [
            {
                id: "pesisir-1",
                type: "skenario",
                prompt: "Kamu berkunjung ke hutan mangrove dan melihat akar-akar menyembul dari lumpur. Temanmu ingin menarik akar itu demi foto yang keren. Apa tanggapanmu?",
                options: [
                    "Ikut saja, akarnya pasti kuat",
                    "Ajak dia berfoto dari jalur yang tersedia tanpa menyentuh akar",
                    "Patahkan sedikit ranting sebagai kenang-kenangan",
                    "Injak akarnya supaya fotonya terlihat alami",
                ],
                correctIndex: 1,
                explanation:
                    "Akar mangrove menopang pohon dan menahan lumpur. Menginjak atau menariknya bisa merusak, jadi nikmati dari jalur yang tersedia dan foto dari kejauhan.",
            },
            {
                id: "pesisir-2",
                type: "fakta",
                prompt: "Mitos atau fakta: Tahura Ngurah Rai adalah satu-satunya taman hutan raya di Bali.",
                options: ["Fakta", "Mitos"],
                correctIndex: 0,
                explanation:
                    "Fakta! Hanya ada satu tahura di Bali, dan itu hutan bakau di antara Denpasar dan Badung ini.",
                source: "Mongabay Indonesia, 2019",
            },
            {
                id: "pesisir-3",
                type: "skenario",
                prompt: "Sehabis hujan deras, kamu melihat banyak sampah plastik tersangkut di akar mangrove. Apa yang paling berdampak dalam jangka panjang?",
                options: [
                    "Memungut beberapa lalu pulang tanpa melakukan hal lain",
                    "Membakar sampahnya di tempat supaya cepat hilang",
                    "Mengurangi plastik dari rumah agar tidak terbawa sungai, sambil mendukung aksi bersih-bersih",
                    "Mengabaikannya, pasti sudah ada petugas",
                ],
                correctIndex: 2,
                explanation:
                    "Memungut itu baik, tapi sampah akan terus datang dari hulu. Yang paling berdampak adalah mengurangi plastik dari sumbernya, sambil mendukung aksi bersih-bersih.",
            },
            {
                id: "pesisir-4",
                type: "fakta",
                prompt: "Mitos atau fakta: hutan mangrove hanya penting untuk habitat ikan, bukan untuk melindungi daratan.",
                options: ["Fakta", "Mitos"],
                correctIndex: 1,
                explanation:
                    "Mitos! Akar mangrove juga memecah gelombang dan menahan lumpur. Satu kajian menemukan hutan selebar 100 meter bisa mengurangi tinggi gelombang 13 sampai 66 persen.",
                source: "McIvor dkk., 2012",
            },
            {
                id: "pesisir-5",
                type: "skenario",
                prompt: "Kamu ingin ikut membantu menanam mangrove. Cara mana yang paling tepat?",
                options: [
                    "Ikut kegiatan penanaman resmi yang dibimbing pengelola atau komunitas",
                    "Menanam sendiri di pantai mana saja yang kamu suka",
                    "Mencabut mangrove tua supaya diganti bibit baru",
                    "Menaruh bibit di pasir lalu meninggalkannya",
                ],
                correctIndex: 0,
                explanation:
                    "Mangrove tidak bisa tumbuh di sembarang tempat, dan bibit perlu dirawat. Kegiatan resmi memastikan lokasinya cocok dan bibitnya dipantau.",
            },
            {
                id: "pesisir-6",
                type: "fakta",
                prompt: "Mitos atau fakta: sampah plastik yang tersangkut di akar tidak berpengaruh pada pertumbuhan mangrove.",
                options: ["Fakta", "Mitos"],
                correctIndex: 1,
                explanation:
                    "Mitos! Plastik yang tersangkut bisa mengganggu pertumbuhan mangrove, bukan cuma merusak pemandangan.",
                source: "Kompas.com, 2025",
            },
            {
                id: "pesisir-7",
                type: "skenario",
                prompt: 'Dalam tur perahu menyusuri mangrove, temanmu mau membuang tutup botol ke air karena "cuma kecil". Apa yang kamu lakukan?',
                options: [
                    "Biarkan saja, tutup botol sekecil itu tidak berbahaya",
                    "Lempar ke akar supaya tidak terlihat",
                    "Simpan dan bawa pulang untuk dibuang di tempat sampah",
                    "Benamkan di lumpur",
                ],
                correctIndex: 2,
                explanation:
                    "Sampah sekecil apa pun bisa tersangkut di akar atau termakan satwa. Membawanya pulang adalah cara termudah menjaga hutan tetap bersih.",
            },
            {
                id: "pesisir-8",
                type: "skenario",
                prompt: "Kamu mau ikut aksi bersih-bersih mangrove akhir pekan ini. Persiapan mana yang paling tepat?",
                options: [
                    "Pakai sandal jepit terbaikmu tanpa perlengkapan apa pun",
                    "Bawa bekal dalam banyak kemasan plastik",
                    "Datang saja tanpa memberi kabar ke panitia",
                    "Pakai alas kaki tertutup yang boleh kotor, bawa air minum sendiri, dan ikuti arahan panitia",
                ],
                correctIndex: 3,
                explanation:
                    "Lumpur mangrove licin dan bisa menyembunyikan benda tajam. Alas kaki tertutup, bekal tanpa sampah, dan arahan panitia membuatmu aman sekaligus membantu.",
            },
        ],
    },
];

export const getQuizByCategory = (categoryId) =>
    quizzes.find((quiz) => quiz.category === categoryId);
