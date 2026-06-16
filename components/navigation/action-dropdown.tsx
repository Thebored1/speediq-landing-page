import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function ActionDropdown() {
  return (
    <div className="relative group h-full flex items-center">
      <button className="flex h-full items-center px-6 gap-2 bg-transparent hover:bg-neutral-900 transition-colors text-sm font-medium cursor-default" style={{ color: "var(--header-text)" }}>
        Start today
        <ChevronDown size={16} className="transition-transform duration-300 ease-out group-hover:rotate-180" />
      </button>

      <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
        <div className="nav-dropdown w-48 border rounded-sm shadow-2xl overflow-hidden" style={{ background: "var(--dropdown-bg)", borderColor: "var(--dropdown-border)" }}>
          <div className="flex flex-col p-1.5 relative">
            <Link
              href="/auth/sign-in"
              className="relative z-10 px-4 py-2.5 text-sm font-medium rounded-sm transition-all duration-200 ease-in-out group/item"
              style={{ color: "var(--header-text)" }}
            >
              <span className="group-hover/item:translate-x-1 inline-block transition-transform duration-200">Sign in</span>
            </Link>
            <Link
              href="/auth/sign-up"
              className="relative z-10 px-4 py-2.5 text-sm font-medium rounded-sm transition-all duration-200 ease-in-out group/item"
              style={{ color: "var(--header-text)" }}
            >
              <span className="group-hover/item:translate-x-1 inline-block transition-transform duration-200">Create account</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
