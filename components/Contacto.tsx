"use client";

import { useState } from "react";
import { Envelope, MapPin, Clock, CircleNotch } from "@phosphor-icons/react";

const info = [
  { Icon: Envelope, label: "hola@uxel.es" },
  { Icon: MapPin, label: "Espana · Trabajo en remoto" },
  { Icon: Clock, label: "Respuesta en menos de 24 h" },
];

const inputClass =
  "w-full bg-black/8 border-[1.5px] border-black/15 rounded-lg px-4 py-3 font-[family-name:var(--font-outfit)] text-sm text-ink outline-none placeholder:text-black/35 focus:border-black/50 focus:bg-black/5 disabled:opacity-50 disabled:cursor-not-allowed";
const inputStyle = { transition: "border-color 150ms ease-out, background-color 150ms ease-out" };

export default function Contacto() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [blurring, setBlurring] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setBlurring(true);

    // Simula envío (reemplazar por fetch real)
    setTimeout(() => {
      setSent(true);
      setBlurring(false);
      setLoading(false);

      // Vuelve al estado original tras 4s
      setTimeout(() => {
        setBlurring(true);
        setTimeout(() => {
          setSent(false);
          setBlurring(false);
        }, 180);
      }, 4000);
    }, 1200);

    (e.target as HTMLFormElement).reset();
  };

  const isDisabled = loading || sent;

  return (
    <section
      id="contacto"
      className="px-6 md:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center"
      style={{ background: "var(--color-accent)", color: "var(--color-ink)" }}
    >
      {/* Left */}
      <div>
        <h2 className="text-[clamp(2.2rem,4vw,3.5rem)] font-black tracking-[-0.04em] leading-[1.05] mb-5 text-balance">
          ¿Lista tu próxima web?
        </h2>
        <p className="text-base text-black/65 max-w-[38ch] leading-relaxed mb-8">
          Cuéntame qué necesitas. En menos de 24h te doy una respuesta honesta
          y sin compromiso.
        </p>

        <div className="flex flex-col gap-3">
          {info.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-sm text-black/70 font-mono">
              <Icon size={16} weight="bold" className="text-black/50 flex-shrink-0" />
              <span className="text-ink font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="nombre" className="font-mono text-[0.72rem] tracking-[0.05em] uppercase text-black/60 font-medium">
              Nombre
            </label>
            <input id="nombre" type="text" placeholder="Tu nombre" required disabled={isDisabled} className={inputClass} style={inputStyle} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-mono text-[0.72rem] tracking-[0.05em] uppercase text-black/60 font-medium">
              Email
            </label>
            <input id="email" type="email" placeholder="tu@empresa.com" required disabled={isDisabled} className={inputClass} style={inputStyle} />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="tipo" className="font-mono text-[0.72rem] tracking-[0.05em] uppercase text-black/60 font-medium">
            Tipo de proyecto
          </label>
          <select id="tipo" required defaultValue="" disabled={isDisabled} className={inputClass} style={inputStyle}>
            <option value="" disabled>Selecciona...</option>
            <option>Landing Page</option>
            <option>Tienda Online</option>
            <option>Web Corporativa</option>
            <option>Otro</option>
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="mensaje" className="font-mono text-[0.72rem] tracking-[0.05em] uppercase text-black/60 font-medium">
            Cuentame tu proyecto
          </label>
          <textarea
            id="mensaje"
            placeholder="Que necesitas? Tienes fecha limite? Tienes referencias de diseno?"
            required
            rows={5}
            disabled={isDisabled}
            className={`${inputClass} resize-y`}
            style={inputStyle}
          />
        </div>

        <span aria-live="polite" className="sr-only">
          {sent ? "Mensaje enviado correctamente." : loading ? "Enviando mensaje..." : ""}
        </span>

        <button
          type="submit"
          disabled={isDisabled}
          className="w-full bg-ink text-accent font-bold text-base py-4 rounded-lg cursor-pointer tracking-[-0.01em] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100"
          style={{ transition: "background-color 160ms ease-out, opacity 160ms ease-out, transform 160ms cubic-bezier(0.23,1,0.32,1)" }}
          onMouseEnter={e => { if (!isDisabled) e.currentTarget.style.backgroundColor = "var(--color-ink3)"; }}
          onMouseLeave={e => { if (!isDisabled) e.currentTarget.style.backgroundColor = "var(--color-ink)"; }}
        >
          <span
            className="flex items-center justify-center gap-2"
            style={{
              transition: "filter 180ms ease-out, opacity 180ms ease-out",
              filter: blurring ? "blur(4px)" : "none",
              opacity: blurring ? 0 : 1,
            }}
          >
            {loading && (
              <CircleNotch
                size={18}
                weight="bold"
                className="animate-spin"
                aria-hidden="true"
              />
            )}
            {sent ? "Mensaje enviado" : loading ? "Enviando..." : "Enviar mensaje"}
          </span>
        </button>
      </form>
    </section>
  );
}
