"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const proyectos = [
  {
    id: 1,
    seed: "saas-landing-hero",
    w: 600, h: 600,
    tag: "Landing Page · SaaS",
    title: "Plataforma de gestion para startups",
    alt: "Plataforma SaaS con dashboard de gestion para startups",
  },
  {
    id: 2,
    seed: "ecommerce-fashion",
    w: 600, h: 600,
    tag: "E-commerce · Moda",
    title: "Tienda de moda sostenible",
    alt: "Tienda online de moda sostenible con cuadricula de productos",
  },
  {
    id: 3,
    seed: "architecture-studio",
    w: 600, h: 600,
    tag: "Corporativa · Arquitectura",
    title: "Estudio de arquitectura Madrid",
    alt: "Web corporativa de estudio de arquitectura en Madrid",
  },
  {
    id: 4,
    seed: "startup-dashboard",
    w: 600, h: 600,
    tag: "App · Dashboard",
    title: "Panel de analítica para SaaS",
    alt: "Dashboard de analítica con graficos y metricas para SaaS",
  },
  {
    id: 5,
    seed: "brand-identity",
    w: 600, h: 600,
    tag: "Branding · Digital",
    title: "Identidad digital para agencia",
    alt: "Web de agencia con identidad visual moderna",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // Duplicate for seamless infinite loop
  const doubled = [...proyectos, ...proyectos];

  return (
    <section id="portfolio" className="py-24 bg-ink overflow-hidden">
      {/* Header */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="px-6 md:px-12 flex justify-between items-end mb-10 flex-wrap gap-4"
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

      {/* Scroll strip */}
      <div
        className="portfolio-strip relative w-full"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
          maskImage: "linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div className={`animate-marquee-img flex gap-4 w-max ${reduce ? "![animation:none]" : ""}`}>
          {doubled.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="flex-shrink-0 w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden relative cursor-pointer"
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Image
                src={`https://picsum.photos/seed/${p.seed}/600/600`}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 224px, 288px"
                className="object-cover"
                style={{
                  transform: hoveredId === p.id ? "scale(1.06)" : "scale(1)",
                  transition: reduce ? "none" : "transform 400ms cubic-bezier(0.23,1,0.32,1)",
                }}
              />

              {/* Yellow tint — fades out on hover */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "#000000",
                  mixBlendMode: "color",
                  opacity: hoveredId === p.id ? 0 : 1,
                  transition: reduce ? "none" : "opacity 400ms cubic-bezier(0.23,1,0.32,1)",
                }}
              />

              {/* Info overlay — fades in on hover */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
                  opacity: hoveredId === p.id ? 1 : 0,
                  transition: reduce ? "none" : "opacity 300ms ease-out",
                }}
              >
                <span className="font-mono text-[0.6rem] text-white/50 tracking-[0.07em] uppercase block mb-1">
                  {p.tag}
                </span>
                <p className="text-sm font-bold text-white leading-tight tracking-[-0.01em]">
                  {p.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
