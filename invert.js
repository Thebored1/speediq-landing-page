const fs = require('fs');
let code = fs.readFileSync('app/light/page.tsx', 'utf8');

code = code.replace(/#080808/gi, '#ffffff');
code = code.replace(/#050505/gi, '#f4f4f5');
code = code.replace(/#0A0A0A/gi, '#fafafa');
code = code.replace(/rgba\(255,255,255,/g, 'rgba(0,0,0,');
code = code.replace(/"#fff"/gi, '"#000"');
code = code.replace(/"#ffffff"/gi, '"#000"');
code = code.replace(/color: "#ffffff"/gi, 'color: "#000"');
code = code.replace(/background: "#ffffff"/gi, 'background: "#000"');
code = code.replace(/color="#ffffff"/gi, 'color="#000"');
code = code.replace(/accent: "#ffffff"/gi, 'accent: "#000"');
code = code.replace(/"#d4d4d4"/gi, '"#333333"');
code = code.replace(/rgba\(8,8,8,/g, 'rgba(255,255,255,');
code = code.replace(/rgba\(5,5,5,/g, 'rgba(244,244,245,');

fs.writeFileSync('app/light/page.tsx', code);
