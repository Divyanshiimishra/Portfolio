"use client";
import { useState } from "react";

const RESUME_URL =
  "https://1drv.ms/b/c/0929d462e1441208/IQD9K3VzNIf1RKS8VfSWvAWTAQywJHn8e-KYAsvSzuXWY8o?e=crrVJh";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Icon({ name }: { name: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "about":
      return (
        <svg {...props}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
        </svg>
      );
    case "skills":
      return (
        <svg {...props}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "projects":
      return (
        <svg {...props}>
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      );
    case "experience":
      return (
        <svg {...props}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "contact":
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
          <polyline points="14 3 14 8 19 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="15" y2="17" />
        </svg>
      );
  }
}

function Chevron() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const rowClass =
    "flex items-center gap-4 px-2 py-4 border-b border-line last:border-b-0 text-ink active:bg-accent-soft/50 transition";
  const circleClass =
    "flex items-center justify-center w-11 h-11 rounded-full bg-surface border border-line text-ink shrink-0";

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/95 backdrop-blur border-b border-line">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 sm:px-6 py-4">
        <a href="#home" className="text-xl font-bold text-ink">
          Divyanshi<span className="text-accent">.</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-muted hover:text-accent transition">
              {l.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-accent text-white text-sm hover:opacity-90 transition"
          >
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
        <div className="md:hidden border-t border-line bg-bg px-4 pb-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)} className={rowClass}>
              <span className={circleClass}>
                <Icon name={l.id} />
              </span>
              <span className="flex-1 text-lg">{l.label}</span>
              <span className="text-muted">
                <Chevron />
              </span>
            </a>
          ))}

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={rowClass}
          >
            <span className={circleClass}>
              <Icon name="resume" />
            </span>
            <span className="flex-1 text-lg">Resume</span>
            <span className="text-muted">
              <Chevron />
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}