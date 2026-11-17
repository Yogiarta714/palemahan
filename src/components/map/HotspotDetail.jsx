import { useEffect, useRef } from "react";
import { ArrowLeft, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import Photo from "../ui/Photo.jsx";
import { getCategory } from "../../data/categories.js";
import { getQuizByCategory } from "../../data/quizzes.js";
import { challenges } from "../../data/challenges.js";
import { formatDate } from "../../lib/formatDate.js";

// Panel cerita satu titik. Di layar kecil tampil sebagai lembar di dasar layar.
export default function HotspotDetail({ spot, onClose }) {
    const headingRef = useRef(null);
    const spotId = spot?.id;

    // Saat titik dipilih, fokus pindah ke judulnya
    useEffect(() => {
        if (spotId) headingRef.current?.focus({ preventScroll: true });
    }, [spotId]);

    if (!spot) return null;

    const category = getCategory(spot.category);
    const challenge = challenges.find((item) => item.category === spot.category) ?? challenges[0];
    const articleHref = spot.articleSlug
        ? `/jelajahi/${spot.articleSlug}`
        : `/jelajahi?kategori=${spot.category}`;
    const quizHref = getQuizByCategory(spot.category) ? `/kuis/${spot.category}` : "/kuis";

    return (
        <section
            key={spot.id}
            aria-label={`Cerita ${spot.name}`}
            className="fixed inset-x-0 bottom-0 z-30 flex max-h-[75dvh] animate-rise flex-col overflow-hidden rounded-t-2xl border-t border-line bg-ivory shadow-xl motion-reduce:animate-none lg:static lg:z-10 lg:max-h-[calc(100dvh-9rem)] lg:rounded-xl lg:border lg:shadow-none"
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Tutup panel"
                className="absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full bg-ivory/90 text-ink-muted hover:bg-forest-50 lg:hidden"
            >
                <X aria-hidden="true" className="size-5" />
            </button>

            <div className="flex-1 overflow-y-auto p-6 lg:p-8">
                <button
                    type="button"
                    onClick={onClose}
                    className="mb-4 hidden items-center gap-1.5 text-sm font-semibold text-forest-700 hover:underline lg:inline-flex"
                >
                    <ArrowLeft aria-hidden="true" className="size-4" />
                    Semua lokasi
                </button>

                <Photo
                    image={spot.image}
                    seed={spot.name.length % 8}
                    className="hidden aspect-16/6 rounded-lg sm:block"
                />

                <p className="text-xs font-semibold uppercase tracking-widest text-clay-600 sm:mt-5">
                    {category?.name} · {spot.regency}
                </p>
                <h2
                    ref={headingRef}
                    tabIndex={-1}
                    className="mt-2 font-display text-2xl font-medium text-forest-800 outline-none"
                >
                    {spot.name}
                </h2>

                {spot.volatile && spot.statusAsOf && (
                    <p className="mt-3 inline-block rounded-full bg-clay-100 px-3 py-1 text-xs font-semibold text-clay-700">
                        Topik cepat berubah · Status per {formatDate(spot.statusAsOf)}
                    </p>
                )}

                <p className="mt-3 leading-relaxed text-ink-muted">{spot.summary}</p>

                {spot.facts.length > 0 && (
                    <ul className="mt-5 space-y-4 border-l-4 border-forest-600 bg-sage-100 p-4">
                        {spot.facts.map((fact) => (
                            <li key={fact.text}>
                                <p className="leading-snug text-forest-800">{fact.text}</p>
                                <p className="mt-1 text-xs text-ink-muted">
                                    Sumber: {fact.source}, {fact.year}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="grid grid-cols-2 gap-2 border-t border-line bg-ivory p-4 lg:gap-3 lg:p-5">
                <Button to={articleHref} className="col-span-2">
                    {spot.articleSlug ? "Baca artikel" : "Artikel terkait"}
                </Button>
                <Button to={quizHref} variant="outline">
                    Ikut kuis
                </Button>
                <Button to={`/aksi?tantangan=${challenge.id}`} variant="outline">
                    Mulai aksi
                </Button>
            </div>
        </section>
    );
}
