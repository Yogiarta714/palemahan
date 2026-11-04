import { useState } from "react";
import { useSearchParams } from "react-router";
import Container from "../components/layout/Container.jsx";
import SearchBox from "../components/articles/SearchBox.jsx";
import CategoryChips from "../components/articles/CategoryChips.jsx";
import FeaturedArticle from "../components/articles/FeaturedArticle.jsx";
import ArticleRow from "../components/articles/ArticleRow.jsx";
import EmptyState from "../components/articles/EmptyState.jsx";
import ContourPattern from "../components/ui/ContourPattern.jsx";
import { articles } from "../data/articles.js";
import { categories } from "../data/categories.js";
import { filterArticles } from "../lib/filterArticles.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function Explore() {
    usePageTitle("Pusat Belajar");

    // Alamat hanya dibaca sekali saat halaman dibuka.
    const [params] = useSearchParams();
    const [query, setQuery] = useState("");
    const [category, setCategory] = useState(() => {
        const fromUrl = params.get("kategori");
        return categories.some((item) => item.id === fromUrl) ? fromUrl : "semua";
    });

    const isFiltering = query.trim() !== "" || category !== "semua";
    const results = filterArticles(articles, query, category);

    const [featured, ...others] = articles;
    const listItems = isFiltering ? results : others;

    // Saat mencari/memfilter
    function resetFilters() {
        setQuery("");
        setCategory("semua");
    }

    return (
        <div className="relative overflow-hidden">
            <ContourPattern className="pointer-events-none absolute -right-32 -top-24 size-144 text-line" />
            <Container className="relative py-12 lg:py-16">
                <header className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                        Edukasi lingkungan
                    </p>
                    <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                        Pusat Belajar
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                        Artikel ringkas tentang isu lingkungan, dimulai dari Bali. Cari topik atau
                        pilih kategori.
                    </p>
                </header>

                <div className="mt-10 space-y-5">
                    <SearchBox value={query} onChange={setQuery} />
                    <CategoryChips value={category} onChange={setCategory} />
                </div>

                <p role="status" className="mt-8 text-sm text-ink-muted">
                    {isFiltering
                        ? `${results.length} artikel ditemukan`
                        : `${articles.length} artikel`}
                </p>

                {!isFiltering && featured && (
                    <div className="mt-6 pb-4">
                        <FeaturedArticle article={featured} />
                    </div>
                )}

                {listItems.length > 0 ? (
                    <ul className="mt-6 divide-y divide-line border-t border-line">
                        {listItems.map((article, index) => (
                            <li key={article.id}>
                                <ArticleRow article={article} index={index} />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <EmptyState query={query} onReset={resetFilters} />
                )}
            </Container>
        </div>
    );
}
