import Link from 'next/link';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { ActionDropdown } from './action-dropdown';
import { ChevronRight } from 'lucide-react';
import { ThemeToggle } from './theme-toggle';

export function Header() {
  return (
    <header className="site-header fixed top-0 left-0 w-full z-50 bg-black border-b border-neutral-800 h-12 flex items-center justify-between divide-x divide-neutral-800 font-mono">

      {/* Left: Logo and Desktop Navigation */}
      <div className="flex h-full items-center divide-x divide-neutral-800">
        <Link href="/" className="flex h-full items-center gap-2 group px-6 hover:bg-neutral-900 transition-colors">
          <div className="size-6 grid place-content-center bg-[#FF4F00] text-white font-bold text-sm">
            S
          </div>
          <span className="text-white font-semibold tracking-tight hidden sm:block">SpeedIQ</span>
        </Link>

        <div className="hidden lg:block h-full">
          <DesktopNav />
        </div>
      </div>

      {/* Right: Actions & Mobile Menu Button */}
      <div className="flex h-full items-center divide-x divide-neutral-800">
        <div className="hidden lg:flex h-full items-center divide-x divide-neutral-800">
          <ThemeToggle />
          <ActionDropdown />
          <Link
            href="/contact"
            className="header-cta flex h-full items-center px-6 text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors gap-2 group"
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
