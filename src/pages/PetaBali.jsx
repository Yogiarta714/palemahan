import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
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
            <header className="max-w-2xl">
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
            </header>

            <div className="mt-8">
                <CategoryChips value={category} onChange={handleCategory} options={filterOptions} />
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-12">
                <div>
                    <BaliMap
                        hotspots={visible}
                        selectedId={selected?.id ?? null}
                        visitedIds={progress.mapVisited}
                        clusterOpen={clusterOpen}
                        onClusterOpenChange={setClusterOpen}
                        onSelect={handleSelect}
                    />
                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                        Garis pantai: Natural Earth (domain publik), disederhanakan dan diperhalus
                        untuk ilustrasi. Letak titik berupa perkiraan dan tidak untuk navigasi.
                    </p>
                    <HotspotList
                        hotspots={visible}
                        selectedId={selected?.id ?? null}
                        visitedIds={progress.mapVisited}
                        onSelect={handleSelect}
                    />
                </div>

                <HotspotDetail spot={selected} onClose={() => setSelectedId(null)} />
            </div>
        </Container>
    );
}
