const fs = require("fs");
const path = require("path");

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(path.join(__dirname, "src"), function(filePath) {
  if (filePath.endsWith(".tsx") || filePath.endsWith(".ts")) {
    let content = fs.readFileSync(filePath, "utf8");
    let changed = false;
    let imgCounter = 1;

    content = content.replace(/https:\/\/(images|plus)\.unsplash\.com\/[^"']+/g, () => {
      changed = true;
      let repl = `/assets/gp/gp-img${imgCounter}.jpg`;
      imgCounter = (imgCounter % 5) + 1;
      return repl;
    });

    if (changed) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log("Updated", filePath);
    }
  }
});
