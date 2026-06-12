const fs = require("fs");
const path = require("path");

function walkDir(dir) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    if (fs.statSync(dirPath).isDirectory()) {
      walkDir(dirPath);
    } else if (f.endsWith(".tsx") || f.endsWith(".ts")) {
      let content = fs.readFileSync(dirPath, "utf8");
      let changed = false;
      let imgCounter = 1;
      
      content = content.replace(/(\/assets\/[^"'\s\>]+)/g, (match, p1) => {
        // Exclude svg, vectors, already fixed gp-img, and dotted-circle
        if (p1.endsWith(".svg") || p1.includes("gp-img") || p1.includes("dotted-circle")) return match;
        
        changed = true;
        let repl = `/assets/gp/gp-img${imgCounter}.jpg`;
        imgCounter = (imgCounter % 5) + 1;
        return repl;
      });

      if (changed) {
        fs.writeFileSync(dirPath, content, "utf8");
        console.log("Updated", dirPath);
      }
    }
  });
}
walkDir(path.join(__dirname, "src"));
