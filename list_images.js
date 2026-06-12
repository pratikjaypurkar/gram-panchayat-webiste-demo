const fs = require("fs");
const path = require("path");

const matches = new Set();
function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath);
    } else if (f.endsWith(".tsx") || f.endsWith(".ts")) {
      let content = fs.readFileSync(dirPath, "utf8");
      let re = /src=\{?["'](\/assets\/[^"']+)["']\}?/g;
      let m;
      while ((m = re.exec(content)) !== null) {
        matches.add(m[1]);
      }
    }
  });
}
walkDir(path.join(__dirname, "src"));
console.log(Array.from(matches).join("\n"));
