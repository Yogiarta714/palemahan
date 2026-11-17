import { Suspense } from "react";
import { Outlet, useLocation } from "react-router";
import { motion } from "motion/react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import PageLoader from "./PageLoader.jsx";

export default function Layout() {
    const { pathname } = useLocation();

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
                <Suspense fallback={<PageLoader />}>
                    {/* key=pathname: setiap pindah halaman, isi halaman muncul dengan fade dan naik sedikit */}
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                    >
                        <Outlet />
                    </motion.div>
                </Suspense>
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
}
