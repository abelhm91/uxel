"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const proyectos = [
  {
    id: 1,
    seed: "saas-landing-hero",
    w: 1200, h: 420,
    tag: "Landing Page · SaaS",
    title: "Plataforma de gestion para startups",
    alt: "Captura de pantalla de plataforma SaaS con dashboard de gestion para startups",
    featured: true,
  },
  {
    id: 2,
    seed: "ecommerce-fashion",
    w: 600, h: 450,
    tag: "E-commerce · Moda",
    title: "Tienda de moda sostenible",
    alt: "Tienda online de moda sostenible con cuadricula de productos y filtros de categoria",
    featured: false,
  },
  {
    id: 3,
    seed: "architecture-studio",
    w: 600, h: 450,
    tag: "Corporativa · Arquitectura",
    title: "Estudio de arquitectura Madrid",
    alt: "Web corporativa de estudio de arquitectura con proyectos residenciales en Madrid",
    featured: false,
  },
];

export default function Portfolio() {
  const reduce = useReducedMotion();

  return (
    <section id="portfolio" className="px-6 md:px-12 py-24 bg-ink">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="flex justify-between items-end mb-12 flex-wrap gap-4"
      >
        <div>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] text-balance">
            Trabajos seleccionados
          </h2>
        </div>
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
        className="grid grid-cols-1 md:grid-cols-2 gap-[1.5px]"
        style={{ background: "rgba(255,255,255,0.08)" }}
      >
        {proyectos.map((p, i) => (
          <motion.div
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
            className={`relative overflow-hidden cursor-pointer group ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden ${p.featured ? "aspect-[4/3] md:aspect-[16/7]" : "aspect-[4/3]"}`}>
              <Image
                src={`https://picsum.photos/seed/${p.seed}/${p.w}/${p.h}`}
                alt={p.alt}
                fill
                sizes={p.featured ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                className="object-cover group-hover:scale-[1.03]"
                style={{ transition: "transform 200ms cubic-bezier(0.23,1,0.32,1)" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
              >
                <div>
                  <span className="font-mono text-[0.7rem] text-white/50 tracking-[0.06em] uppercase block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-base font-bold tracking-[-0.02em] text-white">{p.title}</h3>
                </div>
                <div
                  className="w-9 h-9 border border-white/30 rounded-full flex items-center justify-center text-white text-base flex-shrink-0 group-hover:bg-accent group-hover:border-accent group-hover:text-ink"
                  style={{ transition: "background-color 200ms ease-out, border-color 200ms ease-out, color 200ms ease-out" }}
                >
                  &rarr;
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
