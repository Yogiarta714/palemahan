import { getCategory } from "../data/categories.js";

const normalize = (text) => text.toLowerCase().trim();

// Menyaring artikel berdasarkan kata kunci dan kategori
export function filterArticles(list, query, category) {
    const words = normalize(query).split(/\s+/).filter(Boolean);

    return list.filter((article) => {
        if (category !== "semua" && article.category !== category) return false;
        if (words.length === 0) return true;

        const haystack = normalize(
            [
                article.title,
                article.summary,
                getCategory(article.category)?.name ?? "",
                ...(article.tags ?? []),
            ].join(" "),
        );
        return words.every((word) => haystack.includes(word));
    });
}
