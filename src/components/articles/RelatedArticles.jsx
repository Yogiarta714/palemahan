import { Link } from "react-router";
import Container from "../layout/Container.jsx";
import { getCategory } from "../../data/categories.js";

export default function RelatedArticles({ items }) {
    if (items.length === 0) return null;

    return (
        <section aria-labelledby="judul-terkait" className="py-16 lg:py-20">
            <Container>
                <h2 id="judul-terkait" className="font-display text-h2 font-medium text-forest-800">
                    Artikel terkait
                </h2>
                <ul className="mt-8 divide-y divide-line border-y border-line lg:grid lg:grid-cols-3 lg:divide-x lg:divide-y-0">
                    {items.map((item) => (
                        <li
                            key={item.id}
                            className="group relative py-6 lg:px-8 lg:first:pl-0 lg:last:pr-0"
                        >
                            <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                                {getCategory(item.category)?.short} · {item.readingTime} menit baca
                            </p>
                            <h3 className="mt-2 font-display text-xl font-medium text-forest-800">
                                <Link
                                    to={`/jelajahi/${item.slug}`}
                                    className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                                >
                                    {item.title}
                                </Link>
                            </h3>
                            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                                {item.summary}
                            </p>
                        </li>
                    ))}
                </ul>
            </Container>
        </section>
    );
}
