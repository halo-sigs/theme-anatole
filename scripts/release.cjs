const fs = require("fs");
const path = require("path");
const AdmZip = require("adm-zip");
const version = require("../package.json").version;

const zip = new AdmZip();

const entries = ["package.json", "theme.yaml", "templates"];

const folderName = `theme-anatole-${version}`;

async function main() {
  for (const key in entries) {
    const entry = entries[key];

    const realPath = path.resolve(__dirname, "../", entry);
    const entryStat = fs.statSync(realPath);

    if (entryStat.isFile()) {
      zip.addLocalFile(realPath, folderName);
    } else {
      await zip.addLocalFolderPromise(realPath, {
        zipPath: folderName + "/" + entry,
      });
    }
  }

  zip.writeZip(path.resolve(__dirname, `../dist/${folderName}.zip`));
}

main().catch((err) => {
  console.log(err);
});
