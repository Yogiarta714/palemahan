import { Check } from "lucide-react";
import { baliMap, toPercent } from "../../data/baliMap.js";

// Label di kanan titik. Titik di sisi timur: label di kiri, atau di bawah bila titik berada di tenggara
function labelSide(x, y) {
    if (x <= 60) return "right";
    return y > 70 ? "bottom" : "left";
}

const labelPosition = {
    right: "left-full top-1/2 ml-1 -translate-y-1/2",
    left: "right-full top-1/2 mr-1 -translate-y-1/2",
    bottom: "left-1/2 top-full -translate-x-1/2",
};

function Pin({ spot, selected, visited, onSelect }) {
    const { x, y } = toPercent(spot.coordinates.lat, spot.coordinates.lng);
    const side = labelSide(x, y);

    return (
        <button
            type="button"
            aria-pressed={selected}
            aria-label={`${spot.name}, ${spot.regency}${visited ? ", sudah dilihat" : ""}`}
            onClick={() => onSelect(spot.id)}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="group absolute z-10 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center"
        >
            {selected && (
                <span
                    aria-hidden="true"
                    className="absolute size-9 animate-ping rounded-full border-2 border-forest-800/40 motion-reduce:hidden"
                />
            )}
            <span
                aria-hidden="true"
                className={`grid place-items-center rounded-full border-2 border-ivory shadow-sm transition-all duration-150 group-hover:scale-125 group-focus-visible:scale-125 motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${
                    selected
                        ? "size-7 bg-forest-800"
                        : visited
                          ? "size-5 bg-forest-600"
                          : "size-5 bg-clay-500"
                }`}
            >
                {(visited || selected) && <Check className="size-3 text-white" />}
            </span>
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute whitespace-nowrap rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-forest-800 shadow-sm ${labelPosition[side]} ${
                    selected ? "block" : "hidden lg:block"
                }`}
            >
                {spot.name}
            </span>
        </button>
    );
}

// Peta ilustratif Bali + titik-titik isu. Titik di Bali selatan yang berdekatan digabung
export default function BaliMap({
    hotspots,
    selectedId,
    visitedIds,
    clusterOpen,
    onClusterOpenChange,
    onSelect,
}) {
    const southern = hotspots.filter((spot) => spot.area === "selatan");
    const others = hotspots.filter((spot) => spot.area !== "selatan");
    const clustered = southern.length > 1;
    const singles = clustered ? others : hotspots;

    // Posisi gugus: rata-rata posisi titik-titik di dalamnya
    let cluster = null;
    if (clustered) {
        const points = southern.map((spot) =>
            toPercent(spot.coordinates.lat, spot.coordinates.lng),
        );
        cluster = {
            x: points.reduce((sum, point) => sum + point.x, 0) / points.length,
            y: points.reduce((sum, point) => sum + point.y, 0) / points.length,
        };
    }
    const clusterHasSelected = southern.some((spot) => spot.id === selectedId);

    return (
        <div
            className="relative w-full rounded-xl border border-line bg-sage-100"
            style={{ aspectRatio: `${baliMap.width} / ${baliMap.height}` }}
        >
            <svg
                viewBox={`0 0 ${baliMap.width} ${baliMap.height}`}
                role="img"
                aria-label="Peta ilustrasi Pulau Bali dengan titik-titik isu lingkungan"
                focusable="false"
                className="absolute inset-0 size-full overflow-hidden rounded-xl"
            >
                <g fill="none" strokeWidth="1.2" className="stroke-sage-300">
                    {baliMap.outer.map((d) => (
                        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
                    ))}
                </g>
                {baliMap.land.map((d) => (
                    <path
                        key={d}
                        d={d}
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                        className="fill-ivory stroke-forest-600"
                    />
                ))}
                <g fill="none" strokeWidth="1" className="stroke-forest-300">
                    {baliMap.inner.map((d) => (
                        <path key={d} d={d} vectorEffect="non-scaling-stroke" />
                    ))}
                </g>

                {/* Penunjuk arah dan nama perairan (hiasan). Nama perairan disembunyikan di layar kecil. */}
                <g aria-hidden="true" className="max-md:hidden">
                    <text
                        x="960"
                        y="60"
                        textAnchor="end"
                        fontSize="20"
                        fontStyle="italic"
                        letterSpacing="3"
                        className="fill-forest-300"
                    >
                        LAUT BALI
                    </text>
                    <text
                        x="140"
                        y="596"
                        fontSize="20"
                        fontStyle="italic"
                        letterSpacing="3"
                        className="fill-forest-300"
                    >
                        SAMUDRA HINDIA
                    </text>
                </g>
                <g aria-hidden="true" transform="translate(80 560)">
                    <path d="M0 -30 L10 8 L0 0 L-10 8Z" className="fill-forest-600" />
                    <text
                        y="34"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="600"
                        className="fill-forest-600"
                    >
                        U
                    </text>
                </g>
            </svg>

            {singles.map((spot) => (
                <Pin
                    key={spot.id}
                    spot={spot}
                    selected={spot.id === selectedId}
                    visited={visitedIds.includes(spot.id)}
                    onSelect={onSelect}
                />
            ))}

            {cluster && (
                <div
                    style={{ left: `${cluster.x}%`, top: `${cluster.y}%` }}
                    className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                >
                    <button
                        type="button"
                        aria-expanded={clusterOpen}
                        aria-label={`${southern.length} titik di Bali selatan. Buka daftar`}
                        onClick={() => onClusterOpenChange(!clusterOpen)}
                        className="grid size-11 place-items-center"
                    >
                        <span
                            aria-hidden="true"
                            className={`grid size-9 place-items-center rounded-full border-2 border-ivory bg-forest-800 text-sm font-semibold text-white shadow-sm ${
                                clusterHasSelected ? "ring-4 ring-forest-800/30" : ""
                            }`}
                        >
                            {southern.length}
                        </span>
                    </button>
                    <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-full top-1/2 ml-0.5 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-ivory/95 px-3 py-1 text-xs font-semibold text-forest-800 shadow-sm lg:block"
                    >
                        Bali selatan
                    </span>

                    {clusterOpen && (
                        <ul
                            aria-label="Titik di Bali selatan"
                            className="absolute bottom-full left-1/2 mb-2 w-60 -translate-x-1/2 rounded-xl border border-line bg-ivory p-2 shadow-md"
                        >
                            {southern.map((spot) => (
                                <li key={spot.id}>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            onClusterOpenChange(false);
                                            onSelect(spot.id);
                                        }}
                                        className="block w-full rounded-lg px-3 py-2 text-left hover:bg-forest-50"
                                    >
                                        <span className="block text-sm font-semibold text-forest-800">
                                            {spot.name}
                                        </span>
                                        <span className="block text-xs text-ink-muted">
                                            {spot.regency}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
}
