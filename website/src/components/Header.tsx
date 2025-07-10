"use client";

import Link from "next/link";
import NavLink from "@/components/NavLink";

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/95 sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity">
          🧱 Awesome Front-End Architecture
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink href="/architectures">Arquiteturas</NavLink>
          <NavLink href="/concepts">Conceitos</NavLink>
        </nav>
      </div>
    </header>
  );
}