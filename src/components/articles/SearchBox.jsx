import { Search, X } from "lucide-react";

export default function SearchBox({ value, onChange }) {
    return (
        <div className="relative">
            <label htmlFor="cari-artikel" className="sr-only">
                Cari artikel
            </label>
            <Search
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-ink-muted"
            />
            <input
                id="cari-artikel"
                type="search"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder="Cari topik, mis. mangrove atau plastik"
                autoComplete="off"
                className="h-12 w-full rounded-full border border-line bg-ivory pl-12 pr-12 text-base text-ink placeholder:text-ink-muted [&::-webkit-search-cancel-button]:appearance-none"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    aria-label="Hapus pencarian"
                    className="absolute right-2 top-1/2 inline-flex size-9 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted hover:bg-forest-50"
                >
                    <X aria-hidden="true" className="size-4" />
                </button>
            )}
        </div>
    );
}
