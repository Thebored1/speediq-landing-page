import Link from 'next/link';
import { DesktopNavLight } from './desktop-nav-light';
import { MobileNav } from './mobile-nav';
import { ActionDropdownLight } from './action-dropdown-light';
import { ChevronRight } from 'lucide-react';

import { ThemeToggle } from './theme-toggle';

export function HeaderLight() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-neutral-200 h-12 flex items-center justify-between divide-x divide-neutral-200 font-mono">
        
      {/* Left: Logo and Desktop Navigation */}
      <div className="flex h-full items-center divide-x divide-neutral-200">
        <Link href="/" className="flex h-full items-center gap-2 group px-6 hover:bg-neutral-100 transition-colors">
          <span className="text-black font-semibold tracking-tight text-lg">SpeedIQ</span>
        </Link>

        <div className="hidden lg:block h-full">
          <DesktopNavLight />
        </div>
      </div>

      {/* Right: Actions & Mobile Menu Button */}
      <div className="flex h-full items-center divide-x divide-neutral-200">
        <div className="hidden lg:flex h-full items-center divide-x divide-neutral-200">
          <ThemeToggle />
          <ActionDropdownLight />
          <Link 
            href="#" 
            className="flex h-full items-center px-6 text-sm font-medium bg-black text-white hover:bg-neutral-200 transition-colors gap-2 group"
          >
            Contact us
            <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="h-full flex items-center px-2 lg:hidden">
          <MobileNav />
        </div>
      </div>

    </header>
  );
}
