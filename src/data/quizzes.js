// DRAF STRUKTUR. Satu kuis per kategori; id kuis = id kategori (dipakai di URL /kuis/:kategori).
// type: 'skenario' atau 'fakta'. correctIndex = nomor opsi yang benar (mulai dari 0).

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
                    "Cara paling efektif mengurangi sampah plastik adalah mencegahnya sejak awal. Menolak barang yang tidak perlu lebih baik daripada mengelolanya setelah menjadi sampah.",
            },
            {
                id: "sampah-2",
                type: "fakta",
                prompt: "Mitos atau fakta: sampah organik di TPA tidak bermasalah karena mudah terurai.",
                options: ["Fakta", "Mitos"],
                correctIndex: 1,
                explanation:
                    "[DRAF, verifikasi ke sumber] Sampah organik yang menumpuk tanpa oksigen terurai secara berbeda dan dapat menghasilkan gas serta air lindi, sehingga tetap menimbulkan masalah.",
            },
        ],
    },
];

export const getQuizByCategory = (categoryId) =>
    quizzes.find((quiz) => quiz.category === categoryId);
