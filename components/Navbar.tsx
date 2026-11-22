"use client";
import { useState } from "react";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-4">
        <a href="#home" className="text-xl font-bold text-ink">
          Divyanshi<span className="text-accent">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l} href={`#${l}`} className="capitalize text-muted hover:text-accent transition">
              {l}
            </a>
          ))}
          <a href="/resume.pdf" target="_blank" className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:opacity-90 transition">
            Resume
          </a>
        </div>

        {/* Hamburger button (sirf mobile pe) */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 text-ink"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-bg px-5 pb-5">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              onClick={() => setOpen(false)}
              className="block capitalize py-3 text-ink border-b border-line/70 hover:text-accent"
            >
              {l}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center px-4 py-3 rounded-lg bg-accent text-white"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}