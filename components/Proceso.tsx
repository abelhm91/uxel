"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChatCircle, PencilLine, Code, RocketLaunch } from "@phosphor-icons/react";

const pasos = [
  {
    num: "01",
    title: "Briefing",
    desc: "Entiendo tu negocio, audiencia y objetivos antes de abrir ningún programa de diseño.",
    Icon: ChatCircle,
    detail: "Llamada o formulario · ~30 min",
  },
  {
    num: "02",
    title: "Propuesta visual",
    desc: "Entrego una dirección de diseño para validar antes de desarrollar la web completa.",
    Icon: PencilLine,
    detail: "Moodboard + primera pantalla",
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Construyo la web con código limpio o CMS según tus necesidades, con revisiones incluidas.",
    Icon: Code,
    detail: "Next.js · WordPress · Shopify",
  },
  {
    num: "04",
    title: "Lanzamiento",
    desc: "Publicamos, optimizamos velocidad y SEO técnico. Soporte post-lanzamiento incluido.",
    Icon: RocketLaunch,
    detail: "Deploy · velocidad · SEO",
  },
];

export default function Proceso() {
  const reduce = useReducedMotion();
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="proceso"
      className="px-6 md:px-12 py-24 relative overflow-hidden bg-surface"
      style={{ color: "var(--color-ink)" }}
    >
      {/* Header */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="mb-12"
      >
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] text-balance">
          Sin sorpresas. Sin retrasos. Así trabajo.
        </h2>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {pasos.map((p, i) => (
          <motion.div
            key={p.num}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-2xl p-6 flex flex-col overflow-hidden cursor-default"
            style={{
              background: "var(--color-ink)",
              border: `1px solid ${hovered === i ? "var(--color-accent)" : "rgba(255,255,255,0.06)"}`,
              transform: hovered === i && !reduce ? "translateY(-4px)" : "translateY(0)",
              transition: reduce ? "none" : "border-color 250ms ease-out, transform 250ms cubic-bezier(0.23,1,0.32,1), box-shadow 250ms ease-out",
              boxShadow: hovered === i ? "0 20px 48px rgba(0,0,0,0.3)" : "0 4px 16px rgba(0,0,0,0.12)",
              minHeight: 220,
            }}
          >
            {/* Big decorative number */}
            <div
              className="absolute bottom-2 right-3 font-black font-mono leading-none select-none pointer-events-none"
              style={{
                fontSize: "clamp(5rem,8vw,7rem)",
                color: "rgba(255,255,255,0.04)",
                transition: reduce ? "none" : "color 250ms ease-out",
                ...(hovered === i ? { color: "rgba(255,255,255,0.07)" } : {}),
              }}
            >
              {p.num}
            </div>

            {/* Icon */}
            <motion.div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
              style={{
                background: hovered === i ? "var(--color-accent)" : "rgba(255,255,255,0.08)",
                transition: reduce ? "none" : "background 250ms ease-out",
              }}
              initial={reduce ? false : { scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 + 0.18, ease: [0.23, 1, 0.32, 1] }}
            >
              <p.Icon
                size={18}
                weight="bold"
                style={{
                  color: hovered === i ? "var(--color-ink)" : "var(--color-accent)",
                  transition: reduce ? "none" : "color 250ms ease-out",
                }}
              />
            </motion.div>

            {/* Content */}
            <h3 className="text-base font-bold tracking-[-0.02em] mb-2 text-white relative z-10">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed relative z-10" style={{ color: "rgba(255,255,255,0.55)" }}>
              {p.desc}
            </p>

            {/* Detail tag */}
            <div className="mt-auto pt-5 relative z-10">
              <span
                className="font-mono text-[0.6rem] tracking-wide uppercase px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.35)",
                }}
              >
                {p.detail}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
