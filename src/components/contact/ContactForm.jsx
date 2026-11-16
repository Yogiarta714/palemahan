import { useRef, useState } from "react";
import { Check } from "lucide-react";
import Button from "../ui/Button.jsx";
import { contact, topics } from "../../data/contact.js";
import { validateContact } from "../../lib/contactValidation.js";

const fieldClass =
    "mt-2 w-full rounded-xl border bg-ivory px-4 text-base text-ink placeholder:text-ink-muted";

function Field({ id, label, error, children }) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-semibold text-forest-800">
                {label}
            </label>
            {children}
            {error && (
                <p id={`${id}-galat`} className="mt-2 text-sm font-medium text-clay-700">
                    {error}
                </p>
            )}
        </div>
    );
}

// Formulir kontak. endpoint: alamat Formspree. Kalau kosong, formulir menawarkan jalur email.
export default function ContactForm({ endpoint, defaultTopic = topics[0] }) {
    const empty = { name: "", email: "", topic: defaultTopic, message: "" };
    const [values, setValues] = useState(empty);
    const [errors, setErrors] = useState({});
    const [trap, setTrap] = useState(""); // kolom jebakan untuk bot (honeypot)
    const [status, setStatus] = useState("idle"); // idle | sending | success | error | fallback

    const refs = { name: useRef(null), email: useRef(null), message: useRef(null) };

    function update(field) {
        return (event) => setValues((current) => ({ ...current, [field]: event.target.value }));
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const found = validateContact(values);
        setErrors(found);
        const firstInvalid = ["name", "email", "message"].find((field) => found[field]);
        if (firstInvalid) {
            refs[firstInvalid].current?.focus();
            return;
        }

        // Bot biasanya mengisi kolom tersembunyi
        if (trap) {
            setStatus("success");
            return;
        }

        // Tanpa alamat Formspree, tawarkan jalur email biasa.
        if (!endpoint) {
            setStatus(contact.email ? "fallback" : "error");
            return;
        }

        setStatus("sending");
        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setStatus("success");
                setValues(empty);
                setErrors({});
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div role="status" className="rounded-xl bg-sage-100 p-8">
                <p className="flex items-center gap-2 font-display text-2xl font-medium text-forest-800">
                    <Check aria-hidden="true" className="size-6 text-forest-600" />
                    Terima kasih!
                </p>
                <p className="mt-3 leading-relaxed text-ink">
                    Pesanmu sudah terkirim. Kami akan membalas lewat email yang kamu tulis.
                </p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
                    Kirim pesan lain
                </Button>
            </div>
        );
    }

    const sending = status === "sending";
    const mailto = contact.email
        ? `mailto:${contact.email}?subject=${encodeURIComponent(`[Palemahan] ${values.topic}`)}&body=${encodeURIComponent(
                `${values.message}\n\nDari: ${values.name} (${values.email})`,
            )}`
        : "";

    return (
        <form onSubmit={handleSubmit} noValidate aria-busy={sending} className="space-y-6">
            <Field id="nama" label="Nama" error={errors.name}>
                <input
                    ref={refs.name}
                    id="nama"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={update("name")}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "nama-galat" : undefined}
                    className={`${fieldClass} h-12 ${errors.name ? "border-clay-600" : "border-line"}`}
                />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
                <input
                    ref={refs.email}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update("email")}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-galat" : undefined}
                    className={`${fieldClass} h-12 ${errors.email ? "border-clay-600" : "border-line"}`}
                />
            </Field>

            <Field id="keperluan" label="Keperluan">
                <select
                    id="keperluan"
                    name="topic"
                    value={values.topic}
                    onChange={update("topic")}
                    className={`${fieldClass} h-12 border-line`}
                >
                    {topics.map((topic) => (
                        <option key={topic} value={topic}>
                            {topic}
                        </option>
                    ))}
                </select>
            </Field>

            <Field id="pesan" label="Pesan" error={errors.message}>
                <textarea
                    ref={refs.message}
                    id="pesan"
                    name="message"
                    rows={6}
                    value={values.message}
                    onChange={update("message")}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "pesan-galat" : undefined}
                    className={`${fieldClass} py-3 ${errors.message ? "border-clay-600" : "border-line"}`}
                />
            </Field>

            {/* Kolom jebakan: tidak terlihat dan tidak bisa dijangkau pengguna, hanya terisi oleh bot. */}
            <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={trap}
                onChange={(event) => setTrap(event.target.value)}
                className="sr-only"
            />

            <Button type="submit" disabled={sending}>
                {sending ? "Mengirim…" : "Kirim pesan"}
            </Button>

            {status === "error" && (
                <p role="alert" className="text-sm leading-relaxed text-clay-700">
                    Pesan belum terkirim. Periksa koneksimu lalu coba lagi
                    {contact.email ? (
                        <>
                            , atau kirim langsung ke{" "}
                            <a href={mailto} className="font-semibold underline underline-offset-4">
                                {contact.email}
                            </a>
                        </>
                    ) : null}
                    .
                </p>
            )}

            {status === "fallback" && (
                <p role="status" className="text-sm leading-relaxed text-ink">
                    Formulir ini belum tersambung ke server. Kirim pesanmu lewat email:{" "}
                    <a href={mailto} className="font-semibold underline underline-offset-4">
                        buka aplikasi email
                    </a>
                    .
                </p>
            )}
        </form>
    );
}
