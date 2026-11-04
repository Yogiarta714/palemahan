import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Photo from "../ui/Photo.jsx";
import { getCategory } from "../../data/categories.js";

export default function FeaturedArticle({ article }) {
    const category = getCategory(article.category);

    return (
        <article className="group relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-14">
            <Photo image={article.image} seed={5} className="aspect-3/2 rounded-xl" />
            <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                    Artikel unggulan · {category?.name}
                </p>
                <h2 className="mt-3 font-display text-h2 font-medium text-forest-800">
                    <Link
                        to={`/jelajahi/${article.slug}`}
                        className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                    >
                        {article.title}
                    </Link>
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-muted">{article.summary}</p>
                <p className="mt-5 text-sm text-ink-muted">{article.readingTime} menit baca</p>
                <span
                    aria-hidden="true"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-700"
                >
                    Baca artikel
                    <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none" />
                </span>
            </div>
        </article>
    );
}
