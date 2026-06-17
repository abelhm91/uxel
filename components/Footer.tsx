export default function Footer() {
  return (
    <footer className="bg-ink2 border-t border-white/6 py-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-mono text-xs text-white/40">
        © 2025 UXEL_, Diseño web freelance
      </p>
      <ul className="flex gap-8 list-none">
        {["LinkedIn", "Behance", "Instagram"].map((link) => (
          <li key={link}>
            <a
              href="#"
              className="font-mono text-xs text-white/50 no-underline hover:text-accent cursor-pointer"
              style={{ transition: "color 150ms ease-out" }}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </footer>
  );
}
