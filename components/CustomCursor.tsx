"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const hasEnteredRef = useRef(false);
  const reduce = useReducedMotion();

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 22, stiffness: 250, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 22, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    setActive(true);
    document.documentElement.classList.add("custom-cursor");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!hasEnteredRef.current) {
        hasEnteredRef.current = true;
        setVisible(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(
        "a, button, input, select, textarea, label, [role='button'], [tabindex]"
      )) {
        setHovered(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(
        "a, button, input, select, textarea, label, [role='button'], [tabindex]"
      )) {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, [reduce, mouseX, mouseY]);

  if (!active) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ x: springX, y: springY, mixBlendMode: "difference" }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-white"
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{
          scale: hovered ? 3 : 1,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
      />
    </motion.div>
  );
}
