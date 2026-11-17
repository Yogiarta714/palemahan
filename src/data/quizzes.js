// Satu kuis per kategori; id kuis = id kategori (dipakai di URL /kuis/:kategori).
// type: 'skenario' atau 'fakta'. correctIndex = nomor opsi yang benar (mulai dari 0).

export const quizzes = [
    {
        category: "sampah",
        title: "Eco Quiz: Pengelolaan Sampah",
        questions: [
            {
                id: "waste-01",
                type: "skenario",
                prompt: "Setelah upacara di rumah, bekas canang sari menumpuk bersama plastik pembungkus dan staples. Apa langkah yang paling tepat untuk sampahnya?",
                options: [
                    "Bakar semuanya di halaman supaya cepat habis",
                    "Pisahkan plastik dan staples, lalu olah bahan alaminya (janur, bunga) menjadi kompos",
                    "Masukkan semuanya ke satu kantong dan buang bersama sampah dapur",
                    "Tumpuk di pekarangan sampai membusuk sendiri",
                ],
                correctIndex: 1,
                explanation:
                    "Janur dan bunga adalah bahan organik yang bisa dikomposkan. Plastik dan staples tidak terurai dan mencemari kompos kalau tercampur. Membakar plastik melepas asap yang berbahaya bagi pernapasan.",
            },
            {
                id: "waste-02",
                type: "skenario",
                prompt: "Rina punya dua baterai bekas dan sebuah lampu neon yang pecah. Ke mana barang itu sebaiknya pergi?",
                options: [
                    "Ke selokan supaya terbawa air",
                    "Ke wadah sampah organik",
                    "Ke wadah khusus sampah berbahaya (B3), lalu diserahkan ke titik pengumpulan yang menerimanya",
                    "Ke kantong residu bersama popok dan tisu",
                ],
                correctIndex: 2,
                explanation:
                    "Baterai dan lampu neon termasuk B3 (bahan berbahaya dan beracun). Baterai mengandung logam berat dan lampu neon mengandung merkuri, jadi keduanya tidak boleh bercampur dengan sampah biasa. Simpan dalam wadah tertutup dan tanyakan titik pengumpulannya ke dinas lingkungan atau pengurus desa.",
            },
            {
                id: "waste-03",
                type: "fakta",
                prompt: 'Seseorang berkata, "Sisa makanan di TPA aman karena akan membusuk sendiri." Mana yang benar?',
                options: [
                    "Salah. Di timbunan yang padat dan minim oksigen, sisa makanan menghasilkan gas metana dan cairan lindi",
                    "Benar. Sisa makanan berubah menjadi tanah subur di TPA",
                    "Benar, asalkan dibungkus plastik hitam",
                    "Salah. Sisa makanan tidak bisa membusuk sama sekali di TPA",
                ],
                correctIndex: 0,
                explanation:
                    "Pembusukan tanpa oksigen menghasilkan metana, gas rumah kaca yang menahan panas jauh lebih kuat daripada karbon dioksida. Lindi, cairan yang keluar dari timbunan, bisa mencemari tanah dan air. Karena itu sisa makanan lebih baik dikompos.",
            },
            {
                id: "waste-04",
                type: "skenario",
                prompt: "Warung Pak Wayan membuang botol plastik, kardus, dan sisa makanan ke satu tempat. Pemulung menolak mengambil botolnya karena basah dan kotor. Perubahan apa yang paling efektif?",
                options: [
                    "Menambah kantong plastik supaya sampah tidak bocor",
                    "Membakar botol dan kardus di belakang warung",
                    "Meminta pembeli membawa pulang sampahnya",
                    "Menyediakan wadah terpisah untuk organik, daur ulang kering, dan residu, lalu membilas botol sebelum dibuang",
                ],
                correctIndex: 3,
                explanation:
                    "Sampah kering yang bercampur sisa makanan menjadi basah dan kotor, sehingga nilai jualnya turun dan sulit didaur ulang. Memilah dari sumber menjaga bahan daur ulang tetap bersih.",
            },
            {
                id: "waste-05",
                type: "skenario",
                prompt: "Kamu selesai makan pizza. Dasar kotaknya berminyak, sedangkan tutupnya masih bersih. Apa yang sebaiknya kamu lakukan?",
                options: [
                    "Seluruh kotak masuk ke wadah daur ulang kertas",
                    "Seluruh kotak masuk ke wadah organik",
                    "Sobek bagian yang bersih untuk daur ulang kertas, dan buang bagian berminyak sebagai residu",
                    "Rendam kotak di air sampai minyaknya hilang",
                ],
                correctIndex: 2,
                explanation:
                    "Minyak dan sisa makanan mengganggu proses daur ulang kertas. Bagian yang masih bersih tetap bernilai, sedangkan bagian berminyak dipisah supaya tidak merusak satu batch kertas.",
            },
            {
                id: "waste-06",
                type: "skenario",
                prompt: "Sebuah kafe di Canggu ingin mengurangi sampah gelas plastik. Langkah mana yang berada di urutan teratas dalam hierarki pengelolaan sampah?",
                options: [
                    "Memberi potongan harga bagi pelanggan yang membawa tumbler sendiri",
                    "Mengumpulkan gelas bekas lalu mengirimnya ke bank sampah",
                    "Mengganti gelas dengan plastik berlabel biodegradable",
                    "Mengumpulkan gelas bekas dan membuangnya ke TPA setiap hari",
                ],
                correctIndex: 0,
                explanation:
                    "Hierarki dimulai dari mencegah sampah muncul (menolak dan mengurangi), baru kemudian memakai ulang dan mendaur ulang. Gelas yang tidak pernah dibuat tidak perlu dikumpulkan, diangkut, atau diolah.",
            },
            {
                id: "waste-07",
                type: "fakta",
                prompt: 'Pernyataan: "Plastik berlabel biodegradable pasti hancur sendiri di tanah atau di laut." Mana yang benar?',
                options: [
                    "Benar, label itu menjamin plastik hancur dalam beberapa bulan di mana saja",
                    "Benar, tetapi hanya jika terkena sinar matahari",
                    "Benar, tetapi hanya di laut yang hangat",
                    "Salah. Banyak plastik semacam itu baru terurai pada suhu dan kondisi fasilitas pengomposan industri, dan di alam bisa bertahan lama",
                ],
                correctIndex: 3,
                explanation:
                    "Label biodegradable tidak menjamin plastik hancur di lingkungan terbuka. Banyak jenisnya butuh panas dan kelembapan terkendali yang hanya ada di fasilitas khusus. Di tanah atau laut, plastik itu bisa tetap utuh lama dan terpecah menjadi serpihan kecil.",
            },
            {
                id: "waste-08",
                type: "skenario",
                prompt: "Sebuah banjar ingin mengurangi sampah yang dikirim ke TPA. Apa langkah awal yang paling mendasar?",
                options: [
                    "Membeli lebih banyak truk pengangkut",
                    "Menunggu program dari pemerintah",
                    "Memperluas lahan penimbunan",
                    "Mengajak warga memilah di rumah dan mengolah sampah organik di tingkat banjar, misalnya lewat kompos atau TPS3R (tempat pengolahan sampah reduce, reuse, recycle)",
                ],
                correctIndex: 3,
                explanation:
                    "Pemilahan di rumah mencegah sampah organik dan sampah daur ulang bercampur. Dengan begitu lebih banyak sampah bisa diolah dekat sumbernya, dan lebih sedikit yang harus diangkut ke TPA.",
            },
        ],
    },
    {
        category: "iklim",
        title: "Eco Quiz: Perubahan Iklim",
        questions: [
            {
                id: "climate-01",
                type: "fakta",
                prompt: "Apa penyebab utama pemanasan global sejak era pra-industri?",
                options: [
                    "Aktivitas gunung berapi",
                    "Perubahan jarak Bumi ke Matahari",
                    "Pembakaran bahan bakar fosil oleh manusia yang melepas karbon dioksida",
                    "Lubang pada lapisan ozon",
                ],
                correctIndex: 2,
                explanation:
                    "IPCC menyimpulkan bahwa aktivitas manusia, terutama pembakaran batu bara, minyak, dan gas, menyebabkan pemanasan sejak era pra-industri. Karbon dioksida menahan panas di atmosfer. Lubang ozon adalah masalah lain: ia membuat lebih banyak sinar ultraviolet sampai ke permukaan Bumi.",
            },
            {
                id: "climate-02",
                type: "skenario",
                prompt: "Di Jatiluwih, hujan datang lebih lambat dari biasanya dan jadwal tanam subak jadi tidak pas. Apa langkah adaptasi yang paling masuk akal?",
                options: [
                    "Tetap memakai jadwal lama",
                    "Membahas di subak untuk menggeser jadwal tanam, mengatur ulang pembagian air, dan mencoba varietas yang lebih tahan kekeringan",
                    "Mengambil air sebanyak mungkin dari saluran hulu",
                    "Berhenti bertanam padi",
                ],
                correctIndex: 1,
                explanation:
                    "Adaptasi berarti menyesuaikan cara bertani dengan dampak perubahan iklim. Subak sudah punya sistem musyawarah dan pembagian air bersama, sehingga penyesuaian jadwal bisa dibahas lewat sistem itu.",
            },
            {
                id: "climate-03",
                type: "fakta",
                prompt: 'Seseorang berkata, "Hari ini dingin dan hujan deras, jadi pemanasan global tidak benar." Tanggapan mana yang tepat?',
                options: [
                    "Benar, sebab Bumi seharusnya selalu panas",
                    "Benar, hujan menandakan Bumi sedang mendingin",
                    "Salah, tetapi hanya berlaku di daerah kutub",
                    "Salah. Cuaca harian berbeda dari iklim, yang dihitung dari rata-rata puluhan tahun",
                ],
                correctIndex: 3,
                explanation:
                    "Cuaca adalah kondisi dalam hitungan jam atau hari. Iklim adalah pola rata-rata selama puluhan tahun. Satu hari yang dingin tidak membatalkan tren kenaikan suhu rata-rata global.",
            },
            {
                id: "climate-04",
                type: "skenario",
                prompt: "Pantai di depan homestay Bu Ayu terus terkikis. Langkah mana yang paling tahan lama?",
                options: [
                    "Menanam vegetasi pesisir yang cocok untuk jenis pantainya (misalnya pandan pantai, atau mangrove di area berlumpur) dan memundurkan bangunan baru dari garis pantai",
                    "Membangun tembok beton setinggi mungkin dan berhenti di situ",
                    "Menumpuk pasir baru setiap tahun tanpa langkah lain",
                    "Memindahkan semua tamu ke lantai atas",
                ],
                correctIndex: 0,
                explanation:
                    "Vegetasi pesisir meredam gelombang dan menahan sedimen, sedangkan jarak aman dari garis pantai mengurangi kerusakan bangunan. Tembok keras bisa memindahkan erosi ke pantai di sekitarnya dan mahal dirawat.",
            },
            {
                id: "climate-05",
                type: "skenario",
                prompt: "Sebuah sekolah memasang panel surya di atap, lalu membuat saluran drainase tambahan karena banjir makin sering. Mana pernyataan yang tepat?",
                options: [
                    "Keduanya mitigasi",
                    "Panel surya adalah mitigasi, drainase adalah adaptasi",
                    "Keduanya adaptasi",
                    "Panel surya adalah adaptasi, drainase adalah mitigasi",
                ],
                correctIndex: 1,
                explanation:
                    "Mitigasi mengurangi penyebab perubahan iklim, misalnya emisi. Adaptasi mengurangi kerugian akibat dampaknya, misalnya banjir. Panel surya mengurangi emisi, sedangkan drainase mengurangi kerusakan akibat banjir.",
            },
            {
                id: "climate-06",
                type: "skenario",
                prompt: "Rina ingin mengurangi jejak karbon dari rumahnya. Sebagian besar listrik di Indonesia masih berasal dari pembangkit berbahan bakar fosil. Langkah mana yang langsung mengurangi emisi?",
                options: [
                    "Memakai listrik lebih sedikit: mematikan alat yang tidak dipakai dan memilih peralatan hemat energi",
                    "Menaruh tanaman hias di setiap kamar",
                    "Membeli lampu dekoratif tambahan",
                    "Menyalakan AC di suhu terendah sepanjang hari",
                ],
                correctIndex: 0,
                explanation:
                    "Makin sedikit listrik yang dipakai, makin sedikit bahan bakar yang dibakar di pembangkit. Tanaman hias di dalam rumah menyerap karbon dalam jumlah yang terlalu kecil untuk mengimbangi pemakaian listrik.",
            },
            {
                id: "climate-07",
                type: "skenario",
                prompt: "Seorang siswa di kelas Pak Wayan bertanya mengapa pulau kecil seperti Bali disebut rentan terhadap kenaikan muka laut. Jawaban yang paling tepat?",
                options: [
                    "Karena air laut hanya naik di pulau kecil",
                    "Karena pulau kecil tidak mendapat hujan",
                    "Karena banyak permukiman, jalan, dan kegiatan ekonominya berada di dataran rendah dekat pantai, dan ruang untuk mundur terbatas",
                    "Karena pulau kecil selalu berada di atas gunung berapi",
                ],
                correctIndex: 2,
                explanation:
                    "Muka laut naik di seluruh dunia. Pulau kecil rentan karena permukiman, lahan, dan sumber air tawarnya dekat pantai, dan daratan yang bisa dipakai untuk mundur sempit. Banjir pasang dan intrusi air asin langsung terasa.",
            },
            {
                id: "climate-08",
                type: "skenario",
                prompt: "Temanmu bilang menanam satu pohon cukup untuk menebus emisi liburan naik pesawatnya. Tanggapan yang paling tepat?",
                options: [
                    "Setuju, satu pohon langsung menyerap semua emisi itu",
                    "Setuju, selama pohonnya pohon buah",
                    "Tidak setuju, karena pohon sama sekali tidak menyerap karbon dioksida",
                    "Menanam pohon membantu, tetapi pohon baru menyerap karbon secara bertahap selama puluhan tahun dan bisa mati, jadi pengurangan emisi tetap harus berjalan",
                ],
                correctIndex: 3,
                explanation:
                    "Pohon menyerap karbon dioksida sambil tumbuh, dan penyerapan itu berlangsung lama. Pohon yang mati, terbakar, atau ditebang melepaskan karbonnya lagi. Menanam pohon melengkapi pengurangan emisi dan tidak menggantikannya.",
            },
        ],
    },
    {
        category: "biodiversitas",
        title: "Eco Quiz: Keanekaragaman Hayati",
        questions: [
            {
                id: "biodiv-01",
                type: "skenario",
                prompt: "Dalam perjalanan kapal dari Padangbai ke Lombok, seorang pemandu bercerita bahwa satwa di Bali dan Lombok berbeda walau jaraknya dekat. Apa penjelasannya?",
                options: [
                    "Lombok terlalu kering untuk satwa Bali",
                    "Hutan Lombok jauh lebih lebat daripada hutan Bali",
                    "Satwa Bali berenang ke Lombok lalu berubah bentuk",
                    "Selat Lombok yang dalam menjadi batas biogeografis (Garis Wallace) yang menghalangi satwa Asia dan Australasia bercampur",
                ],
                correctIndex: 3,
                explanation:
                    "Garis Wallace melewati Selat Lombok. Selat ini tetap berupa laut dalam bahkan saat permukaan laut turun pada zaman es, sehingga satwa darat sulit menyeberang. Satwa Bali lebih mirip fauna Asia, sedangkan Lombok sudah menunjukkan pengaruh fauna Australasia.",
            },
            {
                id: "biodiv-02",
                type: "skenario",
                prompt: "Di sebuah pasar burung, penjual menawarkan burung putih dengan kulit biru di sekitar mata yang katanya Jalak Bali asli, dengan harga murah. Apa yang sebaiknya kamu lakukan?",
                options: [
                    "Membelinya supaya burung itu bisa dirawat",
                    "Tidak membeli, dan melaporkan penjualnya ke BKSDA atau petugas berwenang",
                    "Membeli sepasang untuk dikembangbiakkan di rumah",
                    "Memotretnya untuk media sosial lalu pergi",
                ],
                correctIndex: 1,
                explanation:
                    "Jalak Bali endemik Bali, artinya hidup alami hanya di sana. Burung ini dilindungi dan berstatus Critically Endangered di IUCN Red List. Pembelian mendorong perburuan dan perdagangan, sedangkan laporan ke BKSDA atau petugas memungkinkan penindakan.",
            },
            {
                id: "biodiv-03",
                type: "skenario",
                prompt: "Di kawasan wisata hutan, pengunjung memberi pisang dan kacang pada monyet ekor panjang supaya mau berfoto. Apa sikap terbaikmu?",
                options: [
                    "Tidak memberi makan, menjaga jarak, dan menyimpan barang yang mudah direbut",
                    "Ikut memberi makan agar monyet jinak",
                    "Mengejar monyet supaya menjauh",
                    "Menunjukkan makanan tanpa memberikannya",
                ],
                correctIndex: 0,
                explanation:
                    "Pemberian makanan mengubah perilaku alami monyet. Mereka jadi bergantung pada manusia dan lebih agresif terhadap pengunjung. Makanan manusia juga tidak cocok untuk pencernaan mereka.",
            },
            {
                id: "biodiv-04",
                type: "fakta",
                prompt: 'Pernyataan: "Menanam satu jenis pohon di lahan luas sama baiknya bagi satwa dengan hutan alami." Mana yang benar?',
                options: [
                    "Benar, selama jumlah pohonnya sama",
                    "Benar, selama pohonnya cepat besar",
                    "Salah. Hutan alami punya banyak jenis tumbuhan, lapisan tajuk, dan sumber makanan yang mendukung lebih banyak jenis satwa",
                    "Salah, karena satwa hanya hidup di pohon yang sangat besar",
                ],
                correctIndex: 2,
                explanation:
                    "Perkebunan satu jenis pohon menyediakan sedikit variasi makanan, tempat bersarang, dan tempat berlindung. Hutan alami yang beragam menyokong lebih banyak jenis serangga, burung, dan mamalia.",
            },
            {
                id: "biodiv-05",
                type: "skenario",
                prompt: "Seorang pengembang ingin membuka petak hutan kecil yang menghubungkan dua kawasan hutan untuk dibangun vila. Apa risikonya bagi satwa?",
                options: [
                    "Tidak ada, karena petak yang dibuka sempit",
                    "Satwa otomatis pindah ke tempat yang lebih baik",
                    "Fragmentasi habitat: jalur pergerakan terputus, populasi terpisah, dan lebih mudah punah setempat",
                    "Hanya pepohonannya yang terdampak",
                ],
                correctIndex: 2,
                explanation:
                    "Petak kecil yang menghubungkan dua hutan berfungsi sebagai koridor satwa. Bila terputus, populasi di tiap sisi menjadi lebih kecil dan terisolasi, kawin silang antarkelompok berkurang, dan satwa lebih rentan hilang dari kawasan itu.",
            },
            {
                id: "biodiv-06",
                type: "skenario",
                prompt: "Tikus merusak padi di sawah, dan sebagian petani ingin menyemprot racun lebih banyak. Alternatif mana yang lebih ramah keanekaragaman hayati?",
                options: [
                    "Memasang rumah burung hantu dan menjaga pematang agar pemangsa alami tikus mau datang",
                    "Membakar jerami agar tikus pindah",
                    "Menyemprot racun setiap hari dalam jumlah kecil",
                    "Menutup semua saluran air di sawah",
                ],
                correctIndex: 0,
                explanation:
                    "Burung hantu dan ular sawah adalah pemangsa tikus. Pengendalian hayati mengurangi racun yang masuk ke air, tanah, dan rantai makanan, termasuk ke ikan dan belut di sawah.",
            },
            {
                id: "biodiv-07",
                type: "fakta",
                prompt: "Satwa mana yang telah dinyatakan punah dari Bali?",
                options: [
                    "Jalak Bali",
                    "Harimau Bali",
                    "Penyu hijau",
                    "Monyet ekor panjang",
                ],
                correctIndex: 1,
                explanation:
                    "Harimau Bali (Panthera tigris balica) dinyatakan punah, dan individu terakhirnya diperkirakan mati pada 1937. Jalak Bali masih ada di alam tetapi berstatus kritis, dan penyu hijau berstatus terancam punah. Monyet ekor panjang masih umum.",
            },
            {
                id: "biodiv-08",
                type: "skenario",
                prompt: "Sebuah hotel ingin tamannya menarik burung dan serangga penyerbuk. Rancangan mana yang paling mendukung?",
                options: [
                    "Rumput sintetis agar selalu rapi",
                    "Satu jenis tanaman hias impor dalam jumlah besar",
                    "Lantai beton dengan pot plastik",
                    "Campuran tanaman lokal yang berbunga dan berbuah, dengan sedikit atau tanpa pestisida",
                ],
                correctIndex: 3,
                explanation:
                    "Burung dan serangga butuh nektar, serbuk sari, dan buah dari tanaman yang sudah dikenal ekosistem setempat. Pestisida membunuh serangga penyerbuk dan mengurangi pakan burung.",
            },
        ],
    },
    {
        category: "pesisir-laut",
        title: "Eco Quiz: Ekosistem Pesisir & Laut",
        questions: [
            {
                id: "marine-01",
                type: "skenario",
                prompt: "Bayangkan ada usulan mengurug sebagian hutan mangrove di pesisir selatan Bali untuk lahan parkir. Fungsi apa yang akan berkurang?",
                options: [
                    "Peredam gelombang, tempat ikan dan udang membesar, dan penyimpan karbon",
                    "Hanya pemandangan",
                    "Hanya sumber kayu bakar",
                    "Tidak ada, karena mangrove tumbuh kembali dalam seminggu",
                ],
                correctIndex: 0,
                explanation:
                    "Akar mangrove menahan lumpur dan meredam gelombang. Hutan ini juga menjadi tempat pembesaran banyak ikan, udang, dan kepiting, serta menyimpan karbon di tanahnya.",
            },
            {
                id: "marine-02",
                type: "skenario",
                prompt: "Saat snorkeling di Nusa Penida, temanmu ingin berdiri di atas karang dangkal untuk berfoto. Apa yang kamu sarankan?",
                options: [
                    "Silakan, karang itu seperti batu",
                    "Boleh asal hanya sebentar",
                    "Tetap mengapung, jaga jarak dari karang, dan ambil foto dari permukaan",
                    "Berdiri di karang yang tampak mati saja",
                ],
                correctIndex: 2,
                explanation:
                    "Karang adalah hewan hidup. Sentuhan dan injakan melukai jaringannya, dan karang tumbuh sangat lambat sehingga kerusakan butuh waktu lama untuk pulih. Karang yang tampak mati pun menjadi rumah bagi biota kecil dan tempat menempel karang muda.",
            },
            {
                id: "marine-03",
                type: "fakta",
                prompt: "Apa penyebab utama pemutihan karang massal?",
                options: [
                    "Terlalu banyak ikan herbivora",
                    "Kenaikan suhu laut yang membuat karang melepas alga simbionnya",
                    "Gelombang yang terlalu tenang",
                    "Cahaya bulan yang terlalu terang",
                ],
                correctIndex: 1,
                explanation:
                    "Karang hidup bersama alga kecil yang memberinya warna dan sebagian besar makanannya. Saat laut terlalu hangat, karang melepas alga itu dan tampak memutih. Bila panas berlangsung lama, karang bisa mati.",
            },
            {
                id: "marine-04",
                type: "skenario",
                prompt: "Malam hari di pantai tempat penyu bertelur, kamu melihat tukik berjalan ke arah lampu jalan, bukan ke laut. Apa yang sebaiknya kamu lakukan?",
                options: [
                    "Membawa pulang tukik, memandikannya, lalu memberinya makan",
                    "Memotretnya dari dekat dengan lampu kilat",
                    "Menuangkan air tawar ke tukik supaya segar",
                    "Mematikan senter dan blitz di sekitarnya, menjaga jarak, dan menghubungi kelompok konservasi penyu setempat",
                ],
                correctIndex: 3,
                explanation:
                    "Tukik mencari laut dengan mengikuti cahaya paling terang di cakrawala. Lampu dan blitz membuatnya salah arah. Penanganan sebaiknya diserahkan kepada petugas atau komunitas konservasi karena tukik mudah stres dan terluka.",
            },
            {
                id: "marine-05",
                type: "skenario",
                prompt: "Setiap musim hujan, sampah menumpuk di Pantai Kuta padahal petugas membersihkannya tiap pagi. Penjelasan yang paling masuk akal?",
                options: [
                    "Semua sampah itu berasal dari wisatawan yang menginap di sekitar pantai",
                    "Arus dan angin musim hujan membawa sampah dari sungai dan perairan sekitar ke pantai, sehingga pengurangan sampah di hulu juga perlu",
                    "Ikan besar membawa sampah ke pantai",
                    "Pasir pantai menghasilkan sampah sendiri",
                ],
                correctIndex: 1,
                explanation:
                    "Sampah dari daratan masuk ke sungai dan laut, lalu arus dan angin musiman mendorongnya ke pantai tertentu. Membersihkan pantai tetap perlu, tetapi sampahnya akan datang lagi bila sumber di hulu tidak dikurangi.",
            },
            {
                id: "marine-06",
                type: "fakta",
                prompt: 'Pernyataan: "Kalau permukaan laut tampak bersih, berarti laut itu bebas plastik." Mana yang benar?',
                options: [
                    "Salah. Plastik pecah menjadi mikroplastik yang melayang di air, mengendap di dasar, dan masuk ke tubuh biota laut",
                    "Benar, karena plastik selalu terlihat dari atas",
                    "Benar, plastik selalu mengapung",
                    "Salah, karena plastik larut dalam air laut",
                ],
                correctIndex: 0,
                explanation:
                    "Plastik yang terkena gelombang dan sinar matahari terpecah menjadi serpihan kecil, termasuk mikroplastik di bawah 5 mm. Serpihan itu sulit terlihat, bisa tenggelam, dan dimakan plankton, ikan, dan biota lain. Plastik tidak larut dalam air laut.",
            },
            {
                id: "marine-07",
                type: "skenario",
                prompt: "Komunitasmu mengadakan bersih pantai setiap bulan. Apa yang membuat kegiatan itu berdampak lebih panjang?",
                options: [
                    "Memotret hasilnya lalu berhenti di situ",
                    "Menimbun sampah di pasir",
                    "Membakar sampah di tepi pantai",
                    "Memilah dan mencatat jenis sampah yang ditemukan, lalu memakai datanya untuk mengajak pihak terkait mengurangi sumbernya",
                ],
                correctIndex: 3,
                explanation:
                    "Catatan jenis dan merek sampah menunjukkan dari mana sampah berasal, sehingga aksi bisa diarahkan ke sumbernya. Kalau sumbernya tidak dikurangi, pantai akan kotor lagi.",
            },
            {
                id: "marine-08",
                type: "skenario",
                prompt: "Sebuah sekolah ingin menanam 1.000 bibit mangrove. Apa langkah yang paling menentukan keberhasilannya?",
                options: [
                    "Menanam di mana saja yang ada lahan kosong, termasuk pantai berpasir terbuka",
                    "Menanam sekali lalu meninggalkannya",
                    "Memilih lokasi dan jenis yang sesuai zona pasang surut, lalu memantau dan merawat bibitnya",
                    "Menanam jenis apa pun yang bibitnya paling murah",
                ],
                correctIndex: 2,
                explanation:
                    "Mangrove hidup di zona pasang surut berlumpur, dan tiap jenis punya zona yang cocok. Bibit di tempat yang salah atau tanpa perawatan sering mati. Ukuran keberhasilannya adalah jumlah bibit yang masih hidup beberapa tahun kemudian.",
            },
        ],
    },
    {
        category: "energi",
        title: "Eco Quiz: Energi Terbarukan",
        questions: [
            {
                id: "renew-01",
                type: "fakta",
                prompt: "Mana yang termasuk sumber energi terbarukan?",
                options: [
                    "Batu bara",
                    "Gas alam",
                    "Panas bumi",
                    "Minyak bumi",
                ],
                correctIndex: 2,
                explanation:
                    "Panas bumi berasal dari panas di dalam Bumi yang terus tersedia. Batu bara, gas alam, dan minyak bumi terbentuk selama jutaan tahun dan habis bila dipakai. Indonesia berada di Cincin Api Pasifik sehingga punya banyak potensi panas bumi.",
            },
            {
                id: "renew-02",
                type: "skenario",
                prompt: "Pemilik homestay ingin memasang panel surya di atap. Apa yang sebaiknya dicek lebih dulu?",
                options: [
                    "Warna cat atap",
                    "Pemakaian listrik bulanan, luas dan arah atap, serta bayangan pohon atau bangunan di sekitarnya",
                    "Jumlah tamu tahun lalu",
                    "Merek televisi di kamar",
                ],
                correctIndex: 1,
                explanation:
                    "Pemakaian listrik menentukan kapasitas yang dibutuhkan. Atap yang teduh atau menghadap arah kurang cocok menghasilkan lebih sedikit listrik. Tanyakan juga syarat sambungan ke jaringan PLN sebelum membeli.",
            },
            {
                id: "renew-03",
                type: "fakta",
                prompt: 'Pernyataan: "Panel surya tidak menghasilkan listrik saat mendung." Mana yang benar?',
                options: [
                    "Benar, panel hanya bekerja dengan sinar langsung",
                    "Benar, panel butuh panas, bukan cahaya",
                    "Salah, panel menghasilkan lebih banyak listrik saat mendung",
                    "Salah. Panel tetap menghasilkan listrik dari cahaya yang tersebar, tetapi lebih sedikit daripada saat cerah",
                ],
                correctIndex: 3,
                explanation:
                    "Panel mengubah cahaya, bukan panas, menjadi listrik. Cahaya saat mendung masih ada tetapi lebih lemah, sehingga produksinya turun. Panel juga cenderung kurang efisien saat sangat panas.",
            },
            {
                id: "renew-04",
                type: "skenario",
                prompt: "Sebuah vila memasang panel surya tetapi tetap ingin punya listrik di malam hari. Mana pernyataan yang benar?",
                options: [
                    "Listrik siang hari bisa disimpan di baterai, atau vila tetap tersambung ke jaringan PLN untuk malam hari, dan pemakaian berat bisa digeser ke siang",
                    "Panel surya menghasilkan jumlah listrik yang sama dari cahaya bulan",
                    "Menambah jumlah panel membuat panel bekerja di malam hari",
                    "Panel surya tidak bisa dipakai bersama jaringan PLN",
                ],
                correctIndex: 0,
                explanation:
                    "Panel tidak menghasilkan listrik tanpa cahaya. Energi siang hari bisa disimpan dalam baterai, atau bangunan memakai jaringan PLN di malam hari. Menggeser pemakaian berat, seperti mencuci dan memompa air, ke siang hari membuat listrik surya terpakai lebih banyak.",
            },
            {
                id: "renew-05",
                type: "skenario",
                prompt: "Sebuah desa wisata di daerah pegunungan ingin menambah sumber listrik lokal. Di dekatnya ada sungai dengan aliran deras sepanjang tahun. Sumber mana yang paling cocok?",
                options: [
                    "Pembangkit mikrohidro yang memutar turbin dengan aliran sungai",
                    "PLTU batu bara skala kecil",
                    "Turbin angin di dasar sungai",
                    "Panel surya yang direndam di sungai",
                ],
                correctIndex: 0,
                explanation:
                    "PLTMH (pembangkit listrik tenaga mikrohidro) memutar turbin dengan aliran air dan bisa dibangun dalam skala kecil tanpa bendungan besar. Syaratnya aliran dan beda tinggi sungai cukup. Panel surya tidak boleh terendam, dan turbin angin butuh angin, bukan air.",
            },
            {
                id: "renew-06",
                type: "skenario",
                prompt: "Ada usulan pembangkit listrik tenaga air dengan bendungan besar di hulu sebuah sungai. Warga khawatir. Sikap yang paling masuk akal?",
                options: [
                    "Terbarukan berarti pasti tanpa dampak, jadi kajian lingkungan tidak perlu",
                    "Menolak semua pembangkit tanpa melihat datanya",
                    "Menilai dampaknya terhadap sungai, ikan, dan permukiman lewat kajian lingkungan, lalu membandingkannya dengan alternatif",
                    "Menerima semuanya karena listriknya murah",
                ],
                correctIndex: 2,
                explanation:
                    "Sumber terbarukan tetap bisa mengubah lingkungan. Bendungan besar mengubah aliran sungai, menghalangi ikan, dan bisa menggenangi permukiman. Karena itu proyek semacam ini butuh kajian dampak lingkungan dan masukan warga.",
            },
            {
                id: "renew-07",
                type: "skenario",
                prompt: "Sebuah sekolah ingin menurunkan tagihan listrik sebelum membeli panel surya. Langkah termurah dengan hasil tercepat?",
                options: [
                    "Menambah jumlah AC",
                    "Membeli baterai berkapasitas besar",
                    "Menaikkan daya langganan PLN",
                    "Mengganti lampu ke LED, mematikan perangkat yang tidak dipakai, dan menyetel AC di kisaran 24 sampai 26°C",
                ],
                correctIndex: 3,
                explanation:
                    "Mengurangi pemakaian lebih murah daripada membangun pembangkit. Gedung yang boros listrik juga membutuhkan panel dan baterai lebih besar, sehingga penghematan lebih dulu menurunkan biaya pemasangan nanti.",
            },
            {
                id: "renew-08",
                type: "skenario",
                prompt: "Pemerintah desa ingin membangun PLTS. Sawah subak luas, tetapi lahan di Bali terbatas. Lokasi mana yang paling bijak?",
                options: [
                    "Mengubah sawah subak menjadi ladang panel",
                    "Atap gedung, area parkir, dan lahan yang tidak produktif",
                    "Menebang hutan desa",
                    "Menunda sampai Bali tidak butuh listrik lagi",
                ],
                correctIndex: 1,
                explanation:
                    "Atap dan area parkir memberi ruang untuk panel tanpa mengurangi lahan pertanian atau hutan. Sawah subak menghasilkan pangan dan menjadi bagian dari lanskap budaya yang diakui UNESCO.",
            },
        ],
    },
    {
        category: "gaya-hidup",
        title: "Eco Quiz: Gaya Hidup Berkelanjutan",
        questions: [
            {
                id: "lifestyle-01",
                type: "skenario",
                prompt: "Kamu membeli nasi campur dan es teh di warung dekat sekolah hampir setiap hari. Pilihan mana yang menghasilkan sampah paling sedikit?",
                options: [
                    "Meminta dobel kantong plastik",
                    "Membawa wadah makan dan tumbler sendiri",
                    "Memakai sedotan plastik lalu membuangnya ke tempat sampah",
                    "Memesan lewat aplikasi antar",
                ],
                correctIndex: 1,
                explanation:
                    "Wadah sendiri mencegah sampah muncul sehingga tidak perlu dipilah atau didaur ulang. Pesan antar umumnya menambah kemasan.",
            },
            {
                id: "lifestyle-02",
                type: "fakta",
                prompt: 'Pernyataan: "Tas kain selalu lebih ramah lingkungan daripada tas plastik sejak pertama dibeli." Mana yang benar?',
                options: [
                    "Benar, karena kain berasal dari tanaman",
                    "Benar, karena tas kain tidak perlu dicuci",
                    "Salah, karena tas kain tidak bisa dipakai ulang",
                    "Salah. Produksi tas kain memakai lebih banyak sumber daya, jadi manfaatnya baru muncul kalau dipakai berkali-kali",
                ],
                correctIndex: 3,
                explanation:
                    "Dampak tas kain di awal lebih besar karena bahan dan proses produksinya. Makin sering dipakai, dampak per pemakaian makin kecil. Tas yang sudah kamu punya lebih baik dipakai daripada membeli tas baru.",
            },
            {
                id: "lifestyle-03",
                type: "skenario",
                prompt: "Rina akan belanja sayur dan tahu di pasar tradisional. Cara mana yang paling sedikit menghasilkan sampah?",
                options: [
                    "Meminta kantong plastik baru di tiap pedagang",
                    "Membeli sayur dalam kemasan styrofoam",
                    "Membawa keranjang atau tas anyaman dan beberapa wadah, lalu meminta pedagang memakainya",
                    "Belanja sekali dalam jumlah sangat banyak supaya tidak bolak-balik",
                ],
                correctIndex: 2,
                explanation:
                    "Pasar tradisional menjual banyak bahan tanpa kemasan, jadi mudah dibawa pulang dengan wadah sendiri. Tas anyaman bisa dipakai bertahun-tahun.",
            },
            {
                id: "lifestyle-04",
                type: "skenario",
                prompt: "Di rumah ada sisa nasi dan lauk dari kemarin yang masih layak dimakan, tetapi kamu bosan. Apa yang sebaiknya dilakukan?",
                options: [
                    "Mengolahnya menjadi bekal atau nasi goreng, membaginya bila berlebih, dan mengompos bagian yang tidak bisa dimakan",
                    "Membuangnya ke tempat sampah",
                    "Membuangnya ke selokan",
                    "Menaruhnya di hutan untuk satwa liar",
                ],
                correctIndex: 0,
                explanation:
                    "Sisa makanan di TPA menghasilkan metana, dan sumber daya untuk menanam, mengangkut, dan memasaknya ikut terbuang. Mengolah ulang makanan yang masih layak mencegah sampah muncul. Satwa liar tidak boleh diberi makanan manusia.",
            },
            {
                id: "lifestyle-05",
                type: "skenario",
                prompt: 'Sebuah sabun berlabel "ramah lingkungan 100%" tanpa keterangan lain. Apa yang kamu lakukan?',
                options: [
                    "Mencari rincian bahan, sertifikasi, dan cara pembuangannya sebelum memutuskan",
                    "Langsung membeli karena labelnya hijau",
                    "Membeli yang paling mahal",
                    "Menganggap semua klaim ramah lingkungan bohong",
                ],
                correctIndex: 0,
                explanation:
                    "Klaim umum tanpa bukti sering disebut greenwashing. Label yang kuat menyebut hal spesifik, misalnya bahan, persentase bahan daur ulang, atau sertifikasi dari lembaga independen.",
            },
            {
                id: "lifestyle-06",
                type: "fakta",
                prompt: 'Pernyataan: "Mengganti semua barang ke produk ramah lingkungan sudah cukup, tidak perlu mengurangi belanja." Mana yang benar?',
                options: [
                    "Benar, produk ramah lingkungan tidak punya dampak",
                    "Benar, asalkan harganya mahal",
                    "Salah. Membeli lebih sedikit tetap memberi dampak terkecil, karena setiap produk butuh bahan, energi, dan pengangkutan",
                    "Salah, karena produk ramah lingkungan tidak pernah lebih baik",
                ],
                correctIndex: 2,
                explanation:
                    "Urutan yang disarankan adalah tolak, kurangi, pakai ulang, lalu daur ulang. Barang yang tidak jadi dibeli tidak memakai bahan, energi, dan transportasi untuk dibuat.",
            },
            {
                id: "lifestyle-07",
                type: "skenario",
                prompt: "Lemari Kadek sudah penuh, tetapi ia ingin tampilan baru untuk acara sekolah. Pilihan mana yang paling ringan bagi lingkungan?",
                options: [
                    "Membeli baju baru yang murah dan sedang tren",
                    "Membuang baju lama lalu membeli yang baru",
                    "Membeli baju baru lalu menyimpan yang lama",
                    "Bertukar baju dengan teman, mencari di toko barang bekas, atau memadupadankan baju yang sudah ada",
                ],
                correctIndex: 3,
                explanation:
                    "Pembuatan pakaian memakai air, energi, dan bahan kimia. Memakai ulang pakaian yang sudah ada memperpanjang umurnya dan menghindari produksi baru.",
            },
            {
                id: "lifestyle-08",
                type: "skenario",
                prompt: "Rina ingin hidup lebih berkelanjutan tetapi bingung mulai dari mana. Pendekatan yang paling realistis?",
                options: [
                    "Mengubah semua kebiasaan sekaligus mulai besok",
                    "Memilih satu kebiasaan, menjalankannya 7 hari, lalu menambah satu lagi",
                    "Menunggu aturan dari pemerintah",
                    "Menunggu punya uang untuk membeli produk ramah lingkungan",
                ],
                correctIndex: 1,
                explanation:
                    "Perubahan kecil yang diulang lebih mudah dipertahankan daripada perubahan besar sekaligus. Tantangan 7 Hari di Eco Action dirancang untuk langkah semacam ini.",
            },
        ],
    },
];

export const getQuizByCategory = (categoryId) =>
    quizzes.find((quiz) => quiz.category === categoryId);
