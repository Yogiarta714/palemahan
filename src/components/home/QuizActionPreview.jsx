import Container from "../layout/Container.jsx";
import SectionHeading from "../ui/SectionHeading.jsx";
import Button from "../ui/Button.jsx";
import Reveal from "../ui/Reveal.jsx";
import { quizzes } from "../../data/quizzes.js";
import { challenges } from "../../data/challenges.js";

const letters = ["A", "B", "C", "D"];
const previewDays = 3;

export default function QuizActionPreview() {
    const question = quizzes[0]?.questions[0];
    const challenge = challenges[0];

    return (
        <section aria-labelledby="judul-uji-aksi" className="bg-sage-50 py-20 lg:py-28">
            <Container>
                <SectionHeading
                    label="Uji dan beraksi"
                    title="Pengetahuan baru berarti kalau dipakai"
                    titleId="judul-uji-aksi"
                />

                <div className="mt-12 grid gap-14 lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line">
                    {question && (
                        <Reveal className="lg:pr-14">
                            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                                Eco Quiz · contoh soal
                            </p>
                            <p className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">
                                {question.prompt}
                            </p>
                            <ol className="mt-6 space-y-3">
                                {question.options.map((option, index) => (
                                    <li
                                        key={option}
                                        className="flex items-start gap-3 rounded-lg border border-line bg-ivory p-4"
                                    >
                                        <span
                                            aria-hidden="true"
                                            className="flex size-7 shrink-0 items-center justify-center rounded-full border border-forest-600 text-xs font-semibold text-forest-700"
                                        >
                                            {letters[index]}
                                        </span>
                                        <span className="text-sm leading-relaxed text-ink">
                                            {option}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                            <Button to="/kuis" className="mt-8">
                                Mulai Eco Quiz
                            </Button>
                        </Reveal>
                    )}

                    {challenge && (
                        <Reveal delay={0.1} className="lg:pl-14">
                            <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">
                                Eco Action · tantangan 7 hari
                            </p>
                            <p className="mt-4 font-display text-2xl font-medium leading-snug text-forest-800">
                                {challenge.title}
                            </p>
                            <p className="mt-3 text-ink-muted">{challenge.description}</p>
                            <ol className="mt-6 space-y-4">
                                {challenge.days.slice(0, previewDays).map((item) => (
                                    <li key={item.day} className="flex items-start gap-4">
                                        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-sage-200 text-sm font-semibold text-forest-800">
                                            {item.day}
                                        </span>
                                        <span className="pt-1.5 text-sm leading-relaxed text-ink">
                                            {item.task}
                                        </span>
                                    </li>
                                ))}
                            </ol>
                            {challenge.days.length > previewDays && (
                                <p className="mt-4 text-sm text-ink-muted">
                                    dan {challenge.days.length - previewDays} hari lainnya
                                </p>
                            )}
                            <Button to="/aksi" variant="outline" className="mt-8">
                                Lihat Tantangan
                            </Button>
                        </Reveal>
                    )}
                </div>
            </Container>
        </section>
    );
}
