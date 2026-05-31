"use client";

import Link from "next/link";
import { useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Clinics & Doctors", href: "#clinics" },
  { label: "Treatment Programs", href: "#programs" },
  { label: "Knowledge Hub", href: "#knowledge" },
  { label: "Ayurvedic Science", href: "#science" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E3D8] bg-[#F9F8F3]/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3D6234] text-white font-serif text-lg font-bold">
            P
          </span>
          <span className="font-serif text-xl font-bold tracking-wide text-[#3D6234]">
            PUNSATVA
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-neutral-700 transition-colors hover:text-[#3D6234]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="#assessment"
            className="inline-flex items-center rounded-full bg-[#3D6234] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#2F4D28]"
          >
            Start Free Assessment
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E5E3D8] text-[#3D6234]"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {open ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-[#E5E3D8] bg-[#F9F8F3]">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-neutral-800 hover:bg-[#F4F3ED] hover:text-[#3D6234]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#assessment"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-[#3D6234] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#2F4D28]"
              >
                Start Free Assessment
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
