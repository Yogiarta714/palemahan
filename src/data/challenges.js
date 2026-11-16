// Tiap tantangan = 7 hari. Hari dibuka berurutan (hari ke-N setelah hari ke-N-1 ditandai).
// task: satu tugas kecil yang jelas. tip: satu saran singkat agar tugas terasa mudah.

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
    {
        id: "memilah-sampah",
        title: "7 Hari Memilah Sampah",
        category: "sampah",
        description:
            "Mulai dari dapur dan kamar sendiri: pisahkan sampah supaya lebih mudah dikelola.",
        days: [
            {
                day: 1,
                task: "Siapkan dua wadah di rumah: satu untuk sampah organik, satu untuk anorganik.",
                tip: "Ember bekas atau kardus yang dilapisi sudah cukup.",
            },
            {
                day: 2,
                task: "Pisahkan sisa makanan dari kemasannya setiap kali membuang sampah.",
                tip: "Lakukan di tempat sampah dapur, saat itu juga.",
            },
            {
                day: 3,
                task: "Bilas kemasan plastik atau kaleng sebelum dibuang.",
                tip: "Cukup bilas singkat. Kemasan yang bersih lebih mudah ditangani.",
            },
            {
                day: 4,
                task: "Cari tahu tempat pengumpulan sampah terpilah di dekatmu, seperti bank sampah atau TPS3R.",
                tip: "Tanyakan ke pengurus lingkungan atau lihat di peta daring.",
            },
            {
                day: 5,
                task: "Kumpulkan sisa sayur dan buah di wadah terpisah.",
                tip: "Bisa dikubur di pot tanaman atau dititipkan ke tetangga yang membuat kompos.",
            },
            {
                day: 6,
                task: "Simpan sampah kecil berbahaya, seperti baterai bekas, terpisah dari sampah dapur.",
                tip: "Taruh dalam kaleng atau toples tertutup sampai ada tempat penyetorannya.",
            },
            {
                day: 7,
                task: "Ajak satu orang serumah memilah bersamamu.",
                tip: "Tunjukkan dua wadahmu dan jelaskan alasannya dalam satu menit.",
            },
        ],
    },
    {
        id: "hemat-energi",
        title: "7 Hari Hemat Energi",
        category: "energi",
        description: "Kebiasaan kecil di rumah untuk memakai listrik seperlunya.",
        days: [
            {
                day: 1,
                task: "Cabut pengisi daya yang tidak sedang dipakai.",
                tip: "Gunakan stop kontak dengan saklar agar mudah dimatikan.",
            },
            {
                day: 2,
                task: "Matikan lampu dan kipas setiap kali keluar dari ruangan.",
                tip: "Jadikan itu kebiasaan terakhir sebelum menutup pintu.",
            },
            {
                day: 3,
                task: "Manfaatkan cahaya alami siang hari, buka tirai sebelum menyalakan lampu.",
                tip: "Pindahkan meja belajar atau kerjamu dekat jendela.",
            },
            {
                day: 4,
                task: "Gunakan AC dan kipas seperlunya, dan tutup pintu atau jendela saat AC menyala.",
                tip: "Atur agar tidak terlalu dingin.",
            },
            {
                day: 5,
                task: "Matikan perangkat elektronik yang dibiarkan menyala tanpa dipakai, seperti TV atau monitor.",
                tip: "Matikan lewat stop kontak, bukan hanya dengan remote.",
            },
            {
                day: 6,
                task: "Kumpulkan pekerjaan listrik dalam satu waktu, misalnya menyetrika sekaligus.",
                tip: "Siapkan semua pakaian dulu, baru nyalakan setrikanya.",
            },
            {
                day: 7,
                task: "Ajak satu orang serumah memilih satu kebiasaan hemat energi untuk dilanjutkan.",
                tip: "Pilih yang paling mudah, bukan yang paling banyak.",
            },
        ],
    },
    {
        id: "mobilitas-hijau",
        title: "7 Hari Mobilitas Hijau",
        category: "iklim",
        description: "Atur cara bepergianmu agar lebih ringan bagi lingkungan.",
        days: [
            {
                day: 1,
                task: "Catat semua perjalananmu hari ini: ke mana dan naik apa.",
                tip: "Cukup catatan singkat di ponsel.",
            },
            {
                day: 2,
                task: "Jalan kaki untuk satu perjalanan yang dekat.",
                tip: "Pilih tujuan yang biasanya kamu tempuh dengan kendaraan, padahal dekat.",
            },
            {
                day: 3,
                task: "Gabungkan beberapa keperluan dalam satu kali perjalanan.",
                tip: "Tulis daftar tujuan, lalu urutkan dari yang paling dekat.",
            },
            {
                day: 4,
                task: "Berangkat bersama teman, satu kendaraan untuk dua orang atau lebih.",
                tip: "Ajak teman yang tujuannya searah.",
            },
            {
                day: 5,
                task: "Gunakan sepeda atau jalan kaki untuk satu keperluan lagi.",
                tip: "Siapkan botol minum agar nyaman di jalan.",
            },
            {
                day: 6,
                task: "Matikan mesin kendaraan saat berhenti agak lama.",
                tip: "Misalnya saat menunggu seseorang atau parkir sebentar.",
            },
            {
                day: 7,
                task: "Ajak satu teman mencoba cara bepergian yang lebih ringan.",
                tip: "Ceritakan perjalanan mana yang paling mudah kamu ubah.",
            },
        ],
    },
];

export const getChallengeById = (id) => challenges.find((challenge) => challenge.id === id);
