import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import Button from "../ui/Button.jsx";
import Photo from "../ui/Photo.jsx";
import { getCategory } from "../../data/categories.js";
import { getQuizByCategory } from "../../data/quizzes.js";
import { challenges } from "../../data/challenges.js";
import { formatDate } from "../../lib/formatDate.js";

// Panel cerita satu titik. Di layar kecil tampil sebagai lembar di dasar layar 
export default function HotspotDetail({ spot, onClose }) {
    const headingRef = useRef(null);
    const spotId = spot?.id;

    // Saat titik dipilih, fokus pindah ke judulnya
    useEffect(() => {
        if (spotId) headingRef.current?.focus({ preventScroll: true });
    }, [spotId]);

    if (!spot) {
        return (
            <div className="hidden rounded-xl border border-dashed border-line p-8 text-ink-muted lg:block">
                <p className="font-display text-xl text-forest-800">Pilih satu titik</p>
                <p className="mt-2 leading-relaxed">
                    Klik penanda di peta atau pilih dari daftar lokasi untuk membaca ceritanya, lalu
                    lanjut ke artikel, kuis, atau aksi yang terkait.
                </p>
            </div>
        );
    }

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
            className="fixed inset-x-0 bottom-0 z-30 max-h-[75dvh] animate-rise overflow-y-auto rounded-t-2xl border-t border-line bg-ivory p-6 shadow-xl motion-reduce:animate-none lg:sticky lg:top-24 lg:z-10 lg:max-h-[calc(100dvh-8rem)] lg:rounded-xl lg:border lg:p-8 lg:shadow-none"
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Tutup panel"
                className="absolute right-3 top-3 inline-flex size-11 items-center justify-center rounded-full text-ink-muted hover:bg-forest-50 lg:hidden"
            >
                <X aria-hidden="true" className="size-5" />
            </button>

            <Photo
                image={spot.image}
                seed={spot.name.length % 8}
                className="hidden aspect-16/7 rounded-lg sm:block"
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button to={articleHref} className="sm:col-span-2">
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
