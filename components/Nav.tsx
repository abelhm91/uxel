"use client";

import { useState, useEffect, useRef } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { label: "Servicios", id: "servicios" },
  { label: "Proceso", id: "proceso" },
  { label: "Portfolio", id: "portfolio" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [ready, setReady] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const hasOpenedRef = useRef(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setReady(true);
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current + 4) {
        setHidden(true);
        setOpen(false);
      } else if (currentY < lastScrollY.current - 4) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  // Move focus to first menu item on open; return focus to hamburger on close
  useEffect(() => {
    if (open) {
      hasOpenedRef.current = true;
      const firstBtn = menuRef.current?.querySelector<HTMLButtonElement>("button");
      firstBtn?.focus();
    } else if (hasOpenedRef.current) {
      hamburgerRef.current?.focus();
    }
  }, [open]);

  // Close on Escape and trap Tab inside the menu
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const menu = menuRef.current;
      if (!menu) return;
      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>("button, a, [tabindex]")
      ).filter((el) => !el.hasAttribute("disabled"));

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 border-b border-white/8 backdrop-blur-md"
        style={{
          background: "rgba(10,10,10,0.85)",
          transform: hidden ? "translateY(-100%)" : "translateY(0)",
          transition: ready ? "transform 300ms cubic-bezier(0.23,1,0.32,1)" : "none",
        }}
      >
        <div className="font-mono font-medium text-lg tracking-tight text-accent">
          UXEL_
        </div>

        <ul className="hidden md:flex gap-10 list-none">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm text-white/60 hover:text-white cursor-pointer bg-transparent border-none font-[family-name:var(--font-outfit)]"
                style={{ transition: "color 150ms ease-out" }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo("contacto")}
            className="bg-accent text-ink font-bold text-sm px-5 py-2.5 rounded-full cursor-pointer whitespace-nowrap active:scale-[0.97]"
            style={{ transition: "background-color 160ms cubic-bezier(0.23,1,0.32,1), transform 160ms cubic-bezier(0.23,1,0.32,1)" }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = "var(--color-accent-dark)")}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = "var(--color-accent)")}
          >
            Hablemos
          </button>
          <button
            ref={hamburgerRef}
            className="md:hidden text-white/60 hover:text-white cursor-pointer"
            style={{ transition: "color 150ms ease-out" }}
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú de navegación"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          role="navigation"
          aria-label="Menú móvil"
          className="md:hidden fixed inset-x-0 top-16 z-40 border-b border-white/8 py-4 px-6"
          style={{ background: "rgba(10,10,10,0.97)" }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="block w-full text-left py-3 text-base text-white/70 hover:text-white cursor-pointer bg-transparent border-none font-[family-name:var(--font-outfit)]"
              style={{ transition: "color 150ms ease-out" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
