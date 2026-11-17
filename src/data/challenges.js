// Tiap tantangan = 7 hari. Hari dibuka berurutan (hari ke-N setelah hari ke-N-1 ditandai).

export const challenges = [
    {
        id: "tantangan-plastik",
        title: "7 Hari Bebas Plastik Sekali Pakai",
        category: "gaya-hidup",
        description:
            "Satu kebiasaan kecil setiap hari untuk mengurangi ketergantungan pada plastik sekali pakai.",
        days: [
            {
                day: 1,
                task: "Catat semua plastik sekali pakai yang kamu pakai hari ini: kantong, sedotan, botol, dan bungkus makanan.",
                tip: "Cukup tulis di catatan ponsel. Tujuannya menghitung, bukan menyalahkan diri.",
            },
            {
                day: 2,
                task: "Bawa tumbler dan jangan beli air minum kemasan sepanjang hari.",
                tip: "Siapkan tumbler di tas sejak malam sebelumnya. Isi ulang dari galon atau dispenser di rumah.",
            },
            {
                day: 3,
                task: "Tolak kantong plastik dan bawa tas sendiri untuk semua belanja hari ini.",
                tip: "Simpan satu tas lipat kecil di tas sekolah atau jok motor.",
            },
            {
                day: 4,
                task: "Tolak sedotan dan gelas plastik, dan bawa wadah makan sendiri saat membeli makanan.",
                tip: 'Sampaikan sebelum memesan: "Tanpa sedotan, pakai wadah saya, ya."',
            },
            {
                day: 5,
                task: "Belanja di pasar tradisional dengan keranjang atau tas anyaman, tanpa kantong kresek.",
                tip: "Bawa dua atau tiga wadah kecil untuk tahu, tempe, dan bumbu. Banyak pedagang mau memakainya bila diminta.",
            },
            {
                day: 6,
                task: "Ganti satu barang rumah tangga sekali pakai dengan yang bisa dipakai ulang, misalnya lap kain, sabun batang, atau botol isi ulang.",
                tip: "Pakai dulu barang yang sudah kamu punya. Beli baru hanya bila memang belum ada.",
            },
            {
                day: 7,
                task: "Hitung lagi plastik sekali pakai hari ini dan bandingkan dengan Hari 1. Ceritakan satu kebiasaan yang akan kamu pertahankan kepada seorang teman.",
                tip: "Pilih kebiasaan yang paling mudah dijalani, karena yang mudah lebih lama bertahan.",
            },
        ],
    },
    {
        id: "tantangan-memilah",
        title: "7 Hari Memilah Sampah",
        category: "sampah",
        description:
            "Langkah bertahap memilah sampah dari rumah dan mengolahnya dekat sumber.",
        days: [
            {
                day: 1,
                task: "Siapkan tiga wadah dan beri label: organik, daur ulang kering, dan residu.",
                tip: "Ember bekas atau kardus sudah cukup. Letakkan dekat dapur supaya mudah dijangkau.",
            },
            {
                day: 2,
                task: "Pisahkan sampah dapur: sisa sayur, kulit buah, dan ampas kopi masuk ke wadah organik.",
                tip: "Tiriskan airnya dulu supaya tidak bau dan tidak merembes.",
            },
            {
                day: 3,
                task: "Bilas dan keringkan botol, kaleng, dan kardus sebelum masuk ke wadah daur ulang.",
                tip: "Bilas dengan air bekas cuci piring, lalu remukkan botol agar hemat tempat.",
            },
            {
                day: 4,
                task: "Pisahkan sampah B3 rumah tangga, seperti baterai, lampu neon, dan kaleng aerosol, dalam wadah tertutup. Cari titik pengumpulan terdekat.",
                tip: "Tanyakan ke pengurus banjar, kantor desa, atau dinas lingkungan. Jangan campur dengan sampah organik.",
            },
            {
                day: 5,
                task: "Olah sampah organikmu: buat kompos sederhana dengan ember, tanah, dan daun kering, atau serahkan ke tetangga atau TPS3R yang menerimanya.",
                tip: "Tambahkan daun kering atau serbuk gergaji untuk mengurangi bau.",
            },
            {
                day: 6,
                task: "Serahkan sampah kering ke bank sampah, pengepul, atau pemulung terdekat.",
                tip: "Kumpulkan sampai satu kantong penuh supaya tidak bolak-balik. Cari tahu jadwal dan syarat setoran di lokasimu.",
            },
            {
                day: 7,
                task: "Bandingkan isi wadah residu dengan awal minggu, lalu ajak satu anggota keluarga ikut memilah.",
                tip: "Sasarannya wadah residu yang paling sedikit. Residu yang makin kecil menunjukkan pemilahanmu berjalan.",
            },
        ],
    },
    {
        id: "tantangan-energi",
        title: "7 Hari Hemat Energi",
        category: "energi",
        description:
            "Kurangi pemborosan listrik di rumah dengan langkah terukur dan mudah dibiasakan.",
        days: [
            {
                day: 1,
                task: "Keliling rumah dan catat perangkat yang menyala tanpa dipakai: lampu, charger, televisi dalam mode siaga.",
                tip: "Periksa juga kamar yang jarang dipakai.",
            },
            {
                day: 2,
                task: "Matikan lampu, kipas, dan AC saat meninggalkan ruangan, dan cabut charger setelah baterai penuh.",
                tip: "Tempel stiker pengingat di dekat saklar atau pintu.",
            },
            {
                day: 3,
                task: "Manfaatkan cahaya dan udara siang hari: buka tirai dan jendela sebelum menyalakan lampu atau AC.",
                tip: "Atur meja belajar dekat jendela supaya cahayanya cukup.",
            },
            {
                day: 4,
                task: "Kurangi pendinginan: setel AC di 24 sampai 26°C atau pakai kipas saja.",
                tip: "Bersihkan filter AC secara berkala, karena filter kotor membuat AC bekerja lebih keras.",
            },
            {
                day: 5,
                task: "Periksa lampu di rumah dan ganti satu lampu lama dengan LED. Kalau semuanya sudah LED, bantu periksa rumah teman atau tetangga.",
                tip: "Baca label watt dan lumen. Lumen menunjukkan terang, sedangkan watt menunjukkan pemakaian listrik.",
            },
            {
                day: 6,
                task: "Hari ini, jangan biarkan rice cooker dalam mode \"warm\" berjam-jam dan buka kulkas hanya seperlunya.",
                tip: "Keluarkan semua bahan yang dibutuhkan sekaligus, lalu tutup kulkas.",
            },
            {
                day: 7,
                task: "Bandingkan rata-rata pemakaian listrik harianmu dengan Hari 1, lalu ajak satu anggota keluarga memilih satu kebiasaan hemat listrik untuk dipertahankan.",
                tip: "Lihat angka kWh di meter, aplikasi PLN Mobile, atau catat sisa token pagi hari.",
            },
        ],
    },
    {
        id: "tantangan-mobilitas",
        title: "7 Hari Mobilitas Hijau",
        category: "iklim",
        description:
            "Jelajahi opsi perjalanan yang lebih rendah emisi dan lebih aktif.",
        days: [
            {
                day: 1,
                task: "Catat semua perjalananmu hari ini: tujuan, perkiraan jarak, dan kendaraan yang dipakai.",
                tip: "Tandai perjalanan yang jaraknya kurang dari 2 km, karena itulah kandidat termudah untuk diganti.",
            },
            {
                day: 2,
                task: "Ganti satu perjalanan pendek (kurang dari 2 km) dengan berjalan kaki atau bersepeda.",
                tip: "Pilih pagi atau sore agar tidak terlalu panas, bawa air, dan pilih jalur yang aman. Pakai helm bila bersepeda.",
            },
            {
                day: 3,
                task: "Berangkat bersama teman atau keluarga yang searah, supaya satu kendaraan melayani lebih dari satu orang.",
                tip: "Atur lewat grup kelas atau grup keluarga sehari sebelumnya.",
            },
            {
                day: 4,
                task: "Pakai angkutan umum untuk satu perjalanan, misalnya bus Trans Metro Dewata atau angkutan yang tersedia di rutemu.",
                tip: "Cek rute dan jadwal sebelum berangkat. Kalau belum ada rute yang cocok, pilih berangkat bersama.",
            },
            {
                day: 5,
                task: "Gabungkan beberapa urusan dalam satu rute, misalnya membeli bahan makanan, mengambil paket, dan fotokopi sekaligus.",
                tip: "Tulis daftar urusan sebelum keluar rumah, lalu urutkan berdasarkan lokasi.",
            },
            {
                day: 6,
                task: "Rawat kendaraanmu: periksa tekanan ban sesuai anjuran dan matikan mesin saat menunggu lebih dari satu menit.",
                tip: "Ban yang kurang angin membuat mesin bekerja lebih keras dan memboroskan bahan bakar.",
            },
            {
                day: 7,
                task: "Bandingkan catatan Hari 1 dengan hari ini, lalu pilih satu perubahan perjalanan yang akan kamu pertahankan.",
                tip: "Pilih yang paling mudah masuk ke rutinitasmu, misalnya berjalan kaki ke warung terdekat.",
            },
        ],
    },
];

export const getChallengeById = (id) => challenges.find((challenge) => challenge.id === id);
