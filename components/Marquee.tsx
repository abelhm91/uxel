"use client";

import { useEffect, useRef } from "react";

const items = [
  "Landing Pages", "E-commerce", "Diseño UI/UX", "Webs a medida",
  "Shopify", "WordPress", "Figma", "Next.js", "SEO Tecnico", "Branding Digital",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        track.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="border-t border-b border-white/8 py-4 overflow-hidden"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div ref={trackRef} className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-[0.1em] uppercase text-white/35"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
