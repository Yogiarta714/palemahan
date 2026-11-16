import { useSearchParams } from "react-router";
import { ExternalLink, Mail } from "lucide-react";
import Container from "../components/layout/Container.jsx";
import Button from "../components/ui/Button.jsx";
import ContactForm from "../components/contact/ContactForm.jsx";
import { contact, topics } from "../data/contact.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
    usePageTitle("Kontak");
    useScrollToHash();

    // /kontak?topik=kolaborasi memilih keperluan "Kolaborasi" lebih dulu
    const [params] = useSearchParams();
    const defaultTopic = params.get("topik") === "kolaborasi" ? topics[1] : topics[0];

    const channels = [
        contact.email && {
            label: "Email",
            text: contact.email,
            href: `mailto:${contact.email}`,
            icon: Mail,
        },
        contact.instagram && {
            label: "Instagram",
            text: contact.instagram.replace(/^https?:\/\/(www\.)?/, ""),
            href: contact.instagram,
            icon: ExternalLink,
            external: true,
        },
        contact.github && {
            label: "GitHub",
            text: contact.github.replace(/^https?:\/\/(www\.)?/, ""),
            href: contact.github,
            icon: ExternalLink,
            external: true,
        },
    ].filter(Boolean);

    return (
        <Container className="py-12 lg:py-16">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                        Kontak
                    </p>
                    <h1 className="mt-3 font-display text-h1 font-medium text-forest-800">
                        Hubungi kami
                    </h1>
                    <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                        Punya pertanyaan, masukan, atau menemukan data yang perlu diperbaiki? Tulis
                        saja. Setiap pesan kami baca.
                    </p>

                    <section aria-labelledby="judul-kanal" className="mt-10">
                        <h2
                            id="judul-kanal"
                            className="text-xs font-semibold uppercase tracking-widest text-ink-muted"
                        >
                            Kontak langsung
                        </h2>
                        {channels.length > 0 ? (
                            <ul className="mt-4 divide-y divide-line border-y border-line">
                                {channels.map((channel) => (
                                    <li key={channel.label}>
                                        <a
                                            href={channel.href}
                                            {...(channel.external
                                                ? { target: "_blank", rel: "noopener noreferrer" }
                                                : {})}
                                            className="flex items-center gap-4 py-4 text-forest-800 hover:text-forest-600"
                                        >
                                            <channel.icon
                                                aria-hidden="true"
                                                className="size-5 shrink-0"
                                            />
                                            <span>
                                                <span className="block text-xs font-semibold uppercase tracking-widest text-ink-muted">
                                                    {channel.label}
                                                </span>
                                                <span className="block underline-offset-4 hover:underline">
                                                    {channel.text}
                                                    {channel.external && (
                                                        <span className="sr-only">
                                                            {" "}
                                                            (membuka tab baru)
                                                        </span>
                                                    )}
                                                </span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="mt-4 leading-relaxed text-ink-muted">
                                Kontak langsung sedang disiapkan. Sementara itu, gunakan formulir di
                                samping.
                            </p>
                        )}
                    </section>

                    <section
                        aria-labelledby="judul-kolaborasi"
                        className="mt-10 rounded-xl bg-sage-100 p-6 sm:p-8"
                    >
                        <h2
                            id="judul-kolaborasi"
                            className="font-display text-2xl font-medium text-forest-800"
                        >
                            Ingin berkolaborasi?
                        </h2>
                        <p className="mt-3 leading-relaxed text-ink">
                            Sekolah, komunitas, atau lembaga yang ingin memakai Palemahan untuk
                            belajar bersama? Kami senang berdiskusi.
                        </p>
                        <Button to="/kontak?topik=kolaborasi#formulir" className="mt-5">
                            Ajak kami berkolaborasi
                        </Button>
                    </section>
                </div>

                <section id="formulir" aria-labelledby="judul-formulir" className="scroll-mt-24">
                    <h2
                        id="judul-formulir"
                        className="font-display text-2xl font-medium text-forest-800"
                    >
                        Kirim pesan
                    </h2>
                    <div className="mt-6">
                        <ContactForm
                            key={defaultTopic}
                            endpoint={endpoint}
                            defaultTopic={defaultTopic}
                        />
                    </div>
                </section>
            </div>
        </Container>
    );
}
