const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

// 1. Mark target replacements with unique placeholders
code = code.replace(/#080808/gi, '__BG_MAIN__');
code = code.replace(/#050505/gi, '__BG_ALT__');
code = code.replace(/#0a0a0a/gi, '__BG_CARD__');
code = code.replace(/background:\s*"#000000"/gi, '__BG_PURE__');
code = code.replace(/background:\s*"#000"/gi, '__BG_PURE__');
code = code.replace(/background:\s*#000/gi, '__BG_PURE__');

code = code.replace(/fill="#0a0a0a"/gi, '__FILL_CARD__');
code = code.replace(/fill="#000000"/gi, '__FILL_PURE__');
code = code.replace(/fill="#000"/gi, '__FILL_PURE__');

code = code.replace(/rgba\(255,255,255,/g, '__FG_RGBA__');
code = code.replace(/rgba\(5,5,5,/g, '__BG_ALT_RGBA__');
code = code.replace(/rgba\(8,8,8,/g, '__BG_MAIN_RGBA__');

code = code.replace(/color:\s*"#fff"/gi, '__FG_COLOR__');
code = code.replace(/color:\s*"#ffffff"/gi, '__FG_COLOR__');
code = code.replace(/stroke="#ffffff"/gi, '__FG_STROKE__');
code = code.replace(/stroke="#fff"/gi, '__FG_STROKE__');
code = code.replace(/fill="#ffffff"/gi, '__FG_FILL__');
code = code.replace(/fill="#fff"/gi, '__FG_FILL__');
code = code.replace(/color="#fff"/gi, '__FG_COLOR_ATTR__');
code = code.replace(/color="#ffffff"/gi, '__FG_COLOR_ATTR__');

code = code.replace(/background:\s*"#ffffff"/gi, '__BTN_BG__');
code = code.replace(/background:\s*"#fff"/gi, '__BTN_BG__');

// Custom button borders that were white on dark
code = code.replace(/border:\s*"1px solid #ffffff"/gi, '__BTN_BORDER__');
code = code.replace(/border:\s*"1px solid #fff"/gi, '__BTN_BORDER__');

// Toggle links
code = code.replace(/>LIGHT MODE<\/a>/g, '>DARK MODE</a>');
code = code.replace(/href="\/light"/g, 'href="/"');


// 2. Replace placeholders with light mode values
code = code.replace(/__BG_MAIN__/g, '#ffffff');
code = code.replace(/__BG_ALT__/g, '#f8f9fa');
code = code.replace(/__BG_CARD__/g, '#f1f3f5');
code = code.replace(/__BG_PURE__/g, 'background: "#ffffff"');

code = code.replace(/__FILL_CARD__/g, 'fill="#f1f3f5"');
code = code.replace(/__FILL_PURE__/g, 'fill="#ffffff"');

code = code.replace(/__FG_RGBA__/g, 'rgba(0,0,0,');
code = code.replace(/__BG_ALT_RGBA__/g, 'rgba(248,249,250,');
code = code.replace(/__BG_MAIN_RGBA__/g, 'rgba(255,255,255,');

code = code.replace(/__FG_COLOR__/g, 'color: "#000"');
code = code.replace(/__FG_STROKE__/g, 'stroke="#000"');
code = code.replace(/__FG_FILL__/g, 'fill="#000"');
code = code.replace(/__FG_COLOR_ATTR__/g, 'color="#000"');

code = code.replace(/__BTN_BG__/g, 'background: "#000"');
code = code.replace(/__BTN_BORDER__/g, 'border: "1px solid #000"');

fs.writeFileSync('app/light/page.tsx', code);
