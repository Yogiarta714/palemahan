import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";
import Logo from "../ui/Logo.jsx";

const links = [
    { to: "/jelajahi", label: "Jelajahi" },
    { to: "/peta-bali", label: "Peta Bali" },
    { to: "/kuis", label: "Kuis" },
    { to: "/aksi", label: "Aksi" },
    { to: "/tentang", label: "Tentang" },
];

// Garis bawah tipis yang "tumbuh" dari kiri saat disorot, dan tetap penuh di halaman aktif.
const desktopLinkClass = ({ isActive }) =>
    `relative py-1 text-sm font-medium transition-colors hover:text-forest-600 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-clay-500 after:transition-transform after:duration-200 motion-reduce:after:transition-none ${
        isActive
            ? "text-forest-600 after:scale-x-100"
            : "text-ink-muted after:scale-x-0 hover:after:scale-x-100"
    }`;

const mobileLinkClass = ({ isActive }) =>
    `block py-2 font-display text-3xl ${isActive ? "text-clay-600" : "text-forest-700"}`;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const close = () => setOpen(false);

    // Header mendapat bayangan tipis begitu halaman mulai digulir, sebagai petunjuk kedalaman.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Saat menu mobile terbuka: fokus ke tombol tutup, Escape menutup,
    // halaman di belakang tidak bisa di-scroll. Saat ditutup: semua dikembalikan.
    useEffect(() => {
        if (!open) return;
        const menuButton = menuButtonRef.current;
        closeButtonRef.current?.focus();
        document.body.style.overflow = "hidden";

        const onKeyDown = (event) => {
            if (event.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
            menuButton?.focus();
        };
    }, [open]);

    return (
        <>
            <header
                className={`sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur transition-shadow duration-200 motion-reduce:transition-none ${
                    scrolled ? "shadow-sm" : ""
                }`}
            >
                <Container className="flex h-16 items-center justify-between">
                    <Link to="/" className="inline-flex">
                        <Logo />
                    </Link>

                    {/* Navigasi desktop */}
                    <nav aria-label="Navigasi utama" className="hidden items-center gap-8 lg:flex">
                        {links.map((link) => (
                            <NavLink key={link.to} to={link.to} className={desktopLinkClass}>
                                {link.label}
                            </NavLink>
                        ))}
                        <Button to="/kontak">Kontak</Button>
                    </nav>

                    {/* Tombol menu (mobile) */}
                    <button
                        ref={menuButtonRef}
                        type="button"
                        aria-label="Buka menu"
                        aria-expanded={open}
                        onClick={() => setOpen(true)}
                        className="inline-flex size-11 items-center justify-center rounded-full text-forest-700 transition hover:bg-forest-50 active:scale-90 motion-reduce:active:scale-100 lg:hidden"
                    >
                        <Menu aria-hidden="true" />
                    </button>
                </Container>
            </header>

            {/* Menu mobile layar penuh, sengaja di LUAR <header> (backdrop-blur membuat elemen fixed di dalamnya ikut terpotong) */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu navigasi"
                    className="fixed inset-0 z-50 flex animate-rise flex-col bg-ivory motion-reduce:animate-none lg:hidden"
                >
                    <Container className="flex h-16 shrink-0 items-center justify-between border-b border-line">
                        <Logo />
                        <button
                            ref={closeButtonRef}
                            type="button"
                            aria-label="Tutup menu"
                            onClick={close}
                            className="inline-flex size-11 items-center justify-center rounded-full text-forest-700 transition hover:bg-forest-50 active:scale-90 motion-reduce:active:scale-100"
                        >
                            <X aria-hidden="true" />
                        </button>
                    </Container>

                    <nav
                        aria-label="Navigasi mobile"
                        className="flex-1 overflow-y-auto px-5 py-8 sm:px-8"
                    >
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={close}
                                className={mobileLinkClass}
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Button to="/kontak" onClick={close} className="mt-8">
                            Kontak
                        </Button>
                    </nav>
                </div>
            )}
        </>
    );
}
