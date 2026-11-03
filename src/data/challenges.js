// Tiap tantangan = 7 hari. Hari dibuka berurutan (hari ke-N setelah hari ke-N-1 ditandai).

export const challenges = [
    {
        id: "bebas-plastik",
        title: "7 Hari Bebas Plastik Sekali Pakai",
        category: "gaya-hidup",
        description: "Satu kebiasaan kecil setiap hari untuk mengurangi plastik sekali pakai.",
        days: [
            {
                day: 1,
                task: "Bawa tumbler atau botol minum sendiri.",
                tip: "Taruh di dekat kunci atau tas supaya tidak lupa.",
            },
            {
                day: 2,
                task: "Tolak sedotan plastik saat memesan minuman.",
                tip: 'Cukup bilang "tanpa sedotan" sebelum membayar.',
            },
            {
                day: 3,
                task: "Bawa tas belanja kain ke warung atau pasar.",
                tip: "Simpan satu tas lipat di dalam tas harianmu.",
            },
            {
                day: 4,
                task: "Bawa wadah makan sendiri untuk membungkus makanan.",
                tip: "Pilih wadah yang mudah dicuci dan tidak bocor.",
            },
            {
                day: 5,
                task: "Tolak kantong plastik tambahan di setiap pembelian.",
                tip: "Bawa belanjaan kecil di tangan atau tas yang sudah ada.",
            },
            {
                day: 6,
                task: "Pilih produk isi ulang atau curah dibandingkan kemasan baru.",
                tip: "Mulai dari sabun, deterjen, atau bumbu dapur.",
            },
            {
                day: 7,
                task: "Ajak satu teman atau keluarga mencoba tantangan ini.",
                tip: "Ceritakan kebiasaan mana yang paling mudah bagimu.",
            },
        ],
    },
];

export const getChallengeById = (id) => challenges.find((challenge) => challenge.id === id);
