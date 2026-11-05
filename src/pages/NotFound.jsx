import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import { usePageTitle } from "../hooks/usePageTitle.js";

export default function NotFound() {
    usePageTitle("Halaman tidak ditemukan");

    return (
        <Container className="py-24 text-center lg:py-32">
            <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                Error 404
            </p>
            <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                Halaman tidak ditemukan
            </h1>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                Alamat yang kamu tuju tidak ada atau sudah dipindahkan. Kembali ke beranda atau
                lanjutkan belajar di Pusat Belajar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button to="/">Ke Beranda</Button>
                <Button to="/jelajahi" variant="outline">
                    Buka Pusat Belajar
                </Button>
            </div>
        </Container>
    );
}
