// Tampilan singkat saat halaman sedang dimuat
export default function PageLoader() {
    return (
        <div role="status" className="grid min-h-[40vh] place-items-center">
            <span aria-hidden="true" className="size-3 animate-pulse rounded-full bg-clay-500" />
            <span className="sr-only">Memuat halaman</span>
        </div>
    );
}
