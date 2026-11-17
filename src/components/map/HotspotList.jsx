import { Check, ChevronRight } from "lucide-react";
import { getCategory } from "../../data/categories.js";

// Daftar lokasi. Di layar lebar tampil di kolom kanan selama belum ada titik yang dipilih.
export default function HotspotList({
    hotspots,
    selectedId,
    visitedIds,
    onSelect,
    className = "",
}) {
    return (
        <section aria-labelledby="judul-daftar-lokasi" className={className}>
            <h2
                id="judul-daftar-lokasi"
                className="font-display text-2xl font-medium text-forest-800"
            >
                Daftar lokasi
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
                Pilih satu lokasi untuk membaca ceritanya. Kamu juga bisa menekan penanda di peta.
            </p>

            <ul className="mt-5 divide-y divide-line border-y border-line">
                {hotspots.map((spot) => {
                    const selected = spot.id === selectedId;
                    const visited = visitedIds.includes(spot.id);
                    const category = getCategory(spot.category);
                    return (
                        <li key={spot.id}>
                            <button
                                type="button"
                                data-hotspot-id={spot.id}
                                aria-current={selected ? "true" : undefined}
                                onClick={() => onSelect(spot.id)}
                                className={`group flex w-full items-center gap-4 px-2 py-4 text-left transition-colors motion-reduce:transition-none ${
                                    selected ? "bg-forest-50" : "hover:bg-forest-50"
                                }`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`grid size-9 shrink-0 place-items-center rounded-full border-2 ${
                                        visited
                                            ? "border-forest-600 bg-forest-600 text-white"
                                            : "border-line bg-ivory-2"
                                    }`}
                                >
                                    {visited && <Check className="size-4" />}
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block text-xs font-semibold uppercase tracking-widest text-clay-600">
                                        {category?.name}
                                    </span>
                                    <span className="mt-0.5 block font-display text-lg text-forest-800">
                                        {spot.name}
                                    </span>
                                    <span className="block text-sm text-ink-muted">
                                        {spot.regency}
                                        <span className="sr-only">
                                            {visited ? ", sudah dilihat" : ", belum dilihat"}
                                        </span>
                                    </span>
                                </span>
                                <ChevronRight
                                    aria-hidden="true"
                                    className="size-5 shrink-0 text-ink-muted transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                                />
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
