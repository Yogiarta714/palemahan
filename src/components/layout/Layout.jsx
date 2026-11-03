import { Suspense } from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";

export default function Layout() {
    return (
        <div className="flex min-h-screen flex-col">
            <a
                href="#konten"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-forest-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
            >
                Lewati ke konten
            </a>

            <Navbar />

            <main id="konten" className="flex-1">
                <Suspense fallback={<p className="p-8 text-ink-muted">Memuat…</p>}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
}
