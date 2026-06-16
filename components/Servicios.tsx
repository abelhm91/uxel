"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const servicios = [
  {
    name: "Landing Pages",
    desc: "Estructura, copy visual y CTAs que guían al visitante hacia la acción que importa.",
  },
  {
    name: "Tiendas Online",
    desc: "E-commerce en Shopify o WooCommerce, optimizado para la experiencia de compra en móvil.",
  },
  {
    name: "Webs Corporativas",
    desc: "Sitios que representan tu marca con fuerza: rápidos, accesibles y sin aspecto de plantilla.",
  },
];

export default function Servicios() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="servicios" className="px-6 md:px-12 py-24 bg-ink">
      <div className="mb-14">
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] max-w-[20ch] text-balance">
          Lo que puedo hacer por ti
        </h2>
        <p className="mt-4 max-w-[40ch] text-white/65 leading-relaxed">
          Sin paquetes genéricos. Cada proyecto parte de un briefing real y termina con un resultado concreto.
        </p>
      </div>

      <div>
        {servicios.map((s, i) => (
          <motion.div
            key={s.name}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center gap-8 py-7 border-t border-white/10"
            style={{
              borderBottom: i === servicios.length - 1 ? "1px solid rgba(255,255,255,0.10)" : undefined,
              cursor: "default",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Service name */}
            <span
              className="text-[clamp(1.7rem,3.8vw,2.8rem)] font-black tracking-[-0.035em] leading-none flex-1"
              style={{
                color: hovered === i ? "var(--color-accent)" : "#ffffff",
                transition: "color 180ms ease-out",
              }}
            >
              {s.name}
            </span>

            {/* Description — desktop only, fades in on hover */}
            <span
              className="hidden md:block text-sm text-white/55 max-w-[28ch] text-right leading-[1.65] flex-shrink-0"
              style={{
                opacity: hovered === i ? 1 : 0,
                transition: reduce ? "none" : "opacity 220ms ease-out",
              }}
            >
              {s.desc}
            </span>

            {/* Arrow */}
            <span
              aria-hidden="true"
              className="flex-shrink-0 text-xl"
              style={{
                color: hovered === i ? "var(--color-accent)" : "rgba(255,255,255,0.18)",
                transform: hovered === i ? "translateX(5px)" : "translateX(0)",
                transition: reduce ? "none" : "color 180ms ease-out, transform 200ms cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
