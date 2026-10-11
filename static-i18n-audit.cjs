const fs = require("node:fs");
const assert = require("node:assert/strict");
const pages = ["index.html", "web-translation.html", "enterprise-globalization.html"];
const source = fs.readFileSync("i18n.js", "utf8");
const keys = new Set([...source.matchAll(/\['((?:\\.|[^'])*)',/g)].map((match) => match[1].replace(/\\'/g, "'")));
const decode = (value) => value.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&ldquo;|&rdquo;/g, '"').replace(/&middot;/g, "·").replace(/&#8599;/g, "↗").replace(/\s+/g, " ").trim();
const missing = [];
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8").replace(/<script[\s\S]*?<\/script>/gi, "").replace(/<style[\s\S]*?<\/style>/gi, "");
  for (const match of html.matchAll(/>([^<>]+)</g)) {
    const value = decode(match[1]);
    if (/[\u3400-\u9fff]/.test(value) && !keys.has(value)) missing.push(`${page}: ${value}`);
  }
  for (const match of html.matchAll(/(?:aria-label|title|placeholder|alt)="([^"]+)"/g)) {
    const value = decode(match[1]);
    if (/[\u3400-\u9fff]/.test(value) && !keys.has(value)) missing.push(`${page} attribute: ${value}`);
  }
}
assert.deepEqual(missing, [], `Missing exact translations:\n${missing.join("\n")}`);
console.log("PASS: every Chinese website text node has a four-language dictionary entry.");
