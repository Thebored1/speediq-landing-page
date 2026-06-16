const fs = require('fs');

let darkPage = fs.readFileSync('app/page.tsx', 'utf8');
darkPage = darkPage.replace(/height: "800px"/g, 'height: "1000px"');
fs.writeFileSync('app/page.tsx', darkPage);

let lightPage = fs.readFileSync('app/light/page.tsx', 'utf8');
lightPage = lightPage.replace(/height: "800px"/g, 'height: "1000px"');
lightPage = lightPage.replace(/background: "#0D0D0D"/g, 'background: "#ffffff"');
lightPage = lightPage.replace(/background: i % 2 === 0 \? "#0D0D0D" : "#f1f3f5"/g, 'background: i % 2 === 0 ? "#ffffff" : "#f1f3f5"');
fs.writeFileSync('app/light/page.tsx', lightPage);

console.log("Fixed height and #0D0D0D blocks");
