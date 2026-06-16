const fs = require('fs');
let code = fs.readFileSync('app/light/page.tsx', 'utf8');

// Fix buttons that became black-on-black
code = code.replace(/background:\s*"#000",\s*color:\s*"#000"/gi, 'background: "#000", color: "#fff"');

// Fix "Try CRM for free" button
code = code.replace(/background:\s*"#111"/gi, 'background: "transparent"');

// Fix ASCII noise colors that should be black text
code = code.replace(/color:\s*"#d4d4d4"/gi, 'color: "rgba(0,0,0,0.4)"');

// Fix Dashboard Preview Sidebar
code = code.replace(/background:\s*"#020202"/gi, 'background: "#ffffff"');

// Fix the Dashboard Preview pure black background block behind the mini squares
code = code.replace(/width:\s*28,\s*height:\s*28,\s*background:\s*"#000"/gi, 'width: 28, height: 28, background: "#f1f3f5"');

// Let's also check if there are other "#000" colors that need inversion in the dashboard preview
// We don't want to break other things.

fs.writeFileSync('app/light/page.tsx', code);
