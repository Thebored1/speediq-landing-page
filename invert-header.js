const fs = require('fs');

const files = [
  'components/navigation/header-light.tsx',
  'components/navigation/desktop-nav-light.tsx',
  'components/navigation/action-dropdown-light.tsx'
];

files.forEach(file => {
  let code = fs.readFileSync(file, 'utf8');

  // Fix imports
  code = code.replace(/desktop-nav/g, 'desktop-nav-light');
  code = code.replace(/action-dropdown/g, 'action-dropdown-light');

  // Invert colors
  // Use placeholders to avoid double-replacement
  code = code.replace(/bg-black/g, '__BG_WHITE__');
  code = code.replace(/text-white/g, '__TEXT_BLACK__');
  code = code.replace(/bg-white/g, '__BG_BLACK__');
  code = code.replace(/text-black/g, '__TEXT_WHITE__');
  
  code = code.replace(/border-neutral-800/g, 'border-neutral-200');
  code = code.replace(/divide-neutral-800/g, 'divide-neutral-200');
  code = code.replace(/hover:bg-neutral-900/g, 'hover:bg-neutral-100');
  code = code.replace(/bg-neutral-950/g, 'bg-neutral-50');
  code = code.replace(/text-neutral-400/g, 'text-neutral-600');
  code = code.replace(/border-neutral-700/g, 'border-neutral-300');
  code = code.replace(/text-neutral-300/g, 'text-neutral-700');

  // Apply placeholders
  code = code.replace(/__BG_WHITE__/g, 'bg-white');
  code = code.replace(/__TEXT_BLACK__/g, 'text-black');
  code = code.replace(/__BG_BLACK__/g, 'bg-black');
  code = code.replace(/__TEXT_WHITE__/g, 'text-white');

  // Rename components so they don't clash (Optional, but good practice)
  code = code.replace(/export function Header\(/g, 'export function HeaderLight(');
  code = code.replace(/export function DesktopNav\(/g, 'export function DesktopNavLight(');
  code = code.replace(/export function ActionDropdown\(/g, 'export function ActionDropdownLight(');
  
  code = code.replace(/<DesktopNav \/>/g, '<DesktopNavLight />');
  code = code.replace(/<ActionDropdown \/>/g, '<ActionDropdownLight />');

  fs.writeFileSync(file, code);
});
