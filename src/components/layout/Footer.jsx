import { Link } from "react-router";
import Container from "./Container.jsx";
import Logo from "../ui/Logo.jsx";

const columns = [
    {
        title: "Pelajari",
        items: [
            { to: "/jelajahi", label: "Pusat Belajar" },
            { to: "/peta-bali", label: "Peta Eco Bali" },
            { to: "/cerita/jejak-botol", label: "Jejak Satu Botol" },
        ],
    },
    {
        title: "Beraksi",
        items: [
            { to: "/kuis", label: "Eco Quiz" },
            { to: "/aksi", label: "Eco Action" },
        ],
    },
    {
        title: "Palemahan",
        items: [
            { to: "/tentang", label: "Tentang" },
            { to: "/kontak", label: "Kontak" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-forest-800 text-ivory">
            <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                <div>
                    <Logo tone="dark" size="lg" />
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-sage-200">
                        Edukasi lingkungan dari Bali. Learn Today, Protect Tomorrow.
                    </p>
                </div>

                {columns.map((column) => (
                    <div key={column.title}>
                        <h2 className="text-xs font-semibold uppercase tracking-widest text-sage-300">
                            {column.title}
                        </h2>
                        <ul className="mt-4 space-y-3">
                            {column.items.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-sm text-ivory/90 underline-offset-4 hover:text-white hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </Container>

            <div className="border-t border-forest-600">
                <Container className="flex flex-col gap-2 py-6 text-xs text-sage-300 sm:flex-row sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Palemahan. Karya untuk Techno Versary Vol. II.
                    </p>
                    <p>Dari kesadaran menuju aksi.</p>
                </Container>
            </div>
        </footer>
    );
}
