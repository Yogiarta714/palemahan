import { Check } from "lucide-react";

export default function HotspotList({ hotspots, selectedId, visitedIds, onSelect }) {
    return (
        <section aria-labelledby="judul-daftar-lokasi" className="mt-8">
            <h2
                id="judul-daftar-lokasi"
                className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
            >
                Daftar lokasi
            </h2>
            <ul className="mt-3 divide-y divide-line border-y border-line">
                {hotspots.map((spot) => {
                    const selected = spot.id === selectedId;
                    const visited = visitedIds.includes(spot.id);
                    return (
                        <li key={spot.id}>
                            <button
                                type="button"
                                aria-current={selected ? "true" : undefined}
                                onClick={() => onSelect(spot.id)}
                                className={`flex w-full items-center justify-between gap-4 px-2 py-3 text-left ${
                                    selected ? "bg-forest-50" : "hover:bg-forest-50"
                                }`}
                            >
                                <span>
                                    <span className="block font-medium text-forest-800">
                                        {spot.name}
                                    </span>
                                    <span className="block text-sm text-ink-muted">
                                        {spot.regency}
                                    </span>
                                </span>
                                {visited && (
                                    <span className="flex shrink-0 items-center gap-1 text-xs font-semibold text-forest-700">
                                        <Check aria-hidden="true" className="size-4" />
                                        Sudah dilihat
                                    </span>
                                )}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
