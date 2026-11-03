export const categories = [
    {
        id: "sampah",
        name: "Pengelolaan Sampah",
        short: "Sampah",
        description:
            "Dari rumah hingga tempat pemrosesan: bagaimana sampah dipilah, diangkut, dan dikelola.",
    },
    {
        id: "iklim",
        name: "Perubahan Iklim",
        short: "Iklim",
        description: "Mengapa iklim berubah dan apa artinya bagi pulau, pesisir, dan pertanian.",
    },
    {
        id: "biodiversitas",
        name: "Keanekaragaman Hayati",
        short: "Biodiversitas",
        description:
            "Satwa, tumbuhan, dan habitat yang menopang kehidupan, termasuk spesies endemik Bali.",
    },
    {
        id: "pesisir-laut",
        name: "Ekosistem Pesisir & Laut",
        short: "Pesisir & Laut",
        description: "Mangrove, terumbu karang, dan laut yang menjaga pesisir tetap hidup.",
    },
    {
        id: "energi",
        name: "Energi Terbarukan",
        short: "Energi",
        description:
            "Dari mana energi kita berasal dan bagaimana beralih ke sumber yang lebih bersih.",
    },
    {
        id: "gaya-hidup",
        name: "Gaya Hidup Berkelanjutan",
        short: "Gaya Hidup",
        description: "Kebiasaan kecil sehari-hari yang bila dilakukan bersama berdampak nyata.",
    },
];

export const getCategory = (id) => categories.find((category) => category.id === id);
