"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const services = ["Landing Pages", "E-commerce", "Corporativas"];

function ServiceRotator() {
  const [idx, setIdx] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % services.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="hidden md:flex flex-col justify-center pl-16 border-l border-white/6">
      <p className="font-mono text-[0.65rem] tracking-[0.12em] text-white/25 uppercase mb-8 tabular-nums">
        {String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
      </p>

      <div style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <motion.p
            key={idx}
            className="font-mono font-medium leading-[1] tracking-[-0.02em] text-accent"
            style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.2rem)" }}
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -40 }}
            transition={
              reduce
                ? { duration: 0.15 }
                : { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
            }
          >
            {services[idx]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="flex gap-1.5 mt-10">
        {services.map((_, i) => (
          <div
            key={i}
            className="h-px flex-1"
            style={{
              background: i === idx ? "var(--color-accent)" : "rgba(255,255,255,0.12)",
              transition: "background 400ms ease-out",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="main-content"
      className="min-h-[100dvh] grid grid-cols-1 md:grid-cols-2 gap-0 px-6 md:px-12 items-center relative overflow-hidden"
    >
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-subtle) 0%, transparent 70%)" }}
      />

      {/* Left */}
      <div className="max-w-[560px] animate-fade-in-up py-24 md:py-0">
        <div
          className="inline-flex items-center gap-2 text-accent font-mono text-xs px-3 py-1.5 rounded-full mb-7 border border-accent/25"
          style={{ background: "var(--color-accent-subtle)" }}
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
          Disponible para proyectos
        </div>

        <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.03] tracking-[-0.04em] mb-6 text-balance">
          Diseño web que{" "}
          <em className="not-italic text-accent">convierte</em>{" "}
          visitas en clientes
        </h1>

        <p className="text-lg text-white/70 leading-[1.65] max-w-[42ch] mb-10">
          Creo sitios web a medida para marcas y negocios que quieren destacar
          online. Rapidos, bonitos y que venden.
        </p>

        <div className="flex flex-wrap gap-4 items-center">
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-accent text-ink font-bold text-base px-8 py-3.5 rounded-full cursor-pointer whitespace-nowrap active:scale-[0.97]"
            style={{ transition: "background-color 160ms cubic-bezier(0.23,1,0.32,1), transform 160ms cubic-bezier(0.23,1,0.32,1)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent-dark)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
          >
            Empezar proyecto
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="bg-transparent text-white/70 border border-white/20 text-base px-7 py-3.5 rounded-full cursor-pointer font-medium active:scale-[0.97]"
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
            Ver trabajos
          </button>
        </div>
      </div>

      {/* Right — service rotator */}
      <ServiceRotator />
    </section>
  );
}
