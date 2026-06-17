"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="hidden md:flex items-center justify-end"
      initial={reduce ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative w-full max-w-[460px]">

        {/* Browser mockup card */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.55)",
          }}
        >
          {/* Browser chrome bar */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(255,255,255,0.12)" }} />
            </div>
            <div
              className="flex-1 h-5 rounded-md flex items-center px-2.5 font-mono text-[0.6rem] text-white/25"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              abelwp.es
            </div>
          </div>

          {/* Screenshot */}
          <div className="relative" style={{ aspectRatio: "4/3" }}>
            <Image
              src="https://picsum.photos/seed/architecture-studio/800/600"
              alt="Ejemplo de diseño web a medida"
              fill
              sizes="460px"
              className="object-cover"
              priority
            />
            {/* Bottom gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.5) 100%)",
              }}
            />
            {/* Status badge */}
            <div
              className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(0,0,0,0.65)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
              <span className="font-mono text-[0.6rem] text-white/65 tracking-wide">
                Disponible · España
              </span>
            </div>
          </div>
        </div>

        {/* Floating projects card */}
        <motion.div
          className="absolute -bottom-5 -right-5 px-4 py-3 rounded-xl"
          style={{
            background: "var(--color-accent)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.35)",
          }}
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="font-mono text-[0.55rem] text-ink/50 uppercase tracking-widest mb-0.5">
            Proyectos
          </p>
          <p className="font-black text-2xl text-ink leading-none">+20</p>
        </motion.div>

        {/* Floating satisfaction card */}
        <motion.div
          className="absolute -top-4 -left-4 px-4 py-3 rounded-xl"
          style={{
            background: "rgba(20,20,20,0.9)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.4)",
          }}
          initial={reduce ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.85, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="font-mono text-[0.55rem] text-white/35 uppercase tracking-widest mb-0.5">
            Satisfacción
          </p>
          <p className="font-black text-2xl text-white leading-none">
            100<span className="text-accent text-lg">%</span>
          </p>
        </motion.div>

      </div>
    </motion.div>
  );
}

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="main-content"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 items-center relative overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-subtle) 0%, transparent 70%)" }}
      />

      {/* Left */}
      <div className="max-w-[560px] animate-fade-in-up md:py-0">

        <h1 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[1.03] tracking-[-0.04em] mb-6 text-balance">
          Tu web debería{" "}
          <em className="not-italic text-accent">trabajar</em>{" "}
          mientras duermes.
        </h1>

        <p className="text-lg text-white/70 leading-[1.65] max-w-[42ch] mb-10">
          Diseño y desarrollo webs para marcas que saben lo que quieren: que se
          vean bien, carguen rápido y conviertan.
        </p>

        <div className="flex gap-4 items-center">
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-accent text-ink font-bold text-sm md:text-base px-6 md:px-8 py-3.5 rounded-full cursor-pointer whitespace-nowrap active:scale-[0.97] border border-transparent"
            style={{ transition: "background-color 160ms cubic-bezier(0.23,1,0.32,1), transform 160ms cubic-bezier(0.23,1,0.32,1)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent-dark)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
          >
            Empezar proyecto
          </button>
          <button
            onClick={() => scrollTo("portfolio")}
            className="bg-transparent text-white/70 border border-white/20 text-sm md:text-base px-5 md:px-7 py-3.5 rounded-full cursor-pointer font-medium whitespace-nowrap active:scale-[0.97]"
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

      {/* Right — browser mockup */}
      <HeroVisual />
    </section>
  );
}
