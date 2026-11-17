import imgTpaSuwung from "../assets/images/TpaSuwung.webp";
import imgPantaiKuta from "../assets/images/imgWisataPantaiKuta.webp";
import imgMangroveNGurahRai from "../assets/images/imgMangroveNgurahRai.webp";
import imgTerumbuKarang from "../assets/images/imgTerumbuKarang.webp";
import imgSubakJatiluwih from "../assets/images/imgSubakJatiluwih.webp";
import imgTamanNasional from "../assets/images/imgTamanNasional.webp";

const base = {
    image: null,
    articleSlug: null,
    area: null,
    volatile: false,
    statusAsOf: null,
};

export const hotspots = [
    {
        ...base,
        id: "tpa-suwung",
        name: "TPA Suwung",
        regency: "Denpasar",
        category: "sampah",
        area: "selatan",
        coordinates: { lat: -8.72, lng: 115.214 },
        volatile: true,
        image: {
            src: imgTpaSuwung,
            alt: "TPA Suwung di Denpasar",
            caption: "Foto dokumentasi dari pemberitaan ANTARA Bali, bukan kondisi terkini.",
            credit: "Foto: ANTARA Bali",
            creditUrl:
                "https://bali.antaranews.com/berita/297917/pemkot-denpasar-tpa-suwung-tutup-dalam-rangka-g20",
        },
        summary:
            "Tempat pemrosesan akhir sampah di Denpasar Selatan, berdekatan dengan hutan mangrove di tepi Teluk Benoa.",
        facts: [
            {
                text: "Per 14 Januari 2026, Gubernur Bali meminta Kementerian Lingkungan Hidup menunda penutupan TPA Suwung hingga November 2026.",
                source: "Kompas.com",
                year: "14 Januari 2026",
            },
            {
                text: "Per 1 Maret 2026, Balipost melaporkan operasional TPA Suwung ditutup, ditandai antrean truk sampah di jalan menuju Pulau Serangan.",
                source: "Balipost",
                year: "1 Maret 2026",
            },
            {
                text: "Per Maret 2026, Pemerintah Provinsi Bali menyampaikan rencana penutupan total TPA Suwung pada Agustus 2026, dengan groundbreaking PSEL ditargetkan Juni 2026.",
                source: "NusaBali",
                year: "Maret 2026",
            },
            {
                text: "Status setelah Agustus 2026 belum dapat dipastikan dari sumber resmi saat halaman ini disusun. Periksa pengumuman terbaru Pemprov Bali dan KLH.",
                source: "Catatan tim Palemahan",
                year: "7 November 2026",
            },
        ],
    },
    {
        ...base,
        id: "pantai-kuta",
        name: "Pantai Kuta",
        regency: "Badung",
        category: "pesisir-laut",
        area: "selatan",
        coordinates: { lat: -8.7184, lng: 115.1686 },
        image: {
            src: imgPantaiKuta,
            alt: "Pantai Kuta di Badung, Bali",
            credit: "Foto: cinchy.life",
            creditUrl: "https://cinchy.life/id/blog/wisata-pantai-kuta-bali",
        },
        summary:
            "Pantai di pesisir barat Bali selatan yang kerap menerima sampah kiriman pada musim tertentu.",
        facts: [
            {
                text: "DLHK Badung melaporkan mengangkut rata-rata sekitar 40 ton sampah kiriman per hari dari pantai-pantai di Badung, termasuk Kuta, Seminyak, dan Jimbaran.",
                source: "ANTARA Bali",
                year: "21 Desember 2025",
            },
            {
                text: "DLHK Badung memperkirakan sampah kiriman datang sejak November hingga April 2026, dan mulai berkurang sejak Maret.",
                source: "ANTARA Bali",
                year: "21 Desember 2025",
            },
        ],
    },
    {
        ...base,
        id: "mangrove-ngurah-rai",
        name: "Mangrove Ngurah Rai",
        regency: "Denpasar dan Badung",
        category: "pesisir-laut",
        area: "selatan",
        coordinates: { lat: -8.765, lng: 115.2 },
        image: {
            src: imgMangroveNGurahRai,
            alt: "Hutan mangrove Tahura Ngurah Rai di Bali selatan",
            credit: "Foto: Tribrata News (Polri)",
            creditUrl:
                "https://tribratanews.polri.go.id/article/tahura-mangrove-ngurah-rai-keberhasilan-restorasi-berkelanjutan-indonesia-74165",
        },
        articleSlug: "contoh-mangrove-pesisir",
        summary:
            "Satu-satunya taman hutan raya di Bali: hutan bakau di antara Denpasar dan Badung yang menjadi benteng alami pesisir selatan.",
        facts: [
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
                text: "Kelompok nelayan di Pemogan, Denpasar, memungut rata-rata hingga 3 ton sampah plastik per minggu di hutan ini.",
                source: "ANTARA Bali",
                year: "2023",
            },
        ],
    },
    {
        ...base,
        id: "terumbu-nusa-penida",
        name: "Terumbu Karang Nusa Penida",
        regency: "Klungkung",
        category: "pesisir-laut",
        coordinates: { lat: -8.73, lng: 115.53 },
        image: {
            src: imgTerumbuKarang,
            alt: "Terumbu karang di perairan Bali",
            // Sumber fotonya artikel transplantasi karang di Nusa Dua Coral Garden, bukan Nusa Penida. Jangan dihapus bila fotonya tidak diganti.
            caption:
                "Transplantasi karang di Nusa Dua, Badung. Foto ilustrasi, bukan dari Nusa Penida.",
            credit: "Foto: Mongabay Indonesia",
            creditUrl:
                "https://mongabay.co.id/2020/04/11/indahnya-transplantasi-karang-di-nusa-dua-coral-garden/",
        },
        summary:
            "Perairan di sekitar Nusa Penida, Nusa Lembongan, dan Nusa Ceningan: kawasan konservasi dengan terumbu karang dan kehidupan laut yang kaya.",
        facts: [
            {
                text: "Kawasan Konservasi Perairan Nusa Penida ditetapkan pada 2014 seluas 20.057 hektare.",
                source: "Kontan",
                year: "2014",
            },
            {
                text: "Perairan Nusa Penida tercatat memiliki sekitar 296 jenis karang dan 576 jenis ikan.",
                source: "Mongabay Indonesia",
                year: "2019",
            },
            {
                text: "Pemantauan kesehatan terumbu menyimpulkan karang Nusa Penida relatif baik, sementara dokumentasi 2017 mencatat kerusakan parah akibat aktivitas kapal wisata.",
                source: "Mongabay Indonesia",
                year: "2019",
            },
        ],
    },
    {
        ...base,
        id: "subak-jatiluwih",
        name: "Subak Jatiluwih",
        regency: "Tabanan",
        category: "iklim",
        coordinates: { lat: -8.3708, lng: 115.1319 },
        image: {
            src: imgSubakJatiluwih,
            alt: "Sawah berundak Subak Jatiluwih di Tabanan",
            credit: "Foto: Superlive",
            creditUrl:
                "https://superlive.id/superadventure/artikel/wilderness/melihat-dari-dekat-pesona-subak-jatiluwih",
        },
        summary:
            "Hamparan sawah berundak di Tabanan yang menjadi bagian dari sistem subak, warisan budaya dunia.",
        facts: [
            {
                text: "UNESCO menetapkan sistem subak Bali sebagai Warisan Budaya Dunia pada 29 Juni 2012.",
                source: "Mongabay Indonesia",
                year: "2020",
            },
            {
                text: "Kunjungan wisatawan ke Jatiluwih tercatat sekitar 165 ribu pada 2014 dan lebih dari 200 ribu per tahun dalam tiga tahun terakhir sebelum 2019.",
                source: "Mongabay Indonesia",
                year: "2019",
            },
        ],
    },
    {
        ...base,
        id: "taman-nasional-bali-barat",
        name: "Taman Nasional Bali Barat",
        regency: "Jembrana dan Buleleng",
        category: "biodiversitas",
        coordinates: { lat: -8.17, lng: 114.52 },
        image: {
            src: imgTamanNasional,
            alt: "Kawasan Taman Nasional Bali Barat",
            credit: "Foto: Bali Wisataku (blog)",
            creditUrl:
                "https://baliwisataku.blogspot.com/2011/08/taman-nasional-bali-baratwest-bali.html",
        },
        summary:
            "Satu-satunya taman nasional di Pulau Bali, tempat Jalak Bali, burung endemik Bali, dilepasliarkan.",
        facts: [
            {
                text: "Taman Nasional Bali Barat ditetapkan dengan luas sekitar 19.003 hektare di Kabupaten Jembrana dan Buleleng.",
                source: "Jurnal Emasains, merujuk SK Menhut 493/Kpts-II/95",
                year: "2017",
            },
            {
                text: "Populasi Jalak Bali di alam liar menurun dari 112 ekor pada 1970 menjadi hanya 6 ekor pada 2002.",
                source: "Mongabay Indonesia",
                year: "2025",
            },
        ],
    },
];

export const getHotspotById = (id) => hotspots.find((spot) => spot.id === id);
