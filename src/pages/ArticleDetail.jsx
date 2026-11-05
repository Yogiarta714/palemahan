import { Link, useParams } from "react-router";
import { ArrowDown, ChevronRight } from "lucide-react";
import Container from "../components/layout/Container.jsx";
import Photo from "../components/ui/Photo.jsx";
import Takeaways from "../components/articles/Takeaways.jsx";
import KeyFacts from "../components/articles/KeyFacts.jsx";
import ArticleContent from "../components/articles/ArticleContent.jsx";
import ReadMarker from "../components/articles/ReadMarker.jsx";
import TryTodayBox from "../components/articles/TryTodayBox.jsx";
import SourceList from "../components/articles/SourceList.jsx";
import QuizCta from "../components/articles/QuizCta.jsx";
import RelatedArticles from "../components/articles/RelatedArticles.jsx";
import NotFound from "./NotFound.jsx";
import { articles, getArticleBySlug } from "../data/articles.js";
import { getCategory } from "../data/categories.js";
import { getQuizByCategory } from "../data/quizzes.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

const formatDate = (iso) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

function pickRelated(article) {
    const chosen = (article.related ?? []).map(getArticleBySlug).filter(Boolean);
    const used = new Set([article.id, ...chosen.map((item) => item.id)]);
    const sameCategory = articles.filter(
        (item) => item.category === article.category && !used.has(item.id),
    );
    const others = articles.filter(
        (item) => item.category !== article.category && !used.has(item.id),
    );
    return [...chosen, ...sameCategory, ...others].slice(0, 3);
}

export default function ArticleDetail() {
    const { slug } = useParams();
    const article = getArticleBySlug(slug);

    usePageTitle(article ? article.title : "Halaman tidak ditemukan");

    // Alamat artikel yang tidak ada, tampilkan halaman 404
    if (!article) return <NotFound />;

    const category = getCategory(article.category);
    const hasFactsBlock = (article.content ?? []).some((block) => block.type === "facts");

    return (
        <>
            <article>
                <Container className="py-10 lg:py-16">
                    <header className="mx-auto max-w-170">
                        <nav aria-label="Breadcrumb">
                            <ol className="flex flex-wrap items-center gap-1 text-sm text-ink-muted">
                                <li>
                                    <Link
                                        to="/jelajahi"
                                        className="underline-offset-4 hover:underline"
                                    >
                                        Pusat Belajar
                                    </Link>
                                </li>
                                <li aria-hidden="true">
                                    <ChevronRight className="size-4" />
                                </li>
                                <li>
                                    <Link
                                        to={`/jelajahi?kategori=${article.category}`}
                                        className="underline-offset-4 hover:underline"
                                    >
                                        {category?.name}
                                    </Link>
                                </li>
                            </ol>
                        </nav>

                        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-clay-600">
                            {category?.name} · {article.readingTime} menit baca ·{" "}
                            {formatDate(article.date)}
                            {article.draft && (
                                <span className="ml-3 rounded-full bg-clay-100 px-2.5 py-1 text-clay-700">
                                    Draf
                                </span>
                            )}
                        </p>
                        <h1 className="mt-4 font-display text-h1 font-medium text-forest-800">
                            {article.title}
                        </h1>
                        <p className="mt-5 text-xl leading-relaxed text-ink-muted">
                            {article.summary}
                        </p>

                        {article.tryToday && (
                            <a
                                href="#coba-hari-ini"
                                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-700"
                            >
                                <span className="underline decoration-clay-500 decoration-2 underline-offset-4">
                                    Lagi buru-buru? Langsung ke aksi
                                </span>
                                <ArrowDown aria-hidden="true" className="size-4" />
                            </a>
                        )}
                    </header>

                    <figure className="mx-auto mt-10 max-w-4xl">
                        <Photo
                            image={article.image}
                            seed={3}
                            priority
                            className="aspect-video rounded-xl"
                        />
                        {article.image?.credit && (
                            <figcaption className="mt-3 text-xs text-ink-muted">
                                {article.image.caption} · {article.image.credit}
                            </figcaption>
                        )}
                    </figure>

                    <div className="mx-auto mt-12 max-w-170 space-y-12">
                        <Takeaways items={article.takeaways} />
                        {!hasFactsBlock && <KeyFacts facts={article.keyFacts} />}
                        <ArticleContent blocks={article.content} facts={article.keyFacts} />
                        <ReadMarker slug={article.slug} />
                        {article.tryToday && <TryTodayBox tryToday={article.tryToday} />}
                        <SourceList sources={article.sources} />
                    </div>
                </Container>
            </article>

            <QuizCta category={category} hasQuiz={Boolean(getQuizByCategory(article.category))} />
            <RelatedArticles items={pickRelated(article)} />
        </>
    );
}
