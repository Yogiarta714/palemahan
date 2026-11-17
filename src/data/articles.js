import mangroveRoots from "../assets/images/artikel-mangrove-akar.webp";
import subak from "../assets/images/Subak.jpg";
import imgMemilahSampah from "../assets/images/imgMemilahSampah.jpg";
import imgJalakBali from "../assets/images/imgJalakBali.jpg";
import imgEnergiSurya from "../assets/images/imgEnergiSurya.png";
import imgTanpaPlastik from "../assets/images/imgTanpaPlastik.jpg";
import imgHutanBaliBarat from "../assets/images/imgHutanBaliBarat.jpg";
import imgTerumbuKarang from "../assets/images/imgTerumbuKarang.jpg";
import imgBauranEnergi from "../assets/images/imgBauranEnergi.webp";
import imgBelanjaPasar from "../assets/images/imgBelanjaPasar.jpg";
import imgTpaSuwung from "../assets/images/imgTpaSuwung.jpg";
import imgNaikSatuDerajat from "../assets/images/imgNaikSatuDerajat.jpg";

// Isian bawaan untuk artikel
const base = {
    draft: false,
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
        tags: [
        "mangrove",
        "pesisir",
        "akar",
        "tahura",
        "ngurah rai",
        "sampah plastik",
        ],
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
            source:
            "McIvor dkk., The Nature Conservancy dan Wetlands International",
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
            label:
            "Mongabay Indonesia (2023). Kala hutan mangrove Ngurah Rai dominan blok pemanfaatan",
            url: "https://mongabay.co.id/2023/03/15/kala-hutan-mangrove-ngurah-rai-dominan-blok-pemanfaatan/amp/",
        },
        {
            label:
            "Mongabay Indonesia (2019). Menyusuri Taman Hutan Raya Ngurah Rai sambil belajar lingkungan",
            url: "https://mongabay.co.id/2019/05/19/menyusuri-taman-hutan-raya-ngurah-rai-sambil-belajar-lingkungan/",
        },
        {
            label:
            "McIvor dkk. (2012). Reduction of Wind and Swell Waves by Mangroves. The Nature Conservancy dan Wetlands International",
            url: "https://library.sprep.org/sites/default/files/reduction-wind-swell-waves-by-mangvoes.pdf",
        },
        {
            label:
            "ANTARA Bali (19 Juni 2023). Nelayan pungut 3 ton sampah plastik per minggu di hutan mangrove",
            url: "https://bali.antaranews.com/berita/318798/nelayan-pungut-3-ton-sampah-plastik-per-minggu-di-hutan-mangrove",
        },
        {
            label:
            'ANTARA (2 September 2026). BLDF inisiasi "Living Laboratory" mangrove dukung riset berkelanjutan',
            url: "https://www.antaranews.com/berita/5722376/bldf-inisiasi-living-laboratory-mangrove-dukung-riset-berkelanjutan",
        },
        {
            label:
            "Kompas.com (10 Desember 2025). Jelajah mangrove di Pulau Serangan Bali, terancam sampah dan sedimentasi",
            url: "https://lestari.kompas.com/read/2025/12/10/103500386/jelajah-mangrove-di-pulau-serangan-bali-terancam-sampah-dan-sedimentasi?page=all",
        },
        ],
        related: ["contoh-memilah-sampah-dari-sumber", "contoh-tanpa-plastik"],
    },
    {
        ...base,
        draft: false,
        id: "a-sampah-1",
        slug: "contoh-memilah-sampah-dari-sumber",
        title: "Memilah Sampah dari Sumber: Panduan Praktis Rumah Tangga",
        category: "sampah",
        summary:
        "Di dapur, satu kantong sampah bisa berisi kulit mangga, bungkus mi instan, baterai bekas, dan canang yang sudah layu. Semua itu “sampah”, tetapi tidak semuanya sama nasibnya.",
        image: {
        src: imgMemilahSampah,
        alt: "Rak pemilahan sampah organik, anorganik, popok, dan residu di Dusun Tohpati, Denpasar",
        width: 1400,
        height: 933,
        caption:
            "Rak gantungan untuk memilah lima jenis sampah di Dusun Tohpati, Denpasar",
        credit: "Foto: Luh De Suriyani / Mongabay Indonesia",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: ["sampah", "pilah", "organik", "anorganik", "rumah tangga", "B3"],
        takeaways: [
        "Pemilahan dari rumah adalah langkah pertama menentukan ke mana sampah itu pergi, karena tidak semua “sampah” punya nasib yang sama.",
        "Residu seperti sedotan, mika, dan styrofoam tidak otomatis bisa dijual ke bank sampah.",
        "B3 rumah tangga, seperti baterai bekas, perlu dipisah dan diserahkan ke fasilitas khusus bila tersedia.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Di dapur, satu kantong sampah bisa berisi kulit mangga, bungkus mi instan, baterai bekas, dan canang yang sudah layu. Semua itu “sampah”, tetapi tidak semuanya sama nasibnya. Pemilahan dari rumah adalah langkah pertama menentukan ke mana sampah itu pergi.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Kenapa harus dipilah? Pedoman pengelolaan sampah berbasis desa adat membedakan sampah menurut sumber dan jenisnya, antara lain sampah rumah tangga, sampah upakara, dan sampah B3. Residu didefinisikan sebagai sampah yang tidak bisa diolah kembali atau didaur ulang.",
        },
        {
            type: "paragraph",
            text: "Bagaimana praktiknya? Di Dusun Tohpati, warga belajar memilah lima jenis sampah: organik, anorganik keras, anorganik bernilai, popok/tisu/pembalut, dan residu/B3.",
        },
        { type: "facts" },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Ada kategori “sampah upakara”, yaitu sisa canang dan sarana upacara, dalam klasifikasi desa adat.",
            "Lubang biopori dapat menampung daun, sisa sayur mentah, dan canang bekas, menurut sebuah studi pengabdian di Bali.",
            "Teba modern, inovasi pengolahan sampah organik rumah tangga, tercantum dalam pedoman desa adat.",
            "Pemilahan dimulai dari ibu dan anak dalam pendampingan PPLH Bali.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“Semua plastik bisa dijual ke bank sampah.” Tidak. Sedotan, mika, dan styrofoam justru jadi residu yang sulit dijual.",
        },
        {
            type: "paragraph",
            text: "“Kertas pembungkus nasi pasti bisa didaur ulang.” Yang berlapis plastik masuk residu.",
        },
        {
            type: "paragraph",
            text: "“B3 hanya limbah pabrik.” Contoh B3 rumah tangga: baterai, lampu neon, oli bekas, obat kedaluwarsa. Pisahkan dan serahkan ke fasilitas khusus bila tersedia.",
        },
        ],
        keyFacts: [
        {
            text: "Per 10 Juni 2026, KLH/BPLH menyatakan pemilahan sampah 100% wajib di Bali mulai 1 Juli 2026.",
            source: "KLH/BPLH",
            year: "2026",
        },
        {
            text: "Residu menurut pengalaman warga Gang Sari Dewi: sedotan, kertas bungkus nasi berlapis plastik, plastik mika, styrofoam, popok bayi, dan pembalut.",
            source: "Mongabay Indonesia",
            year: "2021",
        },
        {
            text: "Pilihan pengolahan di rumah atau banjar menurut PPLH Bali: komposter, takakura, biopori, bank sampah, TPS3R, atau rumah kompos.",
            source: "Mongabay Indonesia",
            year: "2021",
        },
        {
            text: "Warga mengeluhkan sebagian jenis sulit terpilah, dan B3 jarang terkumpul atau sering tercampur dengan anorganik.",
            source: "Mongabay Indonesia",
            year: "2020",
        },
        ],
        tryToday: {
        title: "Tantangan 7 Hari Memilah Sampah",
        description:
            "Siapkan tiga wadah: organik, anorganik bersih-kering, dan residu. Pisahkan baterai bekas dari sampah lain, lalu tanyakan jadwal dan aturan pengangkutan ke banjar atau kelurahan. Kami tidak menjanjikan jumlah sampah yang berkurang.",
        challengeId: "pilah-sampah",
        },
        sources: [
        {
            label:
            "Perarem/Pedoman Pengelolaan Sampah Berbasis Desa Adat (salinan JIDHAT Pemprov Bali)",
            url: "https://jidhat.baliprov.go.id/storage/perarem/yIT29clkn0MrYSzb0lJvkhmzFVFdzIJ2cMUohc4I.pdf",
        },
        {
            label:
            "Mongabay Indonesia. (2020, 14 Feb). Dusun Tohpati belajar memilah 5 jenis sampah",
            url: "https://www.mongabay.co.id/2020/02/14/dusun-tohpati-belajar-memilah-5-jenis-sampah/",
        },
        {
            label:
            "Mongabay Indonesia. (2021, 1 Jun). Memilah sampah di Gang Sari Dewi kala pandemi",
            url: "https://www.mongabay.co.id/2021/06/01/memilah-sampah-di-gang-sari-dewi-kala-pandemi/",
        },
        {
            label:
            "Jurnal Warmadewa (CSJ). Biopori rumah tangga (studi pengabdian)",
            url: "https://ejournal.warmadewa.ac.id/index.php/csj/article/download/9950/5737",
        },
        {
            label:
            "KLH/BPLH. (2026, 10 Juni). Siaran Pers SR.122. Tegas KLH/BPLH dan Pemprov Bali wajibkan warga pilah sampah 100 persen mulai 1 Juli",
            url: "https://kemenlh.go.id/news/detail/tegas-klhbplh-dan-pemprov-bali-wajibkan-warga-pilah-sampah-100-persen-mulai-1-juli",
        },
        {
            label:
            "Metrotvnews. Mengenal jenis sampah dan cara memilahnya dari rumah",
            url: "https://www.metrotvnews.com/read/NOlC9joQ-mengenal-jenis-sampah-dan-cara-memilahnya-dari-rumah",
        },
        ],
        related: ["contoh-mangrove-pesisir", "belanja-pasar-bukan-plastik"],
    },
    {
        ...base,
        draft: false,
        id: "a-iklim-1",
        slug: "contoh-iklim-dan-subak",
        title: "Musim yang Bergeser: Perubahan Iklim dan Petani Subak",
        category: "iklim",
        summary:
        "Dulu petani menunggu hujan datang pada bulan yang kurang lebih sama. Kini jadwal tanam makin sulit dipastikan.",
        date: "2026-11-17",
        image: {
        src: subak,
        alt: "Pemandangan sawah terasering dengan sistem irigasi subak di Tabanan, Bali",
        width: 1500,
        height: 738,
        caption: "Sawah terasering yang diairi sistem subak di Tabanan, Bali",
        credit: "Foto: Lailatun Mubarokah / Green Network Asia",
        },
        readingTime: 4,
        tags: ["iklim", "subak", "pertanian", "cuaca"],
        takeaways: [
        "Bagi subak, musim adalah soal pokok karena jadwal tanam padi sangat bergantung pada air dan waktu.",
        "Identifikasi Dinas Pertanian Bali menyebut 244 subak berpotensi terdampak iklim ekstrem.",
        "Gagal panen tidak otomatis disebabkan perubahan iklim; alih fungsi lahan dan hama juga memengaruhi petani.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Dulu petani menunggu hujan datang pada bulan yang kurang lebih sama. Kini jadwal tanam makin sulit dipastikan. Bagi subak, sistem pengairan dan organisasi petani Bali yang diakui UNESCO sejak 2012, musim adalah soal pokok.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Apa itu subak? Sistem irigasi tradisional dan organisasi petani. Awig-awig subak mengatur banyak hal, termasuk jadwal tanam.",
        },
        {
            type: "paragraph",
            text: "Mengapa musim penting? Padi sangat bergantung pada air dan waktu. Studi di Subak Jatiluwih menyebut masalah utamanya adalah menentukan jadwal tanam yang tepat. Panen di bulan puncak hujan bisa membuat padi rebah.",
        },
        { type: "facts" },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Kekeringan 2015 membuat petani di Bali tidak bisa menanam padi, menurut akademisi Universitas Dwijendra.",
            "Hujan lebat tak selalu berkah. Hujan tinggi lalu cuaca panas dapat memicu serangan hama.",
            "Adaptasi sudah berjalan. Distanpangan menyebut penguatan infrastruktur, mitigasi hama, dan varietas adaptif.",
            "Subak terhimpit. Seorang akademisi Udayana memproyeksikan subak bisa habis dalam 65 tahun bila alih fungsi lahan berlanjut.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“Semua gagal panen karena perubahan iklim.” Tidak. Alih fungsi lahan dan hama tikus juga dilaporkan memengaruhi petani.",
        },
        {
            type: "paragraph",
            text: "“Subak tradisional pasti tahan.” Subak beradaptasi, misalnya menggeser jadwal tanam. Tradisi saja tidak cukup tanpa air dan lahan.",
        },
        {
            type: "paragraph",
            text: "“Satu musim aneh pasti bukti perubahan iklim.” Satu kejadian butuh kajian atribusi sebelum dikaitkan langsung.",
        },
        ],
        keyFacts: [
        {
            text: "Dinas Pertanian dan Ketahanan Pangan Bali menyebut perubahan pola curah hujan, kemarau lebih panjang, dan potensi kekeringan perlu diantisipasi. Hasil identifikasi: 244 subak berpotensi terdampak iklim ekstrem.",
            source: "ANTARA Bali",
            year: "",
        },
        {
            text: "Studi di Subak Jatiluwih (Tabanan, 2022–2023): pola tanam padi–padi–palawija, dengan pergeseran jadwal tanam sebagai bentuk adaptasi.",
            source: "Jurnal Alam Lestari, Unmas",
            year: "2023",
        },
        {
            text: "Di Gianyar, seorang petani Subak Padang Legi melaporkan sawahnya untuk pertama kali terdampak banjir pada September 2025, selain serangan tikus dan air yang mengering.",
            source: "Mongabay Indonesia",
            year: "2026",
        },
        ],
        tryToday: {
        title: "Ikuti aturan subak, pilih aksi iklim",
        description:
            "Saat berkunjung ke sawah subak, ikuti aturan setempat dan jangan masuk sawah tanpa izin. Pantau informasi cuaca BMKG. Pilih satu tantangan di Eco Action: 7 Hari Hemat Energi atau 7 Hari Mobilitas Hijau. Aksi pribadi tidak menjamin hujan kembali teratur.",
        challengeId: "hemat-energi",
        },
        sources: [
        {
            label:
            "ANTARA Bali. Infrastruktur dan mitigasi hama di Bali diperkuat hadapi perubahan iklim",
            url: "https://bali.antaranews.com/berita/410155/infrastruktur-dan-mitigasi-hama-di-bali-diperkuat-hadapi-perubahan-iklim",
        },
        {
            label:
            "Adaptasi dan mitigasi perubahan iklim Subak Jatiluwih. Jurnal Alam Lestari, Unmas",
            url: "https://e-journal.unmas.ac.id/index.php/alamlestari/article/download/14441/10483/39084",
        },
        {
            label:
            "Mongabay Indonesia. (2026, September). Subak Gianyar terhimpit pembangunan, petani hadapi krisis air hingga hama",
            url: "https://www.mongabay.co.id/short-article/2026/09/subak-gianyar-terhimpit-pembangunan-petani-hadapi-krisis-air-hingga-hama/",
        },
        {
            label: "ANTARA Bali. Ketersediaan air vital bagi usaha tani",
            url: "https://bali.antaranews.com/berita/86468/ketersediaan-air-vital-bagi-usaha-tani",
        },
        {
            label:
            "Green Network Asia. Bagaimana tradisi Subak di Bali mendukung praktik pertanian yang lebih berkelanjutan",
            url: "https://greennetwork.id/gna-knowledge-hub/bagaimana-tradisi-subak-di-bali-mendukung-praktik-pertanian-yang-lebih-berkelanjutan/",
        },
        ],
        related: ["contoh-energi-surya", "memahami-bauran-energi-indonesia"],
    },
    {
        ...base,
        id: "a-biodiversitas-1",
        slug: "contoh-jalak-bali",
        title: "Jalak Bali: Dari Hampir Hilang, Kini Kembali Terbang?",
        category: "biodiversitas",
        summary:
        "Sekitar 1990 hanya tersisa 15 sampai 20 Jalak Bali di alam. Kini beberapa sumber mencatat ratusan, tetapi statusnya masih kritis.",
        image: {
        src: imgJalakBali,
        alt: "Seekor jalak Bali bernyanyi dengan kulit wajah biru kobalt dan jambul putih",
        width: 2048,
        height: 1536,
        caption:
            "Jalak Bali (Leucopsar rothschildi), burung endemik Bali yang berstatus kritis",
        credit: "Foto: Heather Physioc / Mongabay Indonesia",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: [
        "jalak bali",
        "curik bali",
        "endemik",
        "burung",
        "tnbb",
        "konservasi",
        ],
        takeaways: [
        "Jalak Bali hampir hilang karena kehilangan habitat dan penangkapan untuk perdagangan burung kicau.",
        "Populasinya pulih berkat pelepasliaran, kotak sarang, penangkaran warga, dan aturan adat.",
        "Statusnya tetap Critically Endangered, jadi jangan membeli atau memelihara burung liar dilindungi.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Burung putih bersayap ujung hitam dengan wajah biru ini hanya dikenal hidup alami di satu pojok pulau: ujung barat Bali. Namanya Jalak Bali, atau Curik Bali. Sekitar 1990, hanya tersisa sekitar 15 sampai 20 ekor di alam. Hari ini, beberapa sumber melaporkan ratusan. Bagaimana burung ini kembali, dan apakah ia sudah aman?",
        },
        { type: "heading", text: "Mengapa hampir hilang" },
        {
            type: "paragraph",
            text: "Dua tekanan utama adalah hilangnya habitat dan penangkapan untuk perdagangan burung kicau. Jalak Bali termasuk burung yang sangat dicari sebagai peliharaan.",
        },
        {
            type: "paragraph",
            text: "Dalam Daftar Merah IUCN, Jalak Bali dikategorikan terancam sejak 1988 dan Critically Endangered sejak 1994. Status itu dilaporkan tidak berubah pada penilaian 2021. Burung ini cenderung menyukai savana dan lanskap terbuka, bukan hutan lebat, sehingga kebun dan perkebunan warga bisa menyerupai habitat aslinya.",
        },
        { type: "facts" },
        { type: "heading", text: "Tanda-tanda pemulihan" },
        {
            type: "list",
            items: [
            "Pada 2012–2021, 376 burung hasil penangkaran dilepas ke alam.",
            "Lebih dari 100 kotak sarang buatan dipasang. Pada musim berbiak 2019–2020, 76 anak burung keluar sarang dari 54 percobaan bersarang yang dipantau.",
            "Pembiakan komersial oleh warga menekan harga pasar, sehingga tekanan menangkap di alam berkurang.",
            ],
        },
        {
            type: "paragraph",
            text: "Angka populasi berbeda karena periode dan metode hitungnya berbeda: 420 ekor (2021), 452 ekor (2022), dan sekitar 600 individu (2026). Jangan menjumlahkannya atau menyebut satu angka sebagai jumlah \u201csekarang\u201d tanpa tahun dan sumbernya.",
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Habitat alami Jalak Bali ada di TNBB, Buleleng dan Jembrana. Populasi di Nusa Penida dimulai dari pelepasan 25 burung pada 2006.",
            "Di salah satu desa adat Bali, ada kesepakatan adat untuk melindungi burung ini. Warga ikut menghitung burung dan menjaga sarang.",
            "Pada 16 Oktober 2026, 15 Jalak Bali dilepas di Penebel, Tabanan. Pengelola memperkirakan ada 140–150 ekor di Kampoeng Jalak Bali.",
            ],
        },
        { type: "heading", text: "Meluruskan miskonsepsi" },
        {
            type: "paragraph",
            text: "\u201cJalak Bali sudah punah di alam.\u201d Tidak. Jumlahnya meningkat, tetapi statusnya tetap Critically Endangered.",
        },
        {
            type: "paragraph",
            text: "\u201cSekarang sudah aman.\u201d Belum. Penangkapan tetap harus dikendalikan, dan peningkatan banyak terjadi dekat lokasi pelepasan. Pada Oktober 2025, Mongabay melaporkan perburuan masih berlanjut walau patroli ditingkatkan.",
        },
        ],
        keyFacts: [
        {
            text: "Jumlah Jalak Bali liar di TNBB naik dari 15 ekor (2012) menjadi 420 ekor (Oktober 2021) berdasarkan sensus tahunan staf taman nasional.",
            source: "Squires dkk., Oryx",
            year: "2023",
        },
        {
            text: "BKSDA Bali mencatat populasi sekitar 600 individu, mayoritas masih di TNBB.",
            source: "detikBali",
            year: "2026",
        },
        {
            text: "Jalak Bali berstatus Critically Endangered dalam Daftar Merah IUCN sejak 1994.",
            source: "BirdLife International",
            year: "2021",
        },
        ],
        tryToday: {
        title: "Jangan beli burung liar dilindungi",
        description:
            "Jangan membeli atau memelihara burung liar dilindungi. Bila melihat penjualan satwa liar, laporkan ke BKSDA Bali. Saat berkunjung ke TNBB, ikuti aturan pengelola.",
        challengeId: "pilah-sampah",
        },
        sources: [
        {
            label:
            "Squires, T., dkk. (2023). The road to recovery: conservation management for the Critically Endangered Bali myna shows signs of success. Oryx",
            url: "https://www.cambridge.org/core/journals/oryx/article/road-to-recovery-conservation-management-for-the-critically-endangered-bali-myna-shows-signs-of-success/F804B2368C5BFADFC697D48194001458",
        },
        {
            label:
            "BirdLife International (2021). Bali Myna (Leucopsar rothschildi), species factsheet",
            url: "https://datazone.birdlife.org/species/factsheet/bali-myna-leucopsar-rothschildi/text",
        },
        {
            label:
            "detikBali (9 April 2026). BKSDA lepas Curik Bali, dorong Hari Nasional",
            url: "https://www.detik.com/bali/berita/d-8437275/bksda-lepas-curik-bali-dorong-hari-nasional",
        },
        {
            label:
            "detikBali (2022). Yuk kenalan dengan Jalak Bali, burung lincah yang setia 1 pasangan",
            url: "https://www.detik.com/bali/wisata/d-6337928/yuk-kenalan-dengan-jalak-bali-burung-lincah-yang-setia-1-pasangan",
        },
        {
            label:
            "Mongabay Indonesia (29 Juli 2025). Cerita sukses desa adat di Bali lestarikan burung jalak",
            url: "https://www.mongabay.co.id/2025/07/29/cerita-sukses-desa-adat-di-bali-lestarikan-burung-jalak/",
        },
        {
            label:
            "Mongabay Indonesia (4 Oktober 2025). Awig-awig dan Jalak Bali: saat aturan adat lebih efektif lindungi spesies endemik dari kepunahan",
            url: "https://www.mongabay.co.id/2025/10/04/awig-awig-dan-jalak-bali-saat-aturan-adat-lebih-efektif-lindungi-spesies-endemik-dari-kepunahan/",
        },
        {
            label:
            "detikBali (16 Oktober 2026). 15 Jalak Bali dilepasliarkan di Tabanan",
            url: "https://www.detik.com/bali/berita/d-8710133/15-jalak-bali-dilepasliarkan-di-tabanan",
        },
        ],
        related: [
        "hutan-bali-barat-dan-penghuninya",
        "contoh-memilah-sampah-dari-sumber",
        ],
    },
    {
        ...base,
        id: "a-energi-1",
        slug: "contoh-energi-surya",
        title: "Energi Surya di Pulau Dewata: Peluang dan Tantangan",
        category: "energi",
        summary:
        "Bali nyaris selalu cerah, tetapi atap rumah dan hotel belum penuh panel surya. Jawabannya ada di campuran lahan, jaringan listrik, dan aturan.",
        image: {
        src: imgEnergiSurya,
        alt: "Petugas memeriksa panel surya atap di Hotel Swiss-belResort Pecatu, Badung, Bali",
        width: 960,
        height: 640,
        caption:
            "Pemeriksaan panel surya atap (PLTS atap) di sebuah hotel di Pecatu, Badung",
        credit: "Foto: Fikri Yusuf / ANTARA (via Katadata)",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: ["surya", "plts atap", "listrik", "energi bersih", "permen esdm"],
        takeaways: [
        "Lahan di Bali terbatas, jadi PLTS atap dianggap strategi yang paling realistis.",
        "Sejak Permen ESDM 2/2024, kelebihan listrik PLTS atap tidak lagi mengurangi tagihan PLN.",
        "Kapasitas EBT Bali sekitar 45 MW, masih jauh dari kebutuhan PLTS yang dimodelkan untuk 2034.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Bali nyaris selalu cerah, jadi kenapa atap rumah dan hotel di sini belum penuh panel surya? Jawabannya ada di campuran lahan, jaringan listrik, dan aturan.",
        },
        { type: "heading", text: "Dua jenis PLTS" },
        {
            type: "paragraph",
            text: "PLTS skala besar butuh lahan, sedangkan PLTS atap memakai atap bangunan yang sudah ada. Di Bali, lahan produktif juga menopang pertanian, sehingga atap bangunan dianggap strategi yang paling realistis.",
        },
        {
            type: "paragraph",
            text: "PLTS atap on-grid terhubung ke jaringan PLN dan perlu izin PLN. Aturan nasionalnya adalah Permen ESDM No. 2 Tahun 2024.",
        },
        { type: "facts" },
        { type: "heading", text: "Aturan dan target" },
        {
            type: "list",
            items: [
            "Kapasitas pemasangan PLTS atap tidak lagi dibatasi 100% daya tersambung, tetapi mengikuti kuota PLN. Biaya kapasitas ditiadakan, dan skema ekspor-impor listrik dihapus.",
            "Pengajuan on-grid hanya dibuka dua kali setahun, Januari dan Juli. Asosiasi PLTS di Bali menilai ini penghambat.",
            "PLTS Bali ditargetkan 629,39 MW pada 2034.",
            "Pada 25 Agustus 2026, program PLTS 100 GWp diluncurkan di Gilimanuk, Jembrana. Bali menyiapkan 1.000 hektare lahan.",
            ],
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Pada 27 Agustus 2025, tiga desa di Buleleng dan Karangasem meluncurkan PLTS atap sekitar 3,48 kWp di balai desa.",
            "PLTS 1 MW umumnya butuh sekitar 1 hektare lahan, sehingga lahan menjadi kendala di Bali.",
            "Listrik Bali terhubung ke Jawa lewat interkoneksi berkapasitas 340 MW sejak 2014.",
            "Pada 2019, Greenpeace memperkirakan PLTS terpasang di Bali baru 3–4 MWp, padahal targetnya 108 MW untuk 2025.",
            ],
        },
        { type: "heading", text: "Meluruskan miskonsepsi" },
        {
            type: "paragraph",
            text: "\u201cBali sudah mandiri energi.\u201d Belum. Sistem listrik Bali masih menerima pasokan lewat interkoneksi dari Jawa.",
        },
        {
            type: "paragraph",
            text: "\u201cPLTS atap bisa dijual ke PLN untuk mengurangi tagihan.\u201d Skema ekspor-impor listrik dihapus dalam Permen ESDM 2/2024, jadi kelebihan listrik tidak lagi dihitung sebagai pengurang tagihan.",
        },
        {
            type: "paragraph",
            text: "\u201cPanel surya menyelesaikan semua kebutuhan listrik.\u201d Kapasitas EBT Bali saat ini sekitar 45 MW, jauh di bawah kebutuhan PLTS 2 GW yang dimodelkan IESR untuk 2034.",
        },
        ],
        keyFacts: [
        {
            text: "Kapasitas EBT Bali sekitar 45 MW, sebagian besar PLTS dan PLTMH. PLTS terbesar ada di Karangasem, 25 MW.",
            source: "Listrik Indonesia",
            year: "2026",
        },
        {
            text: "Model IESR menyebut Bali memerlukan PLTS 2 GW pada 2034 dan 21 GW pada 2045 untuk mencapai net zero. Ini hasil pemodelan, bukan target resmi.",
            source: "IESR, dikutip ANTARA",
            year: "2026",
        },
        {
            text: "Permen ESDM 2/2024 menghapus batas kapasitas 100% daya tersambung dan skema ekspor-impor listrik PLTS atap.",
            source: "Kementerian ESDM",
            year: "2024",
        },
        ],
        tryToday: {
        title: "Matikan perangkat yang tidak dipakai",
        description:
            "Cabut atau matikan perangkat yang tidak dipakai (bukan perangkat medis atau keselamatan), dan pilih peralatan hemat energi bila membeli baru. Bila tertarik PLTS atap, tanyakan ketentuan dan periode pengajuannya ke PLN setempat.",
        challengeId: "hemat-energi",
        },
        sources: [
        {
            label:
            "Kementerian ESDM (5 Maret 2024). Aturan terbaru PLTS atap terbit, kini kapasitas pemasangan tidak dibatasi",
            url: "https://www.esdm.go.id/id/media-center/arsip-berita/aturan-terbaru-plts-atap-terbit-kini-kapasitas-pemasangan-tidak-dibatasi",
        },
        {
            label:
            "Kompas.com Lestari (6 Maret 2024). Aturan baru disahkan, daftar PLTS atap on-grid cuma Januari dan Juli",
            url: "https://lestari.kompas.com/read/2024/03/06/130000586/aturan-baru-disahkan-daftar-plts-atap-on-grid-cuma-januari-dan-juli",
        },
        {
            label:
            "Listrik Indonesia (17 Juli 2026). Investor antre, lahan PLTS di Bali menipis",
            url: "https://listrikindonesia.com/detail/20645/investor-antre-lahan-plts-di-bali-menipis",
        },
        {
            label:
            "Katadata (14 Juli 2026). Bali targetkan mandiri energi bersih, Gubernur minta PLN tak batasi PLTS atap",
            url: "https://katadata.co.id/ekonomi-hijau/energi-baru/6a55d26c01477/bali-targetkan-mandiri-energi-bersih-gubernur-minta-pln-tak-batasi-plts-atap",
        },
        {
            label:
            "RCTI+/Okezone (25 Agustus 2026). PLTS 100 GWp dimulai, Bali siapkan 1.000 hektare lahan untuk energi bersih",
            url: "https://www.rctiplus.com/news/detail/ekonomi/5459079/plts-100-gwp-dimulai--bali-siapkan-1-000-hektare-lahan-untuk-energi-bersih",
        },
        {
            label:
            "IESR (Juli 2025). Peta Jalan Ketenagalistrikan Bali 100% ET 2045",
            url: "https://iesr.or.id/wp-content/uploads/2025/07/Presentasi-Peluncuran-Peta-Jalan-Ketenagalistrikan-Bali-100-ET-2045-Alvin-Putra-S-IESR.pdf",
        },
        {
            label:
            "BCA Sekuritas, mengutip ANTARA (7 Oktober 2026). IESR usulkan PLTS atap jadi solusi Bali capai target emisi",
            url: "https://www.bcasekuritas.co.id/latest-news/news/iesr-usulkan-plts-atap-jadi-solusi-bali-capai-target-emisi",
        },
        {
            label:
            "detikBali (27 Agustus 2025). Tiga desa di Bali luncurkan PLTS atap, satu sekolah jadi percontohan",
            url: "https://www.detik.com/bali/berita/d-8082364/tiga-desa-di-bali-luncurkan-plts-atap-satu-sekolah-jadi-percontohan",
        },
        {
            label:
            "Greenpeace Indonesia (2019). Peta jalan pengembangan PLTS atap menuju Bali mandiri energi",
            url: "https://www.greenpeace.org/indonesia/publikasi/3876/peta-jalan-pengembangan-plts-atap-menuju-bali-mandiri-energi/",
        },
        {
            label:
            "ANTARA Bali (2025). APSA bahas peluang tercapainya 500 MW PLTS di Bali",
            url: "https://bali.antaranews.com/berita/384165/apsa-bahas-peluang-tercapainya-500-mw-plts-di-bali",
        },
        ],
        related: ["memahami-bauran-energi-indonesia", "contoh-iklim-dan-subak"],
    },
    {
        ...base,
        id: "a-gaya-hidup-1",
        slug: "contoh-tanpa-plastik",
        title: "Tanpa Plastik Sekali Pakai: Mulai dari Tas, Tumbler, dan Warung",
        category: "gaya-hidup",
        summary:
        "Kantong, sedotan, dan gelas plastik dipakai kurang dari satu jam. Di Bali, kebiasaan kecil ini sudah lama diatur, tetapi apakah aturan saja cukup?",
        image: {
        src: imgTanpaPlastik,
        alt: "Jajanan dikemas dengan daun pisang dan wadah nonplastik sebagai pengganti kemasan sekali pakai",
        width: 2560,
        height: 1920,
        caption:
            "Jajanan tradisional dikemas daun pisang dan wadah guna ulang, bukan plastik sekali pakai",
        credit: "Foto: Luh De Suriyani / Mongabay Indonesia",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: [
        "plastik",
        "tumbler",
        "belanja",
        "pergub 97/2018",
        "sedotan",
        "styrofoam",
        ],
        takeaways: [
        "Pergub Bali 97/2018 hanya membatasi tiga jenis plastik: kantong, styrofoam, dan sedotan.",
        "Sejak 2025, Bali juga menyasar produksi air minum kemasan plastik di bawah 1 liter.",
        "Aturan sudah ada, tetapi data kepatuhannya belum ditemukan. Kebiasaan pribadi tetap penting.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Kamu beli es teh di warung. Biasanya ada kantong kresek, sedotan, dan gelas plastik, semuanya dipakai kurang dari satu jam. Di Bali, kebiasaan kecil ini sudah lama jadi urusan aturan, bukan sekadar pilihan pribadi. Tapi apakah aturan saja cukup?",
        },
        { type: "heading", text: "Mengapa plastik sekali pakai jadi masalah" },
        {
            type: "paragraph",
            text: "UNEP memperkirakan dunia memproduksi sekitar 430 juta ton plastik per tahun, dan dua pertiganya berupa produk berumur pendek yang segera menjadi sampah, seperti kantong belanja, sedotan, dan kemasan makanan.",
        },
        {
            type: "paragraph",
            text: "Sampah plastik terlihat di pantai dan menumpuk di tempat pembuangan. Sejak 2018, Pemprov Bali menetapkan sejumlah aturan, dan fokusnya berkembang dari kantong, sedotan, dan styrofoam menjadi juga kemasan air minum kecil.",
        },
        { type: "facts" },
        { type: "heading", text: "Aturan dan tantangannya" },
        {
            type: "list",
            items: [
            "Mahkamah Agung menolak uji materiil Pergub 97/2018 yang diajukan asosiasi daur ulang plastik.",
            "Pada lokakarya November 2020, dilaporkan barang yang dilarang masih mudah didapat.",
            "Sebuah studi di Buleleng (2022) menyebut sanksi dalam Pergub ini bersifat administratif.",
            "Asosiasi produsen air minum dan peritel mendukung tujuan Bali bersih, tetapi keberatan dengan cara pelarangan produksi dan distribusi.",
            ],
        },
        {
            type: "paragraph",
            text: "Data kepatuhan per November 2026 belum ditemukan. Jadi bagian ini hanya melaporkan isi aturan dan pernyataan pihak terkait, bukan hasilnya.",
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Peraturan Wali Kota Denpasar No. 36 Tahun 2018 tentang kantong plastik berlaku sejak 1 Januari 2019.",
            "Laporan Brand Audit 2024 oleh Sungai Watch menyebut air minum gelas 220 ml sebagai salah satu penyumbang utama sampah plastik di Bali.",
            "CNA melaporkan (April 2025) sekitar 17% volume sampah Bali adalah plastik. Ini angka laporan media, bukan data resmi yang sudah diverifikasi.",
            ],
        },
        { type: "heading", text: "Meluruskan miskonsepsi" },
        {
            type: "paragraph",
            text: "\u201cBali sudah bebas plastik sekali pakai.\u201d Tidak. Evaluasi tahun 2020 menunjukkan pelaksanaannya sulit, dan belum ada data kepatuhan terbaru.",
        },
        {
            type: "paragraph",
            text: "\u201cSemua plastik dilarang.\u201d Tidak. Pergub 97/2018 hanya membatasi tiga jenis plastik, dan SE 9/2025 menyasar produksi air minum kemasan plastik di bawah 1 liter.",
        },
        {
            type: "paragraph",
            text: "\u201cTas kain atau bioplastik selalu lebih baik.\u201d Klaim ini butuh kajian siklus hidup yang belum kami miliki, jadi tidak kami tulis sebagai fakta.",
        },
        ],
        keyFacts: [
        {
            text: "Pergub Bali No. 97 Tahun 2018 membatasi tiga jenis plastik sekali pakai: kantong plastik, styrofoam, dan sedotan plastik. Aturan ini mulai berlaku 2019.",
            source: "Pemprov Bali; Mongabay Indonesia",
            year: "2018",
        },
        {
            text: "Surat Edaran Gubernur Bali No. 9 Tahun 2025 melarang lembaga usaha memproduksi air minum kemasan plastik sekali pakai di bawah 1 liter.",
            source: "ANTARA",
            year: "2025",
        },
        {
            text: "Dunia memproduksi sekitar 430 juta ton plastik per tahun, dua pertiganya produk berumur pendek.",
            source: "UNEP",
            year: "2023",
        },
        ],
        tryToday: {
        title: "Bawa tas dan tumbler sendiri",
        description:
            "Bawa tas belanja dan tumbler dari rumah, tolak sedotan dan styrofoam, isi ulang air minum bila ada fasilitasnya, dan bawa wadah sendiri ke warung atau pasar jika penjual bersedia.",
        challengeId: "bebas-plastik",
        },
        sources: [
        {
            label:
            "UNEP (2023). Beat Plastic Pollution: Practical Guide (World Environment Day 2023)",
            url: "https://wedocs.unep.org/bitstream/handle/20.500.11822/42437/Plastic_Pollution_WED23EN.pdf",
        },
        {
            label:
            "Gubernur Bali (2018). Peraturan Gubernur Bali Nomor 97 Tahun 2018 tentang Pembatasan Timbulan Sampah Plastik Sekali Pakai",
            url: "https://disperkimta.bulelengkab.go.id/informasi/download/49_pergub_nomor_97_tahun_2018.pdf",
        },
        {
            label:
            "Mongabay Indonesia (29 Desember 2018). Bali larang plastik sekali pakai mulai 2019",
            url: "https://www.mongabay.co.id/2018/12/29/bali-larang-plastik-sekali-pakai-mulai-2019/",
        },
        {
            label:
            "Mongabay Indonesia (12 Juli 2019). Gubernur Bali ajak kepala daerah lain larang plastik sekali pakai",
            url: "https://www.mongabay.co.id/2019/07/12/gubernur-bali-ajak-kepala-daerah-lain-larang-plastik-sekali-pakai/",
        },
        {
            label:
            "Mongabay Indonesia (11 November 2020). Bali kesulitan mengurangi plastik sekali pakai",
            url: "https://www.mongabay.co.id/2020/11/11/bali-kesulitan-mengurangi-plastik-sekali-pakai/",
        },
        {
            label:
            "Good News from Indonesia (9 Desember 2021). Meninjau 2 tahun komitmen Bali kurangi sampah plastik",
            url: "https://www.goodnewsfromindonesia.id/2021/12/09/meninjau-2-tahun-komitmen-bali-kurangi-sampah-plastik",
        },
        {
            label:
            "ANTARA (9 April 2025). Kurangi sampah plastik, Gubernur Bali larang produksi air minum di bawah 1 liter",
            url: "https://megapolitan.antaranews.com/berita/385465/kurangi-sampah-plastik-gubernur-bali-larang-poruksi-air-minum-di-bawah-1-liter",
        },
        {
            label:
            "Tirto (April 2025). Pro kontra SE pelarangan minuman kemasan plastik kecil di Bali",
            url: "https://tirto.id/pro-kontra-se-pelarangan-minuman-kemasan-plastik-kecil-di-bali-hal8",
        },
        {
            label:
            "Kilasbali.com (2025). Gubernur Koster minta produsen setop produksi AMDK plastik di bawah 1 liter",
            url: "https://kilasbali.com/?p=74975",
        },
        {
            label:
            "CNA Indonesia (9 April 2025). Darurat sampah, Bali larang jual dan edarkan air mineral kemasan di bawah 1 liter",
            url: "https://www.cna.id/indonesia/darurat-sampah-bali-larang-jual-dan-edarkan-air-mineral-kemasan-di-bawah-1-liter-31196",
        },
        {
            label:
            "Saputra, K. D. R. (2022). Penerapan Pergub Bali No. 97 Tahun 2018 di Kabupaten Buleleng. Tahkim, XVIII(2)",
            url: "https://jurnal.iainambon.ac.id/index.php/THK/article/view/4076/pdf",
        },
        ],
        related: [
        "belanja-pasar-bukan-plastik",
        "contoh-memilah-sampah-dari-sumber",
        ],
    },

    {
        ...base,
        draft: false,
        id: "a-biodiversitas-2",
        slug: "hutan-bali-barat-dan-penghuninya",
        title: "Hutan Bali Barat dan Penghuninya",
        category: "biodiversitas",
        summary:
        "Di ujung barat Bali, hutan kering, savana, mangrove, dan laut jernih bertemu dalam satu kawasan. Inilah Taman Nasional Bali Barat (TNBB), satu-satunya taman nasional di Bali.",
        image: {
        src: imgHutanBaliBarat,
        alt: "Rusa di Pulau Menjangan, Taman Nasional Bali Barat, di samping papan larangan memberi makan satwa liar",
        width: 1920,
        height: 1280,
        caption:
            "Rusa timor di Pulau Menjangan, bagian dari Taman Nasional Bali Barat",
        credit: "Foto: Kresnanta / Wikimedia Commons, CC BY-SA 4.0",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: [
        "taman nasional",
        "bali barat",
        "jalak bali",
        "menjangan",
        "biodiversitas",
        ],
        takeaways: [
        "TNBB adalah satu-satunya taman nasional di Bali, dengan ekosistem yang beragam dari mangrove hingga savana.",
        "Kawasan ini bukan hanya rumah Jalak Bali, tetapi juga habitat banteng, rusa, burung, dan biota laut.",
        "Satwa dilindungi belum tentu aman; perburuan masih pernah terjadi di dalam kawasan.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Di ujung barat Bali, hutan kering, savana, mangrove, dan laut jernih bertemu dalam satu kawasan. Inilah Taman Nasional Bali Barat (TNBB), satu-satunya taman nasional di Bali.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Apa istimewanya? TNBB melindungi keanekaragaman hayati darat dan laut. Tipe ekosistemnya beragam: mangrove, hutan pantai, hutan musim, hutan hujan dataran rendah, hutan malar hijau, dan savana.",
        },
        {
            type: "paragraph",
            text: "Bukan hutan hujan lebat semata. Pada kemarau panjang April–September, habitat sangat kering dan satwa kekurangan air minum.",
        },
        { type: "facts" },
        {
            type: "paragraph",
            text: "Luas TNBB berbeda antar sumber, sehingga artikel ini tidak menyebut satu angka luas.",
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Satu-satunya taman nasional di Provinsi Bali.",
            "Nama Menjangan berkaitan dengan rusa yang terlihat di pulau itu.",
            "Rumah Jalak Bali. Lihat artikel Jalak Bali untuk kisah pemulihannya.",
            "Rusa timor cenderung berkelompok di hutan musim, mangrove, dan savana, menurut penelitian 2007 yang dikutip Mongabay.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“TNBB hanya soal Jalak Bali.” Ikon utamanya memang Jalak Bali, tetapi kawasan ini juga habitat banteng, rusa, burung, dan biota laut.",
        },
        {
            type: "paragraph",
            text: "“Hutan Bali Barat itu hutan hujan.” Ada hutan hujan dataran rendah, tetapi juga hutan musim dan savana.",
        },
        {
            type: "paragraph",
            text: "“Satwa dilindungi sudah pasti aman.” Pada 2017, Mongabay melaporkan empat kijang induk mati ditembak pemburu di TNBB.",
        },
        ],
        keyFacts: [
        {
            text: "Tercatat setidaknya 176 jenis flora dan 160 jenis burung (data TNBB 2013 dalam jurnal Zoo Indonesia 2016).",
            source: "Zoo Indonesia",
            year: "2016",
        },
        {
            text: "Satwa yang disebut dalam laporan: banteng, rusa, lutung, kalong, aneka burung, dan Jalak Bali.",
            source: "Kompas.com Lestari",
            year: "2023",
        },
        {
            text: "Pulau Menjangan seluas 175 hektare adalah bagian TNBB dan tidak boleh dihuni manusia selain untuk sembahyang dan wisata.",
            source: "Jurnal Gorontalo; Mongabay Indonesia",
            year: "2018",
        },
        ],
        tryToday: {
        title: "Berkunjung dengan aturan, tolak satwa liar",
        description:
            "Bila berkunjung, ikuti aturan pengelola dan jalur resmi. Jangan membeli satwa liar. Pilih satu tantangan di Eco Action, misalnya 7 Hari Bebas Plastik Sekali Pakai, karena sampah juga mencapai pesisir dan laut. Kami tidak menjanjikan dampak langsung ke kawasan ini.",
        challengeId: "bebas-plastik",
        },
        sources: [
        {
            label:
            "Kompas.com Lestari. (2023, 22 Mei). Daftar taman nasional di Bali dan Nusa Tenggara",
            url: "https://lestari.kompas.com/read/2023/05/22/160000386/daftar-taman-nasional-di-bali-dan-nusa-tenggara",
        },
        {
            label:
            "Sulistyadi, E. (2016). Karakteristik komunitas mamalia besar di TNBB. Zoo Indonesia 25(2)",
            url: "https://biologyjournal.brin.go.id/index.php/zoo_indonesia/article/download/3361/2863",
        },
        {
            label: "Jurnal Gorontalo. Vegetasi Pulau Menjangan",
            url: "https://jurnal.unigo.ac.id/gjfr/article/download/993/1793/2964",
        },
        {
            label: "Jurnal Sembio, Mahadewa",
            url: "https://ojs.mahadewa.ac.id/index.php/sembio/article/download/4527/2862/16247",
        },
        {
            label:
            "Mongabay Indonesia. (2018, 19 Mei). Meriahnya Jambore Nasional Wildlife Photography dan Pekan Menjangan di TNBB",
            url: "https://www.mongabay.co.id/2018/05/19/meriahnya-jambore-nasional-wildlife-photography-dan-pekan-menjangan-di-tnbb-ini-ceritanya/",
        },
        {
            label:
            "Mongabay Indonesia. (2017, 17 Jan). Kijang mati diburu di Taman Nasional Bali Barat",
            url: "https://www.mongabay.co.id/2017/01/17/kijang-mati-diburu-di-taman-nasional-bali-barat-kok-bisa/",
        },
        ],
        related: ["contoh-jalak-bali", "contoh-mangrove-pesisir"],
    },
    // TODO cek: artikel Kompas [2] paywall, jadi isi hanya dari cuplikan. Cari studi aslinya. Angka luas terumbu Nusa Penida (149 ha vs 1.419 ha vs 1.341–1.491 ha) belum dipakai. Tahun pemantauan CTC belum terlihat. “Hutan hujan bawah laut” adalah metafora.
    {
        ...base,
        draft: false,
        id: "a-pesisir-2",
        slug: "terumbu-karang-bali-dan-ancamannya",
        title: "Terumbu Karang: Hutan Hujan di Bawah Laut dan Ancamannya",
        category: "pesisir-laut",
        summary:
        "Dari permukaan, terumbu karang tampak seperti taman batu berwarna. Padahal itu kumpulan hewan dan alga hidup yang menjadi rumah bagi banyak makhluk laut.",
        image: {
        src: imgTerumbuKarang,
        alt: "Penyelam tim Reef Health Monitoring memantau kondisi terumbu karang di perairan Nusa Penida, Bali",
        width: 2560,
        height: 1920,
        caption:
            "Pemantauan kesehatan terumbu karang di perairan Nusa Penida, Bali",
        credit: "Foto: CTC / Mongabay Indonesia",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: ["terumbu karang", "pesisir", "nusa penida", "pemutihan", "laut"],
        takeaways: [
        "Terumbu karang adalah kumpulan hewan dan alga hidup, bukan taman batu, dan menjadi rumah bagi banyak makhluk laut.",
        "Tutupan karang 60% di Nusa Penida adalah hasil 14 titik pantau, bukan gambaran seluruh Bali.",
        "Menanam karang saja tidak cukup bila penyebab kerusakannya tidak ditangani.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Dari permukaan, terumbu karang tampak seperti taman batu berwarna. Padahal itu kumpulan hewan dan alga hidup yang menjadi rumah bagi banyak makhluk laut.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Mengapa disebut “hutan hujan bawah laut”? Sebuah artikel jurnal menyebut ekosistem terumbu karang menjadi habitat lebih dari satu juta spesies.",
        },
        {
            type: "paragraph",
            text: "Apa itu pemutihan? Saat suhu air terlalu panas, karang stres dan melepaskan alga yang memberinya warna dan energi.",
        },
        { type: "facts" },
        {
            type: "list",
            items: [
            "Penyakit karang tergolong rendah, tetapi penyebabnya antara lain polusi, limbah cair, dan sampah plastik.",
            ],
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Nusa Penida: 296 jenis karang dan 576 jenis ikan (data KKP 2014 dalam laporan Mongabay).",
            "Pemutihan 2015. Fenomena pemutihan karang terjadi di Nusa Penida pada 2015.",
            "Wisata dan karang. Memberi makan ikan dengan roti dapat membuat alga menutupi karang.",
            "Pariwisata ancaman sekaligus peluang, menurut peneliti karang North Bali Reef Conservation.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“Tutupan 60% berarti semua aman.” Angka itu hasil 14 titik pantau CTC. Angka luas terumbu Nusa Penida berbeda jauh antar sumber, jadi jangan dibaca sebagai kondisi seluruh Bali.",
        },
        {
            type: "paragraph",
            text: "“Menanam karang cukup untuk memulihkan.” Pemulihan sering tidak menangani penyebab utamanya.",
        },
        {
            type: "paragraph",
            text: "“Memberi makan ikan itu tidak masalah.” Pakan di luar habitat dapat membuat alga menutupi karang.",
        },
        ],
        keyFacts: [
        {
            text: "Peta terumbu karang RTRW menunjukkan 6.543,14 hektare di 201 titik, membentang sekitar 75% garis pantai Bali.",
            source: "Jurnal Jitumas, Unmas",
            year: "",
        },
        {
            text: "CTC mencatat tutupan karang sekitar 60% di Kawasan Konservasi Perairan Nusa Penida seluas 20.057 hektare, dengan metode PIT di 14 titik. Sisa 40% belum tertutup karena karang rusak atau dasar berpasir alami.",
            source: "ANTARA Bali",
            year: "",
        },
        {
            text: "Studi baru menemukan kondisi terumbu karang Bali terus menurun meski ada pemulihan. Pemulihan sering tidak menangani penyebab utamanya.",
            source: "Kompas.com Lestari",
            year: "2026",
        },
        {
            text: "Ilmuwan melaporkan pemutihan global keempat dengan 84% terumbu dunia terpapar panas yang cukup untuk pemutihan.",
            source: "Kompas.com Lestari",
            year: "2025",
        },
        ],
        tryToday: {
        title: "Jangan beri makan ikan, kurangi plastik",
        description:
            "Jangan memberi makan ikan saat snorkeling atau menyelam. Pilih operator wisata yang patuh aturan kawasan. Kurangi plastik lewat Tantangan 7 Hari Bebas Plastik Sekali Pakai karena sampah plastik disebut berkaitan dengan penyakit karang. Kami tidak menjanjikan pemulihan karang tertentu.",
        challengeId: "bebas-plastik",
        },
        sources: [
        {
            label:
            "ANTARA Bali. CTC: data tutupan terumbu karang Nusa Penida capai 60 persen",
            url: "https://bali.antaranews.com/berita/349398/ctc-data-tutupan-terumbu-karang-nusa-penida-capai-60-persen",
        },
        {
            label:
            "Kompas.com Lestari. (2026, 29 September). Terumbu karang di Bali terus memburuk, wisata berkelanjutan kunci pemulihan",
            url: "https://lestari.kompas.com/read/2026/09/29/170000186/terumbu-karang-di-bali-terus-memburuk-wisata-berkelanjutan-kunci-pemulihan",
        },
        {
            label: "Jurnal Jitumas, Unmas. Kondisi terumbu karang Bali",
            url: "https://e-journal.unmas.ac.id/index.php/jitumas/article/download/12763/9354/33009",
        },
        {
            label:
            "Kompas.com Lestari. (2025, 27 April). Pemutihan massal ancam 84 persen terumbu karang dunia",
            url: "https://lestari.kompas.com/read/2025/04/27/160000686/pemutihan-massal-ancam-84-persen-terumbu-karang-dunia",
        },
        {
            label:
            "Green Network Asia. Menghentikan pemutihan karang demi laut yang lebih sehat",
            url: "https://greennetwork.id/unggulan/menghentikan-pemutihan-karang-demi-laut-yang-lebih-sehat",
        },
        {
            label:
            "Mongabay Indonesia. (2019, 16 Nov). Waspada, ini alarm untuk keberlanjutan wisata bawah air Nusa Penida",
            url: "https://www.mongabay.co.id/2019/11/16/waspada-ini-alarm-untuk-keberlanjutan-wisata-bawah-air-nusa-penida/",
        },
        ],
        related: ["contoh-mangrove-pesisir", "hutan-bali-barat-dan-penghuninya"],
    },
    // TODO cek: angka batu bara berbeda (64,87–69,4%), dan itu sengaja dipaparkan sebagai pelajaran literasi data. Buka rilis ESDM dan HEESI 2025 untuk satu angka resmi. Bagian 04 butir 2–3 dari artikel Energi Surya, pastikan konsisten dengan sumber di sana.
    {
        ...base,
        draft: false,
        id: "a-energi-2",
        slug: "memahami-bauran-energi-indonesia",
        title: "Dari Pembangkit ke Colokan: Memahami Bauran Energi Indonesia",
        category: "energi",
        summary:
        "Saat kamu mencolok pengisi daya, listrik itu datang dari mana? Jawabannya adalah campuran sumber yang disebut bauran energi.",
        image: {
        src: imgBauranEnergi,
        alt: "Pembangkit listrik tenaga surya terapung Tambaklorok di Semarang, dengan pembangkit konvensional di latar belakang",
        width: 960,
        height: 640,
        caption:
            "PLTS terapung Tambaklorok, Semarang, berdampingan dengan pembangkit konvensional. Foto ilustrasi, bukan dari Bali",
        credit: "Foto: Aprillio Akbar / ANTARA (via Katadata)",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: ["energi", "bauran energi", "EBT", "listrik", "batu bara"],
        takeaways: [
        "Angka bauran energi sering berbeda karena cakupannya berbeda: pembangkit listrik, energi primer, dan kapasitas tidak mengukur hal yang sama.",
        "Batu bara masih mendominasi pembangkitan listrik nasional, meski angka pastinya berbeda antar sumber.",
        "Listrik di rumah tidak otomatis “hijau” hanya karena ada target EBT.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Saat kamu mencolok pengisi daya, listrik itu datang dari mana? Jawabannya adalah campuran sumber yang disebut bauran energi. Di Indonesia, angkanya sering terdengar berbeda-beda tergantung siapa yang menghitung.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Tiga angka yang sering tertukar.",
        },
        {
            type: "list",
            items: [
            "Bauran pembangkit listrik: sumber listrik yang dihasilkan.",
            "Bauran energi primer: seluruh energi, termasuk BBM dan batu bara untuk industri.",
            "Kapasitas: daya yang bisa dihasilkan, bukan listrik yang sungguh diproduksi.",
            ],
        },
        { type: "facts" },
        {
            type: "list",
            items: [
            "Pada Mei 2025, total pembangkit 105 GW, sedangkan EBT disebut 14,5% dari kapasitas.",
            ],
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Bali dapat pasokan dari Jawa: interkoneksi berkapasitas 340 MW sejak 2014.",
            "EBT Bali sekitar 45 MW menurut laporan Juli 2026, sebagian besar PLTS dan PLTMH (lihat artikel Energi Surya).",
            "PLTS terbesar di Bali ada di Karangasem, 25 MW.",
            "Nusa Penida punya peta jalan menuju 100% energi terbarukan menurut IESR.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“15,75% EBT berarti 15,75% semua energi kita.” Tidak. Angka itu untuk bauran pembangkit listrik, sedangkan energi primer didominasi sumber lain.",
        },
        {
            type: "paragraph",
            text: "“Kapasitas sama dengan produksi.” Tidak. Pembangkit EBT bisa punya kapasitas besar tetapi menghasilkan energi sesuai kondisi operasinya.",
        },
        {
            type: "paragraph",
            text: "“Listrik di rumah kita sudah hijau.” Tidak otomatis. Batu bara masih mendominasi pembangkitan nasional.",
        },
        ],
        keyFacts: [
        {
            text: "Kementerian ESDM mencatat bauran EBT 15,75% pada akhir 2025, naik dari 14,65% pada 2024. Kapasitas EBT 15.630 MW, terbesar dari PLTA 7.587 MW dan PLTP 2.744 MW.",
            source: "Kementerian ESDM",
            year: "2026",
        },
        {
            text: "ESDM juga menyebut 16,3% khusus sektor ketenagalistrikan, melampaui target RUKN 15,9%. Selisih angka berasal dari cakupan perhitungan yang berbeda.",
            source: "Kementerian ESDM",
            year: "2026",
        },
        {
            text: "Ember mencatat 366 TWh, setara 69,4% produksi listrik 2025. Laporan ESDM Juni 2026 menyebut 64,87% bauran listrik nasional. Di bauran energi primer, batu bara 41,04% pada 2025.",
            source: "Ember; Kementerian ESDM",
            year: "2026",
        },
        {
            text: "Target lama 23% EBT pada 2025 diubah melalui PP 40/2025.",
            source: "Fortune Indonesia",
            year: "",
        },
        ],
        tryToday: {
        title: "Tantangan 7 Hari Hemat Energi",
        description:
            "Cabut perangkat yang tidak dipakai (kecuali perangkat kesehatan atau keselamatan), dan pilih peralatan hemat energi bila membeli baru. Kami tidak menjanjikan penghematan rupiah atau emisi.",
        challengeId: "hemat-energi",
        },
        sources: [
        {
            label:
            "Kementerian ESDM. (2026, Januari). Bauran EBT di sektor listrik lampaui target RUKN",
            url: "https://www.esdm.go.id/id/media-center/arsip-berita/bauran-ebt-di-sektor-listrik-lampaui-target-rukn",
        },
        {
            label:
            "Katadata. (2026, 8 Januari). Bauran EBT capai 15,75% pada akhir 2025",
            url: "https://katadata.co.id/amp/berita/energi/695f76f7412bc/bauran-ebt-capai-15-75-pada-akhir-2025-plta-masih-yang-terbesar/",
        },
        {
            label:
            "Kementerian ESDM. Bauran EBT di sektor listrik lampaui target RUKN (versi Inggris)",
            url: "https://www.esdm.go.id/en/media-center/news-archives/bauran-ebt-di-sektor-listrik-lampaui-target-rukn",
        },
        {
            label:
            "KabarBursa. (2026). Dua tahun Prabowo-Gibran: transisi energi masih terjerat batu bara (mengutip Ember dan HEESI 2025)",
            url: "https://www.kabarbursa.com/ekonomi-hijau/edisi-khusus-dua-tahun-prabowo-gibran-transisi-energi-masih-terjerat-batu-bara",
        },
        {
            label:
            "KabarBursa. (2026, 5 Juni). ESDM akui transisi energi masih lambat",
            url: "https://www.kabarbursa.com/ekonomi-hijau/esdm-akui-transisi-energi-masih-lambat-batu-bara-kuasai-65-persen-bauran-listrik",
        },
        {
            label:
            "Bisnis.com. (2025, 18 Agustus). Kontras angan dan rencana energi Prabowo",
            url: "https://ekonomi.bisnis.com/read/20250818/44/1903452/kontras-angan-rencana-energi-prabowo-target-listrik-ebt-100-muskil-terwujud",
        },
        {
            label:
            "Fortune Indonesia. Pembangkit listrik di Indonesia masih akan didominasi batu bara hingga 2035",
            url: "https://www.fortuneidn.com/news/pembangkit-listrik-di-indonesia-masih-akan-didominasi-batu-bara-hingga-2035-00-my5jv-7gs1p0/amp",
        },
        {
            label:
            "IESR. (2025, Juli). Peta Jalan Ketenagalistrikan Bali 100% ET 2045",
            url: "https://iesr.or.id/wp-content/uploads/2025/07/Presentasi-Peluncuran-Peta-Jalan-Ketenagalistrikan-Bali-100-ET-2045-Alvin-Putra-S-IESR.pdf",
        },
        ],
        related: ["contoh-energi-surya", "contoh-iklim-dan-subak"],
    },
    {
        ...base,
        draft: false,
        id: "a-gaya-hidup-2",
        slug: "belanja-pasar-bukan-plastik",
        title: "Belanja Pasar, Bukan Plastik: Kebiasaan Kecil di Dapur",
        category: "gaya-hidup",
        summary:
        "Satu kali belanja di pasar bisa menghabiskan sekitar sepuluh kantong kresek, kata seorang pembeli yang diwawancarai Mongabay. Padahal pasar tradisional dulu terbiasa memakai pembungkus alami.",
        image: {
        src: imgBelanjaPasar,
        alt: "Suasana Pasar Sindhu di Sanur, Bali, dengan spanduk ajakan membawa tas belanja sendiri",
        width: 1280,
        height: 960,
        caption:
            "Spanduk ajakan membawa tas belanja sendiri di Pasar Sindhu, Sanur",
        credit: "Foto: Luh De Suriyani / Mongabay Indonesia",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: ["plastik", "pasar", "belanja", "gaya hidup", "kresek"],
        takeaways: [
        "Pasar tradisional sulit berubah karena diisi ratusan pedagang dengan pemilik masing-masing, bukan satu pengelola.",
        "Pedagang sering menyatakan mau beralih jika pembeli mau, tetapi tidak semua barang cocok dengan kantong kertas.",
        "Membawa tas saja belum cukup; daging dan ikan masih sering butuh wadah tambahan.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Satu kali belanja di pasar bisa menghabiskan sekitar sepuluh kantong kresek, kata seorang pembeli yang diwawancarai Mongabay. Padahal pasar tradisional dulu terbiasa memakai pembungkus alami.",
        },
        { type: "heading", text: "Memahami Permasalahan" },
        {
            type: "paragraph",
            text: "Mengapa pasar tradisional sulit? Pasar diisi ratusan pedagang dengan pemilik masing-masing, sehingga perubahan tidak bisa diputuskan satu pihak. Dulu dagangan dikemas dengan daun atau koran bekas, kini bergeser ke plastik.",
        },
        { type: "facts" },
        {
            type: "list",
            items: [
            "Wadah guna ulang yang dicoba: tas belacu, keranjang, karung goni, dan kotak plastik untuk bahan basah.",
            "Pedagang mau mengganti kantong kertas bila pembeli mau, tetapi tidak semua barang cocok. Penjual ikan berkuah panas kesulitan.",
            ],
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Daun pisang disebut sebagai alternatif pembungkus oleh Pedoman DLHK Bali.",
            "Canang tanpa kresek. Dalam talkshow pasar bebas plastik, ada ajakan tidak membawa sarana persembahyangan dengan kresek.",
            "Pasar Adat Guwang menawarkan tas spunbond harga dasar lewat pengelola.",
            "Estimasi 416 juta lembar kantong plastik per tahun dari pasar rakyat menurut GIDKP. Ini estimasi pegiat, bukan data resmi.",
            ],
        },
        { type: "heading", text: "Meluruskan Miskonsepsi" },
        {
            type: "paragraph",
            text: "“Pedagang pasti menolak berubah.” Pedagang menyatakan mau jika pembeli mau.",
        },
        {
            type: "paragraph",
            text: "“Kantong kertas solusi semua.” Tidak semua barang cocok, dan kertas tanpa lapisan plastik sulit dicari di Bali.",
        },
        {
            type: "paragraph",
            text: "“Cukup bawa satu tas.” Daging dan ikan masih sering butuh wadah tambahan. Membawa wadah sendiri dapat membantu bila penjual bersedia.",
        },
        ],
        keyFacts: [
        {
            text: "Pasar Sindu Sanur (Januari 2022): survei dasar pada 104 pedagang menemukan lebih dari 2.960 kantong plastik dibagikan per hari. Percobaan pasar bebas plastik dilakukan PPLH Bali dan GIDKP.",
            source: "Mongabay Indonesia",
            year: "2022",
        },
        {
            text: "Seorang pedagang Pasar Sindu (November 2022) memperkirakan sekitar 70% pelanggannya sudah membawa tas sendiri.",
            source: "Tirto",
            year: "2022",
        },
        {
            text: "Perwali Denpasar No. 36/2018 mengatur pengurangan kantong plastik, dan DLHK Denpasar membagikan 400 tas belanja daur ulang di Pasar Kreneng.",
            source: "Mongabay Indonesia",
            year: "2019",
        },
        ],
        tryToday: {
        title: "Tantangan 7 Hari Bebas Plastik Sekali Pakai",
        description:
            "Bawa tas besar dan satu wadah. Tolak kresek kecil untuk sayur. Bawa wadah untuk daging atau ikan bila penjual bersedia, dan bawa canang tanpa kantong plastik. Tidak ada janji jumlah plastik yang berkurang.",
        challengeId: "bebas-plastik",
        },
        sources: [
        {
            label:
            "Mongabay Indonesia. (2019, 11 Jan). Operasi kantong plastik di pasar. Memangnya efektif?",
            url: "https://www.mongabay.co.id/2019/01/11/operasi-kantong-plastik-di-pasar-memangya-efektif/",
        },
        {
            label:
            "Mongabay Indonesia. (2022, 17 Jan). Mengurai benang kusut pasar bebas plastik",
            url: "https://www.mongabay.co.id/2022/01/17/mengurai-benang-kusut-pasar-bebas-plastik/",
        },
        {
            label:
            "Mongabay Indonesia. (2022, 24 Nov). Tantangan merintis pasar minim plastik sekali pakai",
            url: "https://www.mongabay.co.id/2022/11/24/tantangan-merintis-pasar-minim-plastik-sekali-pakai/",
        },
        {
            label:
            "Mongabay Indonesia. (2019, 11 Jan). Operasi kantong plastik di pasar. Memangnya efektif? (kutipan pembeli dan tas DLHK; sama dengan sumber 1)",
            url: "https://www.mongabay.co.id/2019/01/11/operasi-kantong-plastik-di-pasar-memangya-efektif/",
        },
        {
            label:
            "Tirto. (2022, 10 November). Geliat pasar bebas kantong plastik sekali pakai di Pulau Dewata",
            url: "https://tirto.id/geliat-pasar-bebas-kantong-plastik-sekali-pakai-di-pulau-dewata-gyvN",
        },
        {
            label:
            "DLHK Provinsi Bali. (2022). Pedoman Pembatasan Timbulan Sampah Plastik Sekali Pakai",
            url: "https://dklh.baliprov.go.id/wp-content/uploads/2022/04/PEDOMAN-PEMBATASAN-TIMBULAN-SAMPAH-PLASTIK-SEKALI-PAKAI-1_compressed.pdf",
        },
        ],
        related: ["contoh-tanpa-plastik", "contoh-memilah-sampah-dari-sumber"],
    },
    {
        ...base,
        id: "a-sampah-2",
        slug: "dari-rumah-ke-tpa-suwung",
        title: "Dari Rumah ke TPA: Ke Mana Perginya Sampahmu di Bali?",
        category: "sampah",
        summary:
        "Sampah dari rumah banyak berakhir di TPA Suwung. Status TPA ini sering berubah, jadi penting memahami istilah dan tanggalnya.",
        image: {
        src: imgTpaSuwung,
        alt: "Antrean truk pengangkut sampah di TPA Suwung, Denpasar",
        width: 1200,
        height: 800,
        caption: "Antrean truk pengangkut sampah di TPA Suwung, Denpasar",
        credit: "Foto: Ni Ketut Sudiani / KOMPAS.com",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: [
        "tpa suwung",
        "sampah",
        "open dumping",
        "pilah sampah",
        "psel",
        "denpasar",
        ],
        takeaways: [
        "Sejak April 2026, TPA Suwung hanya menerima residu, bukan sampah organik.",
        "\u201cDitutup\u201d, \u201cpembatasan\u201d, dan \u201cpenghentian open dumping\u201d adalah tiga hal yang berbeda.",
        "Fasilitas pengganti masih dibangun, jadi pemilahan dari rumah tetap penting.",
        ],
        content: [
        {
            type: "paragraph",
            text: "Pernahkah kamu berpikir ke mana perginya sampah setelah meninggalkan tempat sampah di rumah? Pagi ini kulit buah, bungkus snack, dan sisa nasi mungkin sudah masuk satu kantong yang sama. Kantong itu diangkut, dan banyak yang akhirnya sampai di satu tempat: TPA Regional Sarbagita Suwung di Denpasar Selatan.",
        },
        { type: "heading", text: "Perjalanan sampah rumah tangga" },
        {
            type: "paragraph",
            text: "Sampah dari rumah dikumpulkan petugas, lalu dibawa ke fasilitas pengolahan atau ke TPA. Di TPA, sampah selama ini banyak ditimbun dalam satu tumpukan. Cara ini disebut open dumping, yaitu pembuangan terbuka tanpa penataan memadai.",
        },
        {
            type: "paragraph",
            text: "Sampah yang tercampur menyulitkan pengolahan, sehingga pemerintah kini menekankan pemilahan dari rumah. Jika berhasil penuh, menurut Menteri LH hanya sekitar 23\u201324% sampah yang akan sampai ke TPA, itu pun berupa residu.",
        },
        { type: "facts" },
        { type: "heading", text: "Kronologi yang sering berubah" },
        {
            type: "list",
            items: [
            "25 Maret 2026: Gubernur Bali mengumumkan rencana penutupan total TPA Suwung pada 1 Agustus 2026.",
            "1 April 2026: sampah organik tidak lagi boleh masuk TPA Suwung, hanya residu yang diterima.",
            "9 Juni 2026: Menteri LH menyatakan kebijakan pusat adalah menghentikan open dumping, bukan menutup TPA.",
            "10 Juni 2026: KLH/BPLH mewajibkan pemilahan sampah 100% mulai 1 Juli 2026, dan menargetkan penghentian total open dumping secara nasional pada 1 Agustus 2026.",
            "Sejak 1 Agustus 2026: KLH resmi melarang open dumping di seluruh TPA di Indonesia, termasuk TPA Suwung (Kompas.com).",
            "22 Oktober 2026: Wakil Menteri LH menemukan kebocoran air lindi dan menyebut TPA berpotensi melebihi kapasitas dalam dua hingga tiga bulan.",
            ],
        },
        {
            type: "paragraph",
            text: "Angka capaian pemilahan berbeda antar sumber: 87% dalam siaran pers KLH/BPLH, 76% dalam kutipan Menteri LH di ANTARA Bali, dan 71% dalam pernyataan Menteri LH lainnya. Metode pengukurannya tidak dijelaskan, jadi angka ini sebaiknya dibaca sebagai klaim pejabat, bukan hasil pengukuran independen.",
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "Luas TPA Suwung sekitar 32,4 hektare menurut pemberitaan Juli 2025.",
            "UU No. 18 Tahun 2008 meminta penutupan TPA open dumping paling lama lima tahun sejak diundangkan. Katadata menyebut pelaksanaannya terlambat 13 tahun.",
            "Sekitar 60% sampah Bali berupa organik menurut data KLH yang dikutip Kompas (Maret 2026). Karena itu organik jadi fokus pembatasan.",
            "Menteri LH menyebut desa adat, awig-awig, dan pararem sebagai fondasi pengelolaan sampah di Bali.",
            ],
        },
        { type: "heading", text: "Meluruskan miskonsepsi" },
        {
            type: "paragraph",
            text: "\u201cTPA Suwung sudah ditutup.\u201d Belum tentu tepat. Ada tiga istilah berbeda: pembatasan jenis sampah (organik tidak boleh masuk), penghentian open dumping (cara menimbun diubah), dan penutupan total (tidak menerima sampah apa pun). Menteri LH menyatakan TPA tetap dibuka, tetapi untuk sampah yang sudah dipilah dan diproses.",
        },
        {
            type: "paragraph",
            text: "\u201cMenghentikan open dumping menyelesaikan semua masalah.\u201d Fasilitas pengganti masih dibangun. PSEL (pengolahan sampah menjadi energi listrik) disebut beroperasi akhir 2027 menurut Gubernur, dan September tahun depan menurut Menteri LH. Karena itu pemilahan dari rumah tetap penting.",
        },
        ],
        keyFacts: [
        {
            text: "Sejak 1 April 2026, sampah organik tidak lagi boleh masuk TPA Suwung. Yang diterima hanya residu.",
            source: "KLH/BPLH",
            year: "2026",
        },
        {
            text: "Pemilahan sampah 100% wajib di Bali mulai 1 Juli 2026.",
            source: "KLH/BPLH, Siaran Pers SR.122",
            year: "2026",
        },
        {
            text: "Pada peninjauan 22 Oktober 2026, ditemukan kebocoran air lindi, dan TPA Suwung berpotensi melebihi kapasitas dalam dua hingga tiga bulan.",
            source: "Kontan, mengutip KLH/BPLH",
            year: "2026",
        },
        ],
        tryToday: {
        title: "Pisahkan sisa makanan hari ini",
        description:
            "Pisahkan sisa makanan dan daun dari sampah lain. Kumpulkan anorganik yang bersih dan kering untuk bank sampah atau pengepul bila ada. Tanyakan jadwal dan aturan pengangkutan di banjar atau kelurahan, lalu rencanakan belanja agar sisa makanan berkurang.",
        challengeId: "pilah-sampah",
        },
        sources: [
        {
            label:
            "KLH/BPLH (7 April 2026). Pasca pembatasan pembuangan sampah, KLH/BPLH inspeksi langsung TPA Suwung di Bali",
            url: "https://kemenlh.go.id/news/detail/pasca-pembatasan-pembuangan-sampah-klhbplh-inspeksi-langsung-tpa-suwung-di-bali",
        },
        {
            label:
            "Metrotvnews.com (31 Juli 2025). TPA Suwung Bali ditutup permanen mulai besok",
            url: "https://www.metrotvnews.com/read/bJEC4A2D-tpa-suwung-bali-ditutup-permanen-mulai-besok",
        },
        {
            label:
            "Merdeka (9 Juni 2026). Menteri Jumhur soal tutup TPA: yang dihentikan kegiatan open dumping",
            url: "https://www.merdeka.com/peristiwa/menteri-jumhur-soal-tutup-tpa-yang-dihentikan-kegiatan-open-dumping-581592-mvk.html",
        },
        {
            label:
            "NusaBali (Maret 2026). TPA Suwung ditutup total Agustus, PSEL groundbreaking Juni 2026",
            url: "https://www.nusabali.com/berita/216533/tpa-suwung-ditutup-total-agustus-psel-groundbreaking-juni-2026",
        },
        {
            label:
            "Kompas.com Denpasar (7 Maret 2026). Berubah lagi, TPA Suwung bakal ditutup total 1 Agustus 2026",
            url: "https://denpasar.kompas.com/read/2026/03/07/073208378/berubah-lagi-tpa-suwung-bakal-ditutup-total-1-agustus-2026",
        },
        {
            label:
            "ANTARA. Menteri LH: hentikan open dumping, bukan operasional TPA",
            url: "https://megapolitan.antaranews.com/berita/534035/menteri-lh-hentikan-open-dumping-bukan-operasional-tpa",
        },
        {
            label:
            "KLH/BPLH (10 Juni 2026). Tegas! KLH/BPLH dan Pemprov Bali wajibkan warga pilah sampah 100 persen mulai 1 Juli (SR.122/HUMAS/KLH-BPLH/6/2026)",
            url: "https://kemenlh.go.id/news/detail/tegas-klhbplh-dan-pemprov-bali-wajibkan-warga-pilah-sampah-100-persen-mulai-1-juli",
        },
        {
            label:
            "Kompas.com Lestari (8 September 2026). Banyak TPA masih terbakar selama El Ni\u00f1o dan musim kemarau meski praktik open dumping dilarang",
            url: "https://lestari.kompas.com/read/2026/09/08/103000586/banyak-tpa-masih-terbakar-selama-el-ni-o-dan-musim-kemarau-meski-praktik",
        },
        {
            label:
            "Kontan (24 Oktober 2026). TPA Suwung terancam penuh dalam 3 bulan, KLH desak pengolahan air lindi dipercepat",
            url: "https://nasional.kontan.co.id/news/tpa-suwung-terancam-penuh-dalam-3-bulan-klh-desak-pengolahan-air-lindi-dipercepat",
        },
        {
            label:
            "ANTARA Bali (10 Juni 2026). Menteri LH cek PSEL, siap beroperasi September 2026",
            url: "https://bali.antaranews.com/berita/407359/menteri-lh-cek-psel-siap-beroperasi-september-2026",
        },
        {
            label:
            "Katadata (21 April 2026). Penutupan open dumping, sampah luber di Bali, alarm peringatan untuk daerah lain",
            url: "https://katadata.co.id/ekonomi-hijau/ekonomi-sirkular/69e71b351fc22/penutupan-open-dumping-sampah-luber-di-bali-alarm-peringatan-untuk-daerah-lain",
        },
        ],
        related: ["contoh-memilah-sampah-dari-sumber", "contoh-mangrove-pesisir"],
    },
    {
        ...base,
        id: "a-iklim-2",
        slug: "naik-satu-derajat-pulau-kecil-bali",
        title: "Naik Satu Derajat: Apa Artinya bagi Pulau Kecil seperti Bali?",
        category: "iklim",
        summary:
        "Orang sering bilang \u201cbumi naik satu derajat\u201d. Tapi satu derajat dari apa, dan apa kaitannya dengan pulau sekecil Bali?",
        image: {
        src: imgNaikSatuDerajat,
        alt: "Jalan Tol Bali Mandara yang membelah perairan pesisir selatan Bali",
        width: 1536,
        height: 1024,
        caption:
            "Jalan Tol Bali Mandara di atas perairan pesisir selatan Bali, kawasan yang rentan abrasi dan rob",
        credit: "Foto: BaliTimur / Flickr, CC BY-SA 2.0 (via Mongabay Indonesia)",
        },
        date: "2026-11-17",
        readingTime: 4,
        tags: [
        "iklim",
        "suhu",
        "muka laut",
        "rob",
        "abrasi",
        "pulau kecil",
        "bmkg",
        ],
        takeaways: [
        "Angka suhu Indonesia dari BMKG dan angka global 1,5 \u00b0C memakai pembanding berbeda, jadi tidak bisa dibandingkan langsung.",
        "Pulau kecil seperti Bali rentan terhadap kenaikan muka laut, kekeringan, dan pemutihan karang.",
        "Abrasi dan rob di Bali tidak semata karena iklim. Pembangunan pesisir juga berperan.",
        ],
        content: [
        {
            type: "paragraph",
            text: "BBMKG beberapa kali mengeluarkan peringatan dini air laut pasang untuk pesisir selatan Bali sepanjang 2026. Di percakapan sehari-hari, orang sering menyebut penyebabnya \u201cbumi naik satu derajat\u201d. Tapi satu derajat dari apa, dan apa kaitannya dengan pulau sekecil Bali?",
        },
        { type: "heading", text: "Satu derajat dari apa?" },
        {
            type: "paragraph",
            text: "Ada dua pembanding yang berbeda. BMKG menghitung suhu Indonesia terhadap rata-rata normal 1991\u20132020, sedangkan angka global seperti \u201c1,5 \u00b0C\u201d memakai pembanding masa pra-industri (1850\u20131900). Dua angka itu tidak boleh dibandingkan langsung.",
        },
        { type: "heading", text: "Mengapa pulau kecil rentan" },
        {
            type: "paragraph",
            text: "IPCC (AR6) menyimpulkan bahwa pulau-pulau kecil makin terdampak kenaikan suhu, siklon, badai, kekeringan, perubahan pola hujan, kenaikan muka laut, dan pemutihan karang. Dampaknya sudah terdeteksi, dengan tingkat keyakinan sangat tinggi. Pulau kecil juga diperkirakan makin tertekan pasokan air tawarnya karena kekeringan.",
        },
        { type: "facts" },
        {
            type: "list",
            items: [
            "Indonesia 2024 adalah tahun terpanas sejak 1981, dengan rata-rata 27,5 \u00b0C dan anomali 0,8 \u00b0C.",
            "Secara global, 2024 tercatat sekitar 1,55 \u00b0C di atas masa pra-industri, dan 2015\u20132025 adalah sebelas tahun terhangat dalam catatan.",
            ],
        },
        {
            type: "paragraph",
            text: "Angka kenaikan muka laut berbeda antar kajian karena wilayah dan metodenya berbeda, jadi selalu baca angka itu bersama sumbernya.",
        },
        { type: "heading", text: "Perspektif Bali" },
        {
            type: "list",
            items: [
            "BBMKG mengeluarkan peringatan dini pasang maksimum untuk pesisir selatan Jembrana, Tabanan, Badung, Denpasar, Gianyar, hingga Klungkung pada 26\u201330 September 2026.",
            "Sebuah studi 2022 yang dikutip Mongabay menyebut 22% wilayah pesisir Bali tergolong sangat rentan terhadap dampak perubahan iklim.",
            "Studi yang dilaporkan Mongabay (2024) menemukan erosi pantai berpasir paling banyak terjadi di pesisir selatan Bali.",
            "Studi yang sama menyebut pembangunan seperti perluasan bandara, jalan tol, dan hotel tepi laut juga menekan pesisir.",
            ],
        },
        { type: "heading", text: "Meluruskan miskonsepsi" },
        {
            type: "paragraph",
            text: "\u201cNaik satu derajat itu kecil.\u201d Angka kecil di termometer bisa berarti besar bagi sistem alam. IPCC mencatat dampak pada pulau kecil sudah terdeteksi pada tingkat pemanasan saat ini.",
        },
        {
            type: "paragraph",
            text: "\u201cBanjir rob pasti bukti perubahan iklim.\u201d BBMKG menjelaskan rob Mei 2026 dipicu fenomena Bulan Purnama. Kenaikan muka laut dapat memperburuk banjir pesisir, tetapi satu kejadian tidak bisa langsung dikaitkan tanpa studi atribusi.",
        },
        {
            type: "paragraph",
            text: "\u201cAbrasi di Bali semata karena iklim.\u201d Tidak. Pembangunan pesisir juga disebut berperan.",
        },
        ],
        keyFacts: [
        {
            text: "Suhu rata-rata Indonesia 2025 adalah 27,05 \u00b0C, dengan anomali +0,38 \u00b0C terhadap normal 1991\u20132020. Ini tahun terpanas ke-6 sejak 1981.",
            source: "BMKG",
            year: "2026",
        },
        {
            text: "Suhu global 2025 sekitar 1,43 \u00b1 0,13 \u00b0C di atas rata-rata 1850\u20131900.",
            source: "WMO, State of the Global Climate 2025",
            year: "2026",
        },
        {
            text: "Pada 2014\u20132023, muka laut di perairan Indonesia naik hingga rata-rata 10 mm per tahun, dibanding rata-rata global sekitar 4,7 mm per tahun.",
            source: "Kepala BMKG, dikutip ANTARA Bali",
            year: "",
        },
        ],
        tryToday: {
        title: "Pilih satu kebiasaan rendah emisi",
        description:
            "Aksi pribadi tidak menurunkan suhu secara langsung, tetapi menumbuhkan kebiasaan. Untuk jarak dekat, jalan kaki atau berbagi kendaraan bila rutenya aman. Matikan perangkat yang tidak dipakai (kecuali perangkat kesehatan atau keselamatan), dan pantau info cuaca maritim BBMKG lewat aplikasi Info BMKG.",
        challengeId: "mobilitas-hijau",
        },
        sources: [
        {
            label: "BMKG (2026). Anomali suhu udara rata-rata tahun 2025",
            url: "https://www.bmkg.go.id/iklim/anomali-suhu-udara-rata-rata-tahun-2025",
        },
        {
            label: "BMKG (2025). Catatan Iklim dan Kualitas Udara 2024",
            url: "https://iklim.bmkg.go.id/bmkgadmin/storage/buletin/Catatan%20Iklim%20dan%20Kualitas%20Udara%202024%20BMKG.pdf",
        },
        {
            label:
            "WMO (23 Maret 2026). Earth\u2019s climate swings increasingly out of balance (State of the Global Climate 2025)",
            url: "https://wmo.int/node/38416",
        },
        {
            label: "IPCC (2022). AR6 WGII, Chapter 15: Small Islands",
            url: "https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-15/",
        },
        {
            label: "IPCC (2022). AR6 WGII Fact sheet: Small Islands",
            url: "https://library.sprep.org/sites/default/files/2022-03/IPCC-AR6-WGII-FactSheet-SmallIslands.pdf",
        },
        {
            label:
            "ANTARA Bali. BMKG tekankan kerja sama Selatan-Selatan atasi naiknya air laut",
            url: "https://bali.antaranews.com/berita/355243/bmkg-tekankan-kerjasama-selatan-selatan-atasi-naiknya-air-laut",
        },
        {
            label:
            "Mongabay Indonesia (6 Juli 2024). Riset: karena abrasi, garis pantai Bali jadi yang tercepat hilang di dunia",
            url: "https://www.mongabay.co.id/2024/07/06/riset-karena-abrasi-garis-pantai-bali-jadi-yang-tercepat-hilang-di-dunia/",
        },
        {
            label:
            "Metrotvnews (31 Mei 2026). Fenomena Bulan Purnama, BMKG imbau warga pesisir Bali siaga banjir rob",
            url: "https://www.metrotvnews.com/read/bzGCeA7Z-fenomena-bulan-purnama-bmkg-imbau-warga-pesisir-bali-siaga-banjir-rob",
        },
        {
            label:
            "ANTARA Bali (September 2026). BBMKG terbitkan peringatan dini air laut pasang pada 26\u201330 September di Bali",
            url: "https://bali.antaranews.com/berita/413997/bbmkg-terbitkan-peringatan-dini-air-laut-pasang-pada-26-30-september-di-bali",
        },
        ],
        related: ["contoh-iklim-dan-subak", "terumbu-karang-bali-dan-ancamannya"],
    },
];

export const getArticleBySlug = (slug) => articles.find((article) => article.slug === slug);
