"use client";

import { motion, useReducedMotion } from "motion/react";

const pasos = [
  {
    num: "01",
    title: "Briefing",
    desc: "Entiendo tu negocio, audiencia y objetivos antes de abrir ningun programa de diseno.",
  },
  {
    num: "02",
    title: "Propuesta visual",
    desc: "Entregamos una direccion de diseno para validar antes de desarrollar la web completa.",
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Construyo la web con codigo limpio o CMS segun tus necesidades, con revisiones iterativas.",
  },
  {
    num: "04",
    title: "Lanzamiento",
    desc: "Publicamos, optimizamos velocidad y SEO tecnico. Soporte post-lanzamiento incluido.",
  },
];

export default function Proceso() {
  const reduce = useReducedMotion();

  return (
    <section
      id="proceso"
      className="px-6 md:px-12 py-24 relative overflow-hidden bg-surface"
      style={{ color: "var(--color-ink)" }}
    >
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] mb-16 text-balance">
          Del briefing al lanzamiento en cuatro pasos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-[22px] left-[22px] right-[22px] h-px bg-black/12" />

        {pasos.map((p, i) => (
          <motion.div
            key={p.num}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="w-11 h-11 rounded-full bg-ink text-accent font-mono text-xs font-medium flex items-center justify-center mb-6 relative z-10">
              {p.num}
            </div>
            <h3 className="text-base font-bold tracking-[-0.02em] mb-2 text-ink">
              {p.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
