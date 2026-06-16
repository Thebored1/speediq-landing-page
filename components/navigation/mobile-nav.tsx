"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Product', href: '/features' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Why us', href: '/compare' },
  { name: 'Use cases', href: '/use-cases/ecommerce' },
  { name: 'Contact', href: '/contact' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 transition-colors z-50 relative"
        style={{ color: "var(--header-text)" }}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`mobile-menu-panel fixed inset-0 z-40 transition-transform duration-500 ease-in-out border-t flex flex-col pt-16 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ background: "var(--header-bg)", borderTopColor: "var(--header-border)" }}
      >
        <div className="flex-1 overflow-y-auto divide-y" style={{ borderColor: "var(--header-border)" }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="w-full flex items-center justify-between p-6 transition-colors text-left group"
              style={{ color: "var(--clr-fg)" }}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl font-semibold tracking-wide group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
              <ChevronRight size={24} className="group-hover:-translate-x-2 transition-all duration-300" style={{ color: "var(--clr-fg4)" }} />
            </Link>
          ))}
        </div>

        <div className="p-6 flex flex-col gap-4 shrink-0 pb-8" style={{ borderTop: "1px solid var(--header-border)", background: "var(--header-bg)" }}>
          <Link
            href="/auth/sign-in"
            className="flex items-center justify-center h-12 w-full transition-colors rounded-md text-sm font-semibold tracking-wider"
            style={{ background: "var(--clr-line3)", color: "var(--clr-fg)" }}
            onClick={() => setIsOpen(false)}
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="flex items-center justify-center h-12 w-full transition-colors rounded-md text-sm font-semibold tracking-wider"
            style={{ background: "var(--clr-cta)", color: "var(--clr-cta-fg)" }}
            onClick={() => setIsOpen(false)}
          >
            Start free
          </Link>
        </div>
      </div>
    </div>
  );
}
