"use client";

import { motion, useReducedMotion } from "motion/react";

function HeroVisual() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className="flex items-center justify-center md:justify-end"
      initial={reduce ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="relative w-full max-w-[340px] md:max-w-[460px]">

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

          {/* Web design mockup */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: "#0d0d0d" }}>
            {/* Mini website */}
            <div className="absolute inset-0 flex flex-col">
              {/* Mini nav */}
              <div className="flex items-center justify-between px-4 py-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="font-mono text-[0.55rem] font-bold" style={{ color: "var(--color-accent)" }}>STUDIO_</div>
                <div className="flex gap-3">
                  {["Work", "About", "Contact"].map(item => (
                    <div key={item} className="text-[0.45rem] text-white/30">{item}</div>
                  ))}
                </div>
                <div className="h-3.5 w-10 rounded-full" style={{ background: "var(--color-accent)" }} />
              </div>
              {/* Mini hero */}
              <div className="px-4 pt-4 pb-3">
                <div className="h-2 rounded-full bg-white mb-1.5" style={{ width: "70%" }} />
                <div className="h-2 rounded-full mb-3" style={{ width: "50%", background: "var(--color-accent)" }} />
                <div className="h-1 rounded bg-white/15 mb-1" style={{ width: "100%" }} />
                <div className="h-1 rounded bg-white/15 mb-3" style={{ width: "80%" }} />
                <div className="flex gap-2">
                  <div className="h-5 w-16 rounded-full" style={{ background: "var(--color-accent)" }} />
                  <div className="h-5 w-14 rounded-full border border-white/20" />
                </div>
              </div>
              {/* Mini cards grid */}
              <div className="px-4 grid grid-cols-2 gap-2 flex-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="rounded-lg p-2.5 flex flex-col gap-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="rounded flex-1" style={{ background: i === 1 ? "var(--color-accent)" : "rgba(255,255,255,0.08)", minHeight: 20, opacity: i === 1 ? 0.8 : 1 }} />
                    <div className="h-1 rounded bg-white/20" style={{ width: "70%" }} />
                    <div className="h-1 rounded bg-white/10" style={{ width: "45%" }} />
                  </div>
                ))}
              </div>
              <div className="px-4 pb-3 pt-2 flex gap-2">
                {[70, 45, 60].map((w, i) => (
                  <div key={i} className="h-1 rounded" style={{ width: `${w}px`, background: i === 0 ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.06)" }} />
                ))}
              </div>
            </div>

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
      className="min-h-screen relative overflow-hidden flex items-center"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--color-accent-subtle) 0%, transparent 70%)" }}
      />

      {/* Inner constrained grid */}
      <div className="w-full max-w-[1280px] mx-auto px-6 md:px-12 py-16 md:py-0 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">

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
      </div>
    </section>
  );
}
