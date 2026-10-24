import { motion } from "motion/react";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { ScribbleUnderline, HalftoneDots, DoodleStar } from "../components/Doodles";

const ITEMS = [
  {
    icon: GraduationCap,
    accent: "--color-violet",
    kind: "Education",
    title: "Integrated B.Tech + M.Tech, Computer Science",
    meta: "NIET, Greater Noida · 2022 – 2027 · CGPA 8/10",
    text: "Dual-degree programme with a focus on data structures, algorithms, DBMS, operating systems and computer networks.",
  },
  {
    icon: Award,
    accent: "--color-cyan",
    kind: "Certifications",
    title: "Coursera · 2023",
    meta: "Python Basics · Python for Data Science, AI & Development · Introduction to AI",
    text: "Completed three courses covering Python fundamentals, data science tooling and core artificial intelligence concepts.",
  },
  {
    icon: Trophy,
    accent: "--color-gold",
    kind: "Achievements",
    title: "LeetCode Knight · 1,825 contest rating",
    meta: "605 solved (190 Easy · 302 Medium · 113 Hard) · Global rank 64,478 · Top 7.41%",
    text: "365-day max streak with 1,046 submissions in the past year, 26 contests attended and 19 badges including the 365 Days Badge.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-20 md:px-12">
      <HalftoneDots className="pointer-events-none absolute left-2 top-6 h-24 w-40 text-(--color-gold) opacity-25 md:left-10" />
      <DoodleStar className="pointer-events-none absolute right-[6%] top-10 h-5 w-5 text-(--color-coral) opacity-70" />
      <div className="mx-auto max-w-6xl">
        <p className="font-display text-sm font-extrabold uppercase tracking-widest text-(--color-accent)">
          &#9673; Journey
        </p>
        <h2 className="relative mt-2 inline-block font-display text-3xl font-extrabold tracking-tight md:text-4xl">
          Education &amp; achievements
          <ScribbleUnderline className="absolute -bottom-2 left-0 h-3 w-full text-(--color-gold)" />
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {ITEMS.map(({ icon: Icon, accent, kind, title, meta, text }) => (
            <motion.div
              key={title}
              initial={{ y: 24 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border-2 border-dashed border-(--color-ink)/15 bg-(--color-canvas-raised) p-6 shadow-[6px_8px_0_0_oklch(0.10_0.03_290)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: `var(${accent})` }}>
                  <Icon size={18} className="text-(--color-canvas)" />
                </span>
                <span className="font-display text-xs font-extrabold uppercase tracking-widest text-(--color-ink)/60">{kind}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-extrabold tracking-tight">{title}</h3>
              <p className="mt-1 text-sm text-(--color-accent)">{meta}</p>
              <p className="mt-3 text-(--color-ink)/80">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
