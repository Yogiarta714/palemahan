import { categories } from "../../data/categories.js";

const options = [{ id: "semua", short: "Semua" }, ...categories];

export default function CategoryChips({ value, onChange }) {
    return (
        <div className="relative after:pointer-events-none after:absolute after:inset-y-0 after:-right-5 after:w-12 after:bg-linear-to-l after:from-ivory after:to-transparent sm:after:hidden">
            <div
                role="group"
                aria-label="Filter kategori"
                className="-mx-5 flex gap-2 overflow-x-auto pb-2 pl-5 pr-12 scrollbar-none sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden"
            >
                {options.map((option) => {
                    const active = option.id === value;
                    return (
                        <button
                            key={option.id}
                            type="button"
                            aria-pressed={active}
                            onClick={() => onChange(option.id)}
                            className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-medium transition-colors ${
                                active
                                    ? "border-forest-600 bg-forest-600 text-white"
                                    : "border-line bg-ivory text-ink hover:border-forest-400 hover:bg-forest-50"
                            }`}
                        >
                            {option.short}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
