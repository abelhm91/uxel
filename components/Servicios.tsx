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
          Tres servicios. Un solo objetivo.
        </h2>
        <p className="mt-4 max-w-[40ch] text-white/65 leading-relaxed">
          Sin plantillas, sin paquetes cerrados. Cada proyecto empieza desde cero y termina cuando funciona de verdad.
        </p>
      </div>

      <div>
        {servicios.map((s, i) => (
          <motion.div
            key={s.name}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="border-t border-white/10"
            style={{
              borderBottom: i === servicios.length - 1 ? "1px solid rgba(255,255,255,0.10)" : undefined,
              cursor: "default",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Desktop: nombre + descripción en hover + flecha */}
            <div className="hidden md:flex items-center gap-8 py-7">
              <span
                className="text-[clamp(1.7rem,3.8vw,2.8rem)] font-black tracking-[-0.035em] leading-none flex-1"
                style={{
                  color: hovered === i ? "var(--color-accent)" : "#ffffff",
                  transition: "color 180ms ease-out",
                }}
              >
                {s.name}
              </span>
              <span
                className="text-sm text-white/55 max-w-[28ch] text-right leading-[1.65] flex-shrink-0"
                style={{
                  opacity: hovered === i ? 1 : 0,
                  transition: reduce ? "none" : "opacity 220ms ease-out",
                }}
              >
                {s.desc}
              </span>
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
            </div>

            {/* Móvil: nombre + descripción siempre visible */}
            <div className="md:hidden py-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[1.5rem] font-black tracking-[-0.03em] leading-none">
                  {s.name}
                </span>
                <span aria-hidden="true" className="text-base text-white/25 flex-shrink-0 ml-3">→</span>
              </div>
              <p className="text-sm text-white/50 leading-[1.65]">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
