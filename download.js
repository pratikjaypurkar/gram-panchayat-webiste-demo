const fs = require("fs");
const path = require("path");

async function downloadImage(url, filename) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  fs.writeFileSync(path.join(__dirname, "public", "assets", "gp", filename), Buffer.from(buffer));
  console.log("Downloaded", filename);
}

async function main() {
  if (!fs.existsSync(path.join(__dirname, "public", "assets", "gp"))) {
    fs.mkdirSync(path.join(__dirname, "public", "assets", "gp"), { recursive: true });
  }
  await downloadImage("https://picsum.photos/seed/gp1/1000/800", "gp-img1.jpg");
  await downloadImage("https://picsum.photos/seed/gp2/1000/800", "gp-img2.jpg");
  await downloadImage("https://picsum.photos/seed/gp3/1000/800", "gp-img3.jpg");
  await downloadImage("https://picsum.photos/seed/gp4/1000/800", "gp-img4.jpg");
  await downloadImage("https://picsum.photos/seed/gp5/1000/800", "gp-img5.jpg");
}
main();
