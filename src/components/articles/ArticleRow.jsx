import { Link } from "react-router";
import Photo from "../ui/Photo.jsx";
import { getCategory } from "../../data/categories.js";

// Satu artikel dalam daftar
export default function ArticleRow({ article, index = 0 }) {
    const category = getCategory(article.category);
    const reverse = index % 2 === 1;

    return (
        <article className="group relative grid gap-6 py-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <Photo
                image={article.image}
                seed={index + 1}
                className={`aspect-3/2 rounded-xl lg:col-span-5 ${reverse ? "lg:order-last" : ""}`}
            />
            <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    {category?.name} · {article.readingTime} menit baca
                </p>
                <h2 className="mt-3 font-display text-2xl font-medium text-forest-800 lg:text-3xl">
                    <Link
                        to={`/jelajahi/${article.slug}`}
                        className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                    >
                        {article.title}
                    </Link>
                </h2>
                <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">{article.summary}</p>
            </div>
        </article>
    );
}
