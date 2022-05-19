const path = require("path");
const fs = require("fs");

const incVersion = () => {
  const filename = path.join(__dirname, "../sw/sw-cache-name.js");
  const dataIn = fs.readFileSync(filename).toString();
  const prePend = 'export const CACHE_NAME = "v';
  const postPend = '";\n';
  const version = parseInt(dataIn.replace(prePend, "").replace('"', "").trim());
  const dataOut = prePend + (version + 1).toString() + postPend;
  fs.writeFileSync(filename, dataOut);
};

// const createPreCache = () => {
//   const filename = path.join(__dirname, "../dist/manifest.json");
//   const swManifest = JSON.parse(fs.readFileSync(filename).toString());
//   const assets = Object.values(swManifest).reduce(
//     (a, i) => [...a, i.file].concat(i.css || []).concat(i.assets || []),
//     ["index.html", "offline.html"]
//   );
//   const assetsStr =
//     assets.reduce(
//       (a, asset) => `${a}  "${asset}",\n`,
//       "export const urlsToCache = [\n"
//     ) + "];\n";
//   fs.writeFileSync(path.join(__dirname, "../sw/cacheItems.js"), assetsStr);
// };

incVersion();
// createPreCache();

require("child_process").execSync("npm run build:sw", { stdio: "inherit" });
