import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Container from "./Container.jsx";
import Button from "../ui/Button.jsx";

const links = [
    { to: "/jelajahi", label: "Jelajahi" },
    { to: "/peta-bali", label: "Peta Bali" },
    { to: "/kuis", label: "Kuis" },
    { to: "/aksi", label: "Aksi" },
    { to: "/tentang", label: "Tentang" },
];

const desktopLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-forest-600 ${
        isActive
            ? "text-forest-600 underline decoration-clay-500 decoration-2 underline-offset-8"
            : "text-ink-muted"
    }`;

const mobileLinkClass = ({ isActive }) =>
    `block py-2 font-display text-3xl ${isActive ? "text-clay-600" : "text-forest-700"}`;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const close = () => setOpen(false);

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
            <header className="sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur">
                <Container className="flex h-16 items-center justify-between">
                    <Link
                        to="/"
                        className="font-display text-2xl font-semibold tracking-tight text-forest-700"
                    >
                        Palemahan
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
                        className="inline-flex size-11 items-center justify-center rounded-full text-forest-700 hover:bg-forest-50 lg:hidden"
                    >
                        <Menu aria-hidden="true" />
                    </button>
                </Container>
            </header>

            {/* Menu mobile layar penuh */}
            {open && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu navigasi"
                    className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden"
                >
                    <Container className="flex h-16 shrink-0 items-center justify-between border-b border-line">
                        <span className="font-display text-2xl font-semibold text-forest-700">
                            Palemahan
                        </span>
                        <button
                            ref={closeButtonRef}
                            type="button"
                            aria-label="Tutup menu"
                            onClick={close}
                            className="inline-flex size-11 items-center justify-center rounded-full text-forest-700 hover:bg-forest-50"
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
