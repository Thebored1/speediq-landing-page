"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

const navItems = [
  { name: 'Product', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Why us', href: '#' },
  { name: 'Use cases', href: '#' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-neutral-300 hover:text-white transition-colors z-50 relative"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full screen menu panel */}
      <div 
        className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out border-t border-neutral-800 flex flex-col pt-16 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`} 
      >
        <div className="flex-1 overflow-y-auto divide-y divide-neutral-800">
          {navItems.map((item, i) => (
            <Link 
              key={item.name}
              href={item.href}
              className="w-full flex items-center justify-between p-6 hover:bg-neutral-900 transition-colors text-left group"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-2xl font-semibold text-white tracking-wide group-hover:translate-x-2 transition-transform duration-300">{item.name}</span>
              <ChevronRight size={24} className="text-neutral-500 group-hover:text-white group-hover:-translate-x-2 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Mobile Call to Actions */}
        <div className="p-6 flex flex-col gap-4 border-t border-neutral-800 shrink-0 bg-black pb-8">
          <Link 
            href="#"
            className="flex items-center justify-center h-12 w-full bg-neutral-900 text-white hover:bg-neutral-800 transition-colors rounded-md text-sm font-semibold tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Sign in
          </Link>
          <Link 
            href="#"
            className="flex items-center justify-center h-12 w-full bg-white text-black hover:bg-neutral-200 transition-colors rounded-md text-sm font-semibold tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Start free
          </Link>
        </div>
      </div>
    </div>
  );
}
