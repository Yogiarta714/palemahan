import Button from "../ui/Button.jsx";

export default function EmptyState({ query, onReset }) {
    return (
        <div className="mx-auto max-w-md py-20 text-center">
            <p className="font-display text-2xl font-medium text-forest-800">
                {query.trim()
                    ? `Tidak ada artikel untuk “${query.trim()}”`
                    : "Belum ada artikel di kategori ini"}
            </p>
            <p className="mt-3 text-ink-muted">
                Coba kata kunci lain atau tampilkan semua kategori.
            </p>
            <Button variant="outline" onClick={onReset} className="mt-6">
                Reset filter
            </Button>
        </div>
    );
}
