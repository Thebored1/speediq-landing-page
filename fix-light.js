const fs = require('fs');
const file = 'app/light/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Change imports and Header to HeaderLight
content = content.replace(/import \{ Header \} from \"@\/components\/navigation\/header\"/, import { HeaderLight } from \"@/components/navigation/header-light\");
content = content.replace(/<Header \/>/g, '<HeaderLight />');

// 2. Add useTheme / useRouter and redirect
content = content.replace(/import \{ type CSSProperties, type ReactNode, useEffect, useRef, useState \} from \"react\"/, import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from "react"\nimport { useTheme } from "@/components/theme-provider"\nimport { useRouter } from "next/navigation");
content = content.replace(/export default function NoisePage\(\) \{/, export default function NoisePage() {\n  const { theme } = useTheme()\n  const router = useRouter()\n\n  useEffect(() => {\n    if (theme === "dark") {\n      router.replace("/")\n    }\n  }, [theme, router]));

// 3. Color mapping
// Dark backgrounds -> Light backgrounds
content = content.replace(/#000000|#000/g, '__BLACK__');
content = content.replace(/#ffffff|#fff/g, '__WHITE__');

// Dark specific backgrounds -> Light specific backgrounds
content = content.replace(/#050505/g, '#fafafa'); // bg4
content = content.replace(/#080808/g, '#f5f5f5'); // bg
content = content.replace(/#0A0A0A/g, '#ffffff'); // bg2
content = content.replace(/#0D0D0D/g, '#ebebeb'); // bg3

// Background base
content = content.replace(/background: '__BLACK__'/g, ackground: '#ffffff');
// Text base
content = content.replace(/color: '__WHITE__'/g, color: '#000000');

// SVG strokes/fills
content = content.replace(/stroke=\"__WHITE__\"/g, stroke=\"#000000\");
content = content.replace(/fill=\"__WHITE__\"/g, ill=\"#000000\");

// Other specific elements
content = content.replace(/floodColor=\"__BLACK__\"/g, loodColor=\"#000000\");
content = content.replace(/floodcolor=\"__BLACK__\"/gi, loodColor=\"#000000\");
content = content.replace(/color=\"__BLACK__\"/g, color=\"#ffffff\");

// Restore leftover black/white
content = content.replace(/__BLACK__/g, '#ffffff');
content = content.replace(/__WHITE__/g, '#000000');

// Fix RGBA opacities
content = content.replace(/rgba\(255,255,255/g, 'rgba(0,0,0');

fs.writeFileSync(file, content);
