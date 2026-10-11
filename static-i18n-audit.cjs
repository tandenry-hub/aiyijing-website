const fs = require("node:fs");
const assert = require("node:assert/strict");
const vm = require("node:vm");
const pages = ["index.html", "web-translation.html", "enterprise-globalization.html"];
const source = fs.readFileSync("i18n.js", "utf8");
const rowsStart = source.indexOf("const rows = ") + "const rows = ".length;
const rowsEnd = source.indexOf("\n  ];", rowsStart) + 4;
const rows = vm.runInNewContext(source.slice(rowsStart, rowsEnd));
const keys = new Set(rows.map((row) => row[0]));
for (const row of rows) {
  assert.equal(row.length, 4, `Translation row must contain four languages: ${row[0]}`);
  assert.doesNotMatch(row[1], /[\u3400-\u9fff]/, `English translation still contains Chinese: ${row[0]}`);
  assert.doesNotMatch(row[3], /[\u3400-\u9fff]/, `Korean translation still contains Chinese: ${row[0]}`);
}
const decode = (value) => value.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&ldquo;|&rdquo;/g, '"').replace(/&middot;/g, "·").replace(/&#8599;/g, "↗").trim();
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
for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  assert.match(html, /<div class="nav-actions"><a class="button nav-download"/, `${page} must keep download in the right-side action group`);
}
assert.match(source, /actions\.insertBefore\(selector\(\), actions\.querySelector\('\.nav-download'\)\)/, "Language selector must be inserted immediately before download");
for (const file of ["app.js", "config.js"]) {
  const javascript = fs.readFileSync(file, "utf8");
  for (const match of javascript.matchAll(/(['"])((?:\\.|(?!\1)[\s\S])*?)\1/g)) {
    const value = match[2].trim();
    if (/[\u3400-\u9fff]/.test(value) && !keys.has(value)) missing.push(`${file}: ${value}`);
  }
}
assert.deepEqual(missing, [], `Missing exact translations:\n${missing.join("\n")}`);
console.log("PASS: every Chinese website text node has a four-language dictionary entry.");
