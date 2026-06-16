import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface NavDropdownItem {
  name: string;
  href: string;
  description?: string;
}

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
}

export function NavDropdownLight({ label, items }: NavDropdownProps) {
  return (
    <div className="relative group h-full flex items-center">
      <button className="flex h-full items-center px-6 gap-2 bg-transparent text-black hover:text-black hover:bg-neutral-100 transition-colors text-sm font-medium cursor-default">
        {label}
        <ChevronDown size={14} className="transition-transform duration-300 ease-out group-hover:rotate-180 opacity-50" />
      </button>

      <div className="absolute left-0 top-full pt-0 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
        <div className="w-72 bg-white border border-neutral-200 shadow-xl overflow-hidden mt-0">
          <div className="flex flex-col p-2 gap-1 relative">
            {items.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="relative z-10 p-3 text-sm flex flex-col gap-1 hover:bg-neutral-100 rounded-sm transition-all duration-200 ease-in-out group/item"
              >
                <span className="font-medium text-black transition-all duration-200">
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
        </div>
      </div>
    </div>
  );
}
