import Container from "../components/layout/Container.jsx";
import ArrowLink from "../components/ui/ArrowLink.jsx";
import ClosingCta from "../components/home/ClosingCta.jsx";
import { credits } from "../data/credits.js";
import { team } from "../data/team.js";
import { usePageTitle } from "../hooks/usePageTitle.js";
import { useScrollToHash } from "../hooks/useScrollToHash.js";

const harmonies = [
    { name: "Parahyangan", meaning: "Hubungan harmonis manusia dengan Tuhan", focus: false },
    { name: "Pawongan", meaning: "Hubungan harmonis manusia dengan sesama", focus: false },
    {
        name: "Palemahan",
        meaning: "Hubungan harmonis manusia dengan alam dan lingkungan",
        focus: true,
    },
];

const mission = [
    "Menyajikan pengetahuan lingkungan yang ringkas, berbobot, dan selalu bersumber.",
    "Menguji dan menguatkan pemahaman lewat kuis berbasis situasi sehari-hari.",
    "Mendorong kebiasaan nyata lewat tantangan kecil yang bisa dilakukan siapa saja.",
    "Menghubungkan isu lokal Bali dengan konteks Indonesia dan dunia.",
];

const pillars = [
    {
        name: "Learn",
        title: "Membaca",
        text: "Artikel ringkas yang dimulai dari kasus nyata di Bali, lengkap dengan fakta penting dan sumbernya.",
        to: "/jelajahi",
        cta: "Buka Pusat Belajar",
    },
    {
        name: "Test",
        title: "Menguji",
        text: "Eco Quiz berisi skenario sehari-hari dan mitos atau fakta. Setiap jawaban disertai penjelasan singkat, jadi salah pun tetap belajar.",
        to: "/kuis",
        cta: "Coba Eco Quiz",
    },
    {
        name: "Act",
        title: "Bertindak",
        text: "Eco Action memberi tantangan 7 hari, satu tugas kecil setiap hari, dengan runtun hari untuk membantu menjaga kebiasaan.",
        to: "/aksi",
        cta: "Mulai Eco Action",
    },
];

const values = [
    {
        title: "Dimulai dari yang dekat",
        text: "Setiap topik dibuka dari kasus nyata di Bali, supaya terasa relevan dan mudah dibayangkan.",
    },
    {
        title: "Bersumber dan bertanggal",
        text: "Angka dan fakta selalu mencantumkan sumber dan tahunnya. Untuk topik yang cepat berubah, kami menulis kronologi bertanggal dan tidak menarik kesimpulan sendiri.",
    },
    {
        title: "Singkat tapi berbobot",
        text: 'Artikel pendek, kotak "Singkatnya" untuk yang terburu-buru, dan penjelasan jawaban yang langsung ke inti.',
    },
    {
        title: "Dari tahu menjadi bertindak",
        text: "Setiap artikel berakhir dengan satu tindakan kecil yang bisa dicoba hari ini.",
    },
];

// Pembungkus bagian: label kecil, judul serif, lalu isi. Dipisah garis tipis dari bagian lain.
function Section({ id, label, title, children }) {
    return (
        <section
            id={id}
            aria-labelledby={`judul-${id}`}
            className="scroll-mt-24 border-t border-line py-14 lg:py-20"
        >
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.4fr] lg:gap-16">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                        {label}
                    </p>
                    <h2
                        id={`judul-${id}`}
                        className="mt-3 font-display text-h2 font-medium text-forest-800"
                    >
                        {title}
                    </h2>
                </div>
                <div>{children}</div>
            </div>
        </section>
    );
}

export default function About() {
    usePageTitle("Tentang");
    useScrollToHash();

    return (
        <>
            <Container className="py-12 lg:py-16">
                <header className="max-w-3xl pb-14 lg:pb-20">
                    <p className="text-xs font-semibold uppercase tracking-widest text-clay-600">
                        Tentang Palemahan
                    </p>
                    <h1 className="mt-3 font-display text-display font-medium tracking-tight text-forest-800">
                        Belajar dari alam yang paling dekat
                    </h1>
                    <p className="mt-6 text-xl leading-relaxed text-ink-muted">
                        Palemahan adalah platform edukasi lingkungan yang dimulai dari Bali. Kami
                        percaya tahu saja belum cukup, jadi setiap hal yang kamu pelajari di sini
                        berujung pada satu hal yang bisa kamu lakukan.
                    </p>
                </header>

                <Section id="latar" label="Latar belakang" title="Mengapa Palemahan ada">
                    <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-ink">
                        <p>
                            Informasi tentang lingkungan ada di mana-mana, tetapi sering terasa
                            jauh: angka besar, istilah rumit, dan kasus yang terjadi di tempat lain.
                            Padahal masalahnya bisa terlihat dari pantai, sungai, dan sawah di
                            sekitar kita sendiri.
                        </p>
                        <p>
                            Palemahan dibuat untuk pelajar, mahasiswa, dan generasi muda yang ingin
                            memahami isu lingkungan tanpa merasa kewalahan. Kami mulai dari Bali
                            karena dari sinilah kami melihat langsung, lalu menghubungkannya dengan
                            gambaran yang lebih luas di Indonesia dan dunia.
                        </p>
                        <p>
                            Situs ini dibuat sebagai karya untuk TECHNO VERSARY Vol. II dengan tema
                            EcoDigital For Environment, subtema Edukasi Lingkungan.
                        </p>
                    </div>
                </Section>

                <Section id="nama" label="Makna nama" title="Apa arti Palemahan?">
                    <div className="max-w-2xl text-lg leading-relaxed text-ink">
                        <p>
                            Palemahan adalah salah satu dari tiga unsur Tri Hita Karana, falsafah
                            hidup masyarakat Hindu Bali yang secara harfiah berarti tiga penyebab
                            kebahagiaan. Kata ini berakar dari "lemah" yang berarti tanah, alam,
                            atau lingkungan.
                        </p>
                    </div>
                    <ul className="mt-8 divide-y divide-line border-y border-line">
                        {harmonies.map((item) => (
                            <li
                                key={item.name}
                                className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6 ${
                                    item.focus ? "bg-sage-100 px-4" : "px-4"
                                }`}
                            >
                                <span className="font-display text-xl font-medium text-forest-800 sm:w-44">
                                    {item.name}
                                </span>
                                <span className="text-ink-muted">{item.meaning}</span>
                                {item.focus && (
                                    <span className="text-xs font-semibold uppercase tracking-widest text-clay-700 sm:ml-auto">
                                        Fokus kami
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted">
                        Kami memakai nama ini dengan hormat. Palemahan hanyalah satu bagian dari
                        kearifan yang lebih utuh, dan di sinilah kami memusatkan perhatian:
                        bagaimana kita menjaga tanah, air, dan makhluk hidup di sekitar kita.
                    </p>
                </Section>

                <Section id="visi" label="Visi dan misi" title="Arah yang kami tuju">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                            Visi
                        </p>
                        <p className="mt-3 font-display text-2xl leading-snug text-forest-800">
                            Generasi muda yang memahami lingkungannya dan terbiasa bertindak untuk
                            menjaganya, dimulai dari tempat tinggalnya sendiri.
                        </p>
                        <p className="mt-10 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                            Misi
                        </p>
                        <ol className="mt-4 space-y-4">
                            {mission.map((item, index) => (
                                <li
                                    key={item}
                                    className="flex gap-4 text-lg leading-relaxed text-ink"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="flex size-8 shrink-0 items-center justify-center rounded-full border border-forest-600 text-sm font-semibold text-forest-700"
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="pt-0.5">{item}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </Section>

                <Section id="cara" label="Cara belajar" title="Learn, Test, Act">
                    <ul className="max-w-2xl divide-y divide-line">
                        {pillars.map((pillar) => (
                            <li key={pillar.name} className="py-6 first:pt-0">
                                <p className="font-display text-3xl font-medium text-forest-800">
                                    {pillar.name}
                                    <span className="ml-3 text-lg font-normal text-ink-muted">
                                        {pillar.title}
                                    </span>
                                </p>
                                <p className="mt-3 text-lg leading-relaxed text-ink">
                                    {pillar.text}
                                </p>
                                <ArrowLink to={pillar.to} className="mt-4">
                                    {pillar.cta}
                                </ArrowLink>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-8 max-w-2xl leading-relaxed text-ink-muted">
                        Ketiganya dihubungkan oleh Peta Eco Bali: dari satu titik di peta, kamu bisa
                        membaca ceritanya, menguji pemahaman, lalu langsung mencoba aksi yang
                        terkait.
                    </p>
                    <ArrowLink to="/peta-bali" className="mt-3">
                        Jelajahi Peta Eco Bali
                    </ArrowLink>
                </Section>

                <Section id="nilai" label="Nilai dan pendekatan" title="Cara kami bekerja">
                    <dl className="grid max-w-3xl gap-x-10 gap-y-8 sm:grid-cols-2">
                        {values.map((item) => (
                            <div key={item.title}>
                                <dt className="font-display text-xl font-medium text-forest-800">
                                    {item.title}
                                </dt>
                                <dd className="mt-2 leading-relaxed text-ink-muted">{item.text}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
                        Situs ini dirancang agar bisa dipakai dengan keyboard, pembaca layar, dan
                        pengaturan "kurangi animasi" di perangkatmu.
                    </p>
                </Section>

                {team.length > 0 && (
                    <Section id="tim" label="Tim" title="Orang di balik Palemahan">
                        <ul className="grid max-w-2xl gap-6 sm:grid-cols-2">
                            {team.map((member) => (
                                <li key={member.name}>
                                    <p className="font-display text-xl font-medium text-forest-800">
                                        {member.name}
                                    </p>
                                    <p className="mt-1 text-ink-muted">{member.role}</p>
                                </li>
                            ))}
                        </ul>
                    </Section>
                )}

                <Section id="sumber" label="Transparansi" title="Sumber dan kredit">
                    <div className="max-w-2xl space-y-8">
                        {credits.map((group) => (
                            <div key={group.group}>
                                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                                    {group.group}
                                </h3>
                                <ul className="mt-3 space-y-2 leading-relaxed text-ink">
                                    {group.items.map((item) => (
                                        <li key={item.text}>
                                            {item.url ? (
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline decoration-clay-500 decoration-2 underline-offset-4"
                                                >
                                                    {item.text}
                                                    <span className="sr-only">
                                                        {" "}
                                                        (membuka tab baru)
                                                    </span>
                                                </a>
                                            ) : (
                                                item.text
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </Section>
            </Container>

            <ClosingCta />
        </>
    );
}
