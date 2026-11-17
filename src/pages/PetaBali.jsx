import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { Check } from "lucide-react";
import Container from "../components/layout/Container.jsx";
import CategoryChips from "../components/articles/CategoryChips.jsx";
import BaliMap from "../components/map/BaliMap.jsx";
import HotspotList from "../components/map/HotspotList.jsx";
import HotspotDetail from "../components/map/HotspotDetail.jsx";
import { hotspots, getHotspotById } from "../data/hotspots.js";
import { categories } from "../data/categories.js";
import { useProgress } from "../hooks/useProgress.js";
import { usePageTitle } from "../hooks/usePageTitle.js";

// Chip filter hanya untuk kategori yang punya titik di peta
const filterOptions = [
    { id: "semua", short: "Semua" },
    ...categories.filter((category) => hotspots.some((spot) => spot.category === category.id)),
];

// Ringkasan progres: berapa titik yang sudah dibuka
function ProgressCard({ seen, total }) {
    const done = total > 0 && seen >= total;
    return (
        <div className="w-full rounded-xl border border-line bg-ivory-2 p-5 lg:w-72">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                Perjalananmu
            </p>
            <p className="mt-1 font-display text-3xl font-medium text-forest-800">
                {seen}
                <span className="ml-1.5 font-sans text-base font-normal text-ink-muted">
                    dari {total} titik
                </span>
            </p>
            <div
                role="progressbar"
                aria-label="Titik yang sudah dilihat"
                aria-valuemin={0}
                aria-valuemax={total}
                aria-valuenow={seen}
                className="mt-3 h-2 overflow-hidden rounded-full bg-line"
            >
                <div
                    style={{ width: `${total ? (seen / total) * 100 : 0}%` }}
                    className="h-full rounded-full bg-forest-600 transition-[width] duration-300 motion-reduce:transition-none"
                />
            </div>
            <p className="mt-3 text-sm text-ink-muted">
                {done
                    ? "Semua titik sudah kamu lihat. Lanjutkan ke kuis atau aksi."
                    : "Buka tiap titik untuk menyelesaikan perjalanan."}
            </p>
        </div>
    );
}

// Arti bentuk penanda di peta
function Legend() {
    return (
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-muted">
            <li className="flex items-center gap-2">
                <span
                    aria-hidden="true"
                    className="size-4 rounded-full border-2 border-ivory bg-clay-500 shadow-sm ring-1 ring-line"
                />
                Belum dilihat
            </li>
            <li className="flex items-center gap-2">
                <span
                    aria-hidden="true"
                    className="grid size-4 place-items-center rounded-full border-2 border-ivory bg-forest-600 text-white shadow-sm ring-1 ring-line"
                >
                    <Check className="size-2.5" />
                </span>
                Sudah dilihat
            </li>
            <li className="flex items-center gap-2">
                <span
                    aria-hidden="true"
                    className="size-4 rounded-full border-2 border-ivory bg-forest-800 shadow-sm ring-1 ring-line"
                />
                Sedang dibuka
            </li>
            <li className="flex items-center gap-2">
                <span
                    aria-hidden="true"
                    className="grid size-5 place-items-center rounded-full bg-forest-800 text-[10px] font-semibold text-white"
                >
                    3
                </span>
                Beberapa titik berdekatan
            </li>
        </ul>
    );
}

export default function PetaBali() {
    usePageTitle("Peta Eco Bali");
    const { progress, markHotspotVisited } = useProgress();
    const [params] = useSearchParams();

    const [category, setCategory] = useState("semua");
    const [clusterOpen, setClusterOpen] = useState(false); // daftar gugus titik Bali selatan

    const [selectedId, setSelectedId] = useState(() => {
        const fromUrl = params.get("titik");
        return getHotspotById(fromUrl) ? fromUrl : null;
    });

    const visible = hotspots.filter((spot) => category === "semua" || spot.category === category);
    const selected = visible.find((spot) => spot.id === selectedId) ?? null;
    const seen = hotspots.filter((spot) => progress.mapVisited.includes(spot.id)).length;

    function handleSelect(id) {
        setSelectedId(id);
        markHotspotVisited(id);
    }

    function handleCategory(id) {
        setClusterOpen(false);
        setCategory(id);
        const current = getHotspotById(selectedId);
        if (current && id !== "semua" && current.category !== id) setSelectedId(null);
    }

    // Menutup panel: fokus kembali ke baris titik tadi di daftar, supaya pengguna keyboard tidak kehilangan posisi
    function handleClose() {
        const id = selectedId;
        setSelectedId(null);
        window.setTimeout(() => {
            document.querySelector(`[data-hotspot-id="${id}"]`)?.focus({ preventScroll: true });
        }, 0);
    }

    // Tombol escape untuk menutup
    useEffect(() => {
        if (!selectedId && !clusterOpen) return undefined;
        const onKeyDown = (event) => {
            if (event.key !== "Escape") return;
            if (clusterOpen) setClusterOpen(false);
            else setSelectedId(null);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [selectedId, clusterOpen]);

    return (
        <Container className="py-12 lg:py-16">
            <header className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                        Bali-first
                    </p>
                    <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                        Peta Eco Bali
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                        Enam tempat di Bali yang menyimpan cerita lingkungan. Pilih satu titik untuk
                        membaca ceritanya, lalu lanjut ke artikel, kuis, atau aksi yang terkait.
                    </p>
                </div>
                <ProgressCard seen={seen} total={hotspots.length} />
            </header>

            <div className="mt-8">
                <CategoryChips value={category} onChange={handleCategory} options={filterOptions} />
            </div>

            {/* Layar lebar: peta di kiri, daftar atau cerita titik di kanan, sejajar dan muat dalam satu layar */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
                <div>
                    <BaliMap
                        hotspots={visible}
                        selectedId={selected?.id ?? null}
                        visitedIds={progress.mapVisited}
                        clusterOpen={clusterOpen}
                        onClusterOpenChange={setClusterOpen}
                        onSelect={handleSelect}
                    />
                    <Legend />
                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                        Garis pantai: Natural Earth (domain publik), disederhanakan dan diperhalus
                        untuk ilustrasi. Letak titik berupa perkiraan dan tidak untuk navigasi.
                    </p>
                </div>

                <div>
                    <HotspotList
                        hotspots={visible}
                        selectedId={selected?.id ?? null}
                        visitedIds={progress.mapVisited}
                        onSelect={handleSelect}
                        className={selected ? "lg:hidden" : ""}
                    />
                    <HotspotDetail spot={selected} onClose={handleClose} />
                </div>
            </div>
        </Container>
    );
}
