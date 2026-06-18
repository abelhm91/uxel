"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { X } from "@phosphor-icons/react";

const proyectos = [
  {
    id: 1,
    num: "01",
    title: "Plataforma de gestión SaaS",
    category: "Landing Page",
    seed: "saas-landing-hero",
    alt: "Plataforma SaaS con dashboard de gestión para startups",
  },
  {
    id: 2,
    num: "02",
    title: "Tienda de moda sostenible",
    category: "E-commerce",
    seed: "ecommerce-fashion",
    alt: "Tienda online de moda sostenible",
  },
  {
    id: 3,
    num: "03",
    title: "Estudio de arquitectura Madrid",
    category: "Corporativa",
    seed: "architecture-studio",
    alt: "Web corporativa de estudio de arquitectura en Madrid",
  },
  {
    id: 4,
    num: "04",
    title: "Panel de analítica para SaaS",
    category: "App · Dashboard",
    seed: "startup-dashboard",
    alt: "Dashboard de analítica con métricas para SaaS",
  },
  {
    id: 5,
    num: "05",
    title: "Identidad digital para agencia",
    category: "Branding · Web",
    seed: "brand-identity",
    alt: "Web de agencia con identidad visual moderna",
  },
];

export default function Portfolio() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<typeof proyectos[0] | null>(null);
  const reduce = useReducedMotion();

  const activeProject = proyectos.find(p => p.id === hoveredId) ?? null;

  // Lock scroll when modal is open
  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [modalProject]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalProject(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <section id="portfolio" className="bg-ink overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-24 pb-0">

        {/* Header */}
        <motion.h2
          className="text-[clamp(2rem,3.5vw,3rem)] font-black tracking-[-0.04em] leading-[1.1] text-balance mb-12"
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          Trabajos seleccionados
        </motion.h2>

        {/* Split layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-16 items-start">

          {/* Left — project list */}
          <div>
            {proyectos.map((p, i) => (
              <motion.div
                key={p.id}
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
                onMouseEnter={() => setHoveredId(p.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setModalProject(p)}
                className="group flex items-center justify-between py-5 cursor-pointer relative"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.07)" : "none",
                }}
              >
                {/* Accent line on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-px origin-top"
                  style={{
                    background: "var(--color-accent)",
                    transform: hoveredId === p.id ? "scaleY(1)" : "scaleY(0)",
                    transition: reduce ? "none" : "transform 250ms cubic-bezier(0.23,1,0.32,1)",
                  }}
                />

                <div className="flex items-center gap-6 pl-4">
                  <span
                    className="font-mono text-xs tabular-nums w-6 flex-shrink-0"
                    style={{
                      color: hoveredId === p.id ? "var(--color-accent)" : "rgba(255,255,255,0.2)",
                      transition: reduce ? "none" : "color 200ms ease-out",
                    }}
                  >
                    {p.num}
                  </span>
                  <span
                    className="font-black tracking-[-0.03em] leading-tight"
                    style={{
                      fontSize: "clamp(1.1rem,2.2vw,1.6rem)",
                      color: hoveredId === p.id ? "#ffffff" : "rgba(255,255,255,0.7)",
                      transform: hoveredId === p.id && !reduce ? "translateX(6px)" : "translateX(0)",
                      transition: reduce ? "none" : "color 200ms ease-out, transform 250ms cubic-bezier(0.23,1,0.32,1)",
                      display: "inline-block",
                    }}
                  >
                    {p.title}
                  </span>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="hidden sm:block font-mono text-[0.65rem] tracking-[0.06em] uppercase"
                    style={{
                      color: hoveredId === p.id ? "var(--color-accent)" : "rgba(255,255,255,0.25)",
                      transition: reduce ? "none" : "color 200ms ease-out",
                    }}
                  >
                    {p.category}
                  </span>
                  <span
                    style={{
                      color: hoveredId === p.id ? "var(--color-accent)" : "rgba(255,255,255,0.15)",
                      transform: hoveredId === p.id && !reduce ? "translateX(4px)" : "translateX(0)",
                      transition: reduce ? "none" : "color 200ms ease-out, transform 250ms cubic-bezier(0.23,1,0.32,1)",
                      display: "inline-block",
                      fontSize: "1.1rem",
                    }}
                  >
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — sticky image panel (desktop only) */}
          <div className="hidden md:block sticky top-12 h-[420px]">
            <AnimatePresence mode="wait">
              {activeProject ? (
                <motion.div
                  key={activeProject.id}
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                  initial={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <Image
                    src={`https://picsum.photos/seed/${activeProject.seed}/800/600`}
                    alt={activeProject.alt}
                    fill
                    sizes="560px"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="font-mono text-[0.65rem] tracking-[0.08em] uppercase px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(0,0,0,0.6)",
                        backdropFilter: "blur(8px)",
                        color: "var(--color-accent)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {activeProject.category}
                    </span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="w-full h-full rounded-2xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ background: "#0d0d0d", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-center gap-3 px-5 py-3.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.03)" }}>
                    <div className="flex gap-1.5">
                      {[0,1,2].map(i => <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }} />)}
                    </div>
                    <div className="flex-1 h-5 rounded-md flex items-center px-3 font-mono text-[0.6rem] text-white/20" style={{ background: "rgba(255,255,255,0.04)" }}>
                      abelwp.es/proyectos
                    </div>
                  </div>
                  <div className="flex flex-col h-[calc(100%-44px)]">
                    <div className="px-6 pt-6 pb-5">
                      <div className="h-2.5 rounded-full bg-white mb-2" style={{ width: "55%" }} />
                      <div className="h-2.5 rounded-full mb-4" style={{ width: "38%", background: "var(--color-accent)" }} />
                      <div className="h-1 rounded bg-white/10 mb-1.5" style={{ width: "90%" }} />
                      <div className="h-1 rounded bg-white/10 mb-5" style={{ width: "70%" }} />
                      <div className="flex gap-2">
                        <div className="h-7 w-20 rounded-full" style={{ background: "var(--color-accent)" }} />
                        <div className="h-7 w-16 rounded-full border border-white/15" />
                      </div>
                    </div>
                    <div className="px-6 flex flex-col gap-0 flex-1">
                      {["Plataforma SaaS","Tienda de moda","Estudio arq."].map((name, i) => (
                        <div key={i} className="flex items-center justify-between py-3" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-[0.5rem] text-white/20">0{i+1}</span>
                            <div className="h-1.5 rounded-full" style={{ width: `${[90,72,110][i]}px`, background: i === 0 ? "var(--color-accent)" : "rgba(255,255,255,0.2)" }} />
                          </div>
                          <div className="h-1 rounded" style={{ width: 30, background: "rgba(255,255,255,0.08)" }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
      <div className="pb-24" />

      {/* Mobile modal */}
      <AnimatePresence>
        {modalProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50"
              style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setModalProject(null)}
            />

            {/* Modal card */}
            <motion.div
              className="fixed inset-x-4 bottom-4 z-50 rounded-2xl overflow-hidden"
              style={{ background: "#111" }}
              initial={reduce ? undefined : { opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Image */}
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={`https://picsum.photos/seed/${modalProject.seed}/800/450`}
                  alt={modalProject.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                {/* Close button */}
                <button
                  onClick={() => setModalProject(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
                  aria-label="Cerrar"
                >
                  <X size={16} weight="bold" className="text-white" />
                </button>
              </div>

              {/* Info */}
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[0.6rem] tracking-widest uppercase mb-1" style={{ color: "var(--color-accent)" }}>
                    {modalProject.category}
                  </p>
                  <h3 className="font-black tracking-[-0.03em] text-white text-lg leading-tight">
                    {modalProject.title}
                  </h3>
                </div>
                <span className="text-white/20 text-2xl font-black font-mono">{modalProject.num}</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
