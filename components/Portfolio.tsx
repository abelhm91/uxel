"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const proyectos = [
  {
    id: 1,
    seed: "saas-landing-hero",
    w: 800, h: 600,
    tag: "Landing Page · SaaS",
    title: "Plataforma de gestion para startups",
    alt: "Captura de pantalla de plataforma SaaS con dashboard de gestion para startups",
  },
  {
    id: 2,
    seed: "ecommerce-fashion",
    w: 800, h: 600,
    tag: "E-commerce · Moda",
    title: "Tienda de moda sostenible",
    alt: "Tienda online de moda sostenible con cuadricula de productos y filtros de categoria",
  },
  {
    id: 3,
    seed: "architecture-studio",
    w: 800, h: 600,
    tag: "Corporativa · Arquitectura",
    title: "Estudio de arquitectura Madrid",
    alt: "Web corporativa de estudio de arquitectura con proyectos residenciales en Madrid",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 bg-ink">
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="flex justify-between items-end mb-10 flex-wrap gap-4"
      >
        <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] text-balance">
          Trabajos seleccionados
        </h2>
        <button
          className="bg-transparent text-white/70 border border-white/20 text-sm px-5 py-2.5 rounded-full font-medium cursor-pointer active:scale-[0.97]"
          style={{ transition: "border-color 160ms ease-out, color 160ms ease-out, transform 160ms cubic-bezier(0.23,1,0.32,1)" }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
            e.currentTarget.style.color = "#ffffff";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
          }}
        >
          Ver todos
        </button>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[2px]"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        {proyectos.map((p, i) => (
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
            className="relative aspect-[4/3] overflow-hidden cursor-pointer group bg-ink"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={`https://picsum.photos/seed/${p.seed}/${p.w}/${p.h}`}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
              style={{
                transform: hovered === p.id ? "scale(1.04)" : "scale(1)",
                transition: reduce ? "none" : "transform 400ms cubic-bezier(0.23,1,0.32,1)",
              }}
            />

            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 55%, transparent 100%)",
                opacity: hovered === p.id ? 1 : 0,
                transition: reduce ? "none" : "opacity 260ms ease-out",
              }}
            />

            {/* Text */}
            <div
              className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end"
              style={{
                opacity: hovered === p.id ? 1 : 0,
                transform: hovered === p.id ? "translateY(0)" : "translateY(6px)",
                transition: reduce ? "none" : "opacity 260ms ease-out, transform 300ms cubic-bezier(0.23,1,0.32,1)",
              }}
            >
              <div>
                <span className="font-mono text-[0.65rem] text-white/50 tracking-[0.07em] uppercase block mb-1">
                  {p.tag}
                </span>
                <h3 className="text-sm font-bold tracking-[-0.02em] text-white leading-tight">
                  {p.title}
                </h3>
              </div>
              <div
                className="w-8 h-8 border border-white/30 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 ml-3"
                style={{
                  background: "var(--color-accent)",
                  borderColor: "var(--color-accent)",
                  color: "var(--color-ink)",
                }}
              >
                →
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
