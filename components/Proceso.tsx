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
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] mb-16 text-balance">
          Del briefing al lanzamiento en cuatro pasos
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">

        {/* Línea que se dibuja de izquierda a derecha */}
        <motion.div
          className="hidden md:block absolute top-[22px] left-[22px] right-[22px] h-px origin-left"
          style={{ background: "rgba(0,0,0,0.12)" }}
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
        />

        {pasos.map((p, i) => (
          <motion.div
            key={p.num}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Círculo numerado con pop */}
            <motion.div
              className="w-11 h-11 rounded-full bg-ink text-accent font-mono text-xs font-medium flex items-center justify-center mb-6 relative z-10"
              initial={reduce ? false : { scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 + 0.15, ease: [0.23, 1, 0.32, 1] }}
            >
              {p.num}
            </motion.div>

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
