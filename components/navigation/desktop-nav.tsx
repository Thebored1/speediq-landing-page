"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

const productItems = [
  { name: 'WhatsApp Campaigns', href: '/features/whatsapp', description: 'Automated broadcasts and live inbox.' },
  { name: 'Email Marketing', href: '/features/email', description: 'Rich email campaigns with drag-and-drop.' },
  { name: 'SMS Messaging', href: '/features/sms', description: 'Global reach with high open rates.' },
  { name: 'Unified Inbox', href: '/features/inbox', description: 'Manage all channel conversations in one place.' },
];

const whyUsItems = [
  { name: 'Features Hub', href: '/features', description: 'Explore everything SpeedIQ has to offer.' },
  { name: 'Compare', href: '/compare', description: 'See how we stack up against the competition.' },
  { name: 'Trust Center', href: '/legal/privacy', description: 'Privacy, terms, and data processing.' },
];

const useCasesItems = [
  { name: 'E-commerce', href: '/use-cases?industry=ecommerce', description: 'Recover carts and drive repeat sales.' },
  { name: 'SaaS', href: '/use-cases?industry=saas', description: 'Onboard users and announce new features.' },
  { name: 'Agencies', href: '/use-cases?industry=agency', description: 'Manage campaigns for multiple clients.' },
];

const MENUS = [
  { label: 'Product', items: productItems },
  { label: 'Why us', items: whyUsItems },
  { label: 'Use cases', items: useCasesItems },
];

export function DesktopNav() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [leftOffsets, setLeftOffsets] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);
  
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateMeasurements = () => {
      setLeftOffsets(navRefs.current.map(el => el ? el.offsetLeft : 0));
      setContentHeights(contentRefs.current.map(el => el ? el.offsetHeight : 0));
    };
    
    setTimeout(updateMeasurements, 10);
    window.addEventListener('resize', updateMeasurements);
    return () => window.removeEventListener('resize', updateMeasurements);
  }, []);

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (activeIdx !== null && activeIdx !== idx) {
      setPrevIdx(activeIdx);
    }
    setActiveIdx(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setPrevIdx(activeIdx);
      setActiveIdx(null);
    }, 150);
  };

  const isMenuOpen = activeIdx !== null && activeIdx !== -1;
  const renderIdx = isMenuOpen ? activeIdx : (prevIdx !== -1 ? prevIdx : 0);

  return (
    <nav 
      className="flex h-full items-center divide-x divide-neutral-800 relative"
      onMouseLeave={handleMouseLeave}
    >
      {MENUS.map((menu, idx) => (
        <div 
          key={menu.label}
          ref={el => { navRefs.current[idx] = el; }}
          className="relative h-full flex items-center"
          onMouseEnter={() => handleMouseEnter(idx)}
        >
          <button className={`flex h-full items-center px-6 gap-2 bg-transparent text-sm font-medium transition-colors ${activeIdx === idx ? 'text-white bg-neutral-900' : 'text-neutral-300 hover:text-white hover:bg-neutral-900/50'}`}>
            {menu.label}
            <ChevronDown size={14} className={`transition-transform duration-150 ease-out opacity-50 ${activeIdx === idx ? 'rotate-180' : ''}`} />
          </button>
        </div>
      ))}
      
      <Link 
        href="/pricing"
        className="flex h-full items-center px-6 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/50 transition-colors"
        onMouseEnter={() => handleMouseEnter(-1)}
      >
        Pricing
      </Link>

      {/* Shared Animated Dropdown Wrapper */}
      <div 
        className={`absolute top-full pt-0 transition-all duration-150 ease-out z-50 ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{ 
          transform: isMenuOpen && leftOffsets[activeIdx] !== undefined 
            ? `translateX(${leftOffsets[activeIdx]}px) translateY(0)`
            : `translateX(${prevIdx !== null && prevIdx !== -1 && leftOffsets[prevIdx] !== undefined ? leftOffsets[prevIdx] : 0}px) translateY(8px)`
        }}
      >
        <div 
          className="w-72 bg-black border border-neutral-800 shadow-2xl overflow-hidden mt-0 relative transition-all duration-150 ease-out" 
          style={{ height: renderIdx !== null && contentHeights[renderIdx] ? contentHeights[renderIdx] : 200 }}
        >
          {MENUS.map((menu, idx) => {
            const isBefore = renderIdx !== null && idx < renderIdx;
            const isAfter = renderIdx !== null && idx > renderIdx;
            const isActive = renderIdx === idx;

            let translateX = '0%';
            if (isBefore) translateX = '-100%';
            if (isAfter) translateX = '100%';

            return (
              <div 
                key={menu.label}
                ref={el => { contentRefs.current[idx] = el; }}
                className={`absolute top-0 left-0 w-full p-2 flex flex-col gap-1 transition-transform duration-150 ease-out ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                style={{ transform: `translateX(${translateX})` }}
              >
                {menu.items.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href} 
                    className="p-3 text-sm flex flex-col gap-1 hover:bg-neutral-900 rounded-sm transition-all duration-200 group/item"
                  >
                    <span className="font-medium text-neutral-200 transition-all duration-200">
                      {item.name}
                    </span>
                    {item.description && (
                      <span className="text-xs text-neutral-500 transition-all duration-200 line-clamp-2">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
