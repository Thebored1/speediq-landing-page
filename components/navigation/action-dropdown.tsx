import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function ActionDropdown() {
  return (
    <div className="relative group h-full flex items-center">
      <button className="flex h-full items-center px-6 gap-2 bg-transparent text-white hover:bg-neutral-900 transition-colors text-sm font-medium cursor-default">
        Start today
        <ChevronDown size={16} className="transition-transform duration-300 ease-out group-hover:rotate-180" />
      </button>

      <div className="absolute right-0 top-full pt-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
        <div className="w-48 bg-black border border-neutral-800 rounded-sm shadow-2xl overflow-hidden">
          <div className="flex flex-col p-1.5 relative">
            <Link 
              href="#" 
              className="relative z-10 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-sm transition-all duration-200 ease-in-out group/item"
            >
              <span className="group-hover/item:translate-x-1 inline-block transition-transform duration-200">Sign in</span>
            </Link>
            <Link 
              href="#" 
              className="relative z-10 px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-sm transition-all duration-200 ease-in-out group/item"
            >
              <span className="group-hover/item:translate-x-1 inline-block transition-transform duration-200">Sign out</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
