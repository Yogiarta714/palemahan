// Profil hasil kuis, diurutkan dari yang terendah. minPercent = batas bawah persentase jawaban benar
export const quizProfiles = [
    {
        id: "tunas",
        name: "Tunas",
        minPercent: 0,
        description:
            "Kamu baru mulai tumbuh. Tidak apa-apa: penjelasan di tiap soal tadi adalah pupuk pertamamu. Baca artikelnya, lalu coba lagi.",
    },
    {
        id: "bibit",
        name: "Bibit",
        minPercent: 40,
        description:
            "Akarmu sudah mulai kuat. Kamu paham dasarnya, dan beberapa hal masih bisa diperdalam lewat artikel di bawah.",
    },
    {
        id: "pohon",
        name: "Pohon",
        minPercent: 65,
        description:
            "Kamu sudah tegak dan tahu cukup banyak. Sedikit lagi, dan kamu bisa jadi penaung bagi orang-orang di sekitarmu.",
    },
    {
        id: "hutan",
        name: "Hutan",
        minPercent: 85,
        description:
            "Pemahamanmu serimbun hutan. Saatnya mengubah pengetahuan itu menjadi aksi, dan mengajak orang lain ikut.",
    },
];
