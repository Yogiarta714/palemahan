import { Link } from "react-router";
import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import ArrowLink from "../ui/ArrowLink.jsx";
import Reveal from "../ui/Reveal.jsx";
import Photo from "../ui/Photo.jsx";
import { articles } from "../../data/articles.js";
import { getCategory } from "../../data/categories.js";

export default function FeaturedArticles() {
    // Sesuai urutan di articles.js
    const [featured, ...others] = articles;
    const rest = others.slice(0, 3);

    if (!featured) return null;

    return (
        <section aria-labelledby="judul-artikel" className="py-20 lg:py-28">
            <Container>
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <SectionHeading
                        label="Pusat Belajar"
                        title="Mulai dari cerita yang dekat"
                        titleId="judul-artikel"
                    />
                    <ArrowLink to="/jelajahi">Lihat semua artikel</ArrowLink>
                </div>

                <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
                    <Reveal>
                        <article className="group relative">
                            <Photo
                                image={featured.image}
                                seed={5}
                                className="aspect-3/2 rounded-xl"
                            />
                            <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-clay-600">
                                {getCategory(featured.category)?.name} · {featured.readingTime}{" "}
                                menit baca
                            </p>
                            <h3 className="mt-3 font-display text-3xl font-medium text-forest-800 lg:text-4xl">
                                <Link
                                    to={`/jelajahi/${featured.slug}`}
                                    className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                                >
                                    {featured.title}
                                </Link>
                            </h3>
                            <p className="mt-3 max-w-xl leading-relaxed text-ink-muted">
                                {featured.summary}
                            </p>
                        </article>
                    </Reveal>

                    {rest.length > 0 && (
                        <ul className="divide-y divide-line self-start border-y border-line">
                            {rest.map((article, index) => (
                                <li key={article.id} className="group relative py-6">
                                    <Reveal delay={index * 0.08}>
                                        <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                                            {getCategory(article.category)?.short} ·{" "}
                                            {article.readingTime} menit baca
                                        </p>
                                        <h3 className="mt-2 font-display text-xl font-medium text-forest-800">
                                            <Link
                                                to={`/jelajahi/${article.slug}`}
                                                className="decoration-clay-500 decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                                            >
                                                {article.title}
                                            </Link>
                                        </h3>
                                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
                                            {article.summary}
                                        </p>
                                    </Reveal>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </Container>
        </section>
    );
}
