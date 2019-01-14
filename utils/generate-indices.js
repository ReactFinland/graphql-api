const fs = require("fs");
const path = require("path");
const flatmap = require("flatmap");
const glob = require("glob");
const groupBy = require("lodash.groupby");
const mri = require("mri");
const argv = process.argv.slice(2);

function main() {
  const rootDirs = mri(argv)._;

  const filenames = flatmap(rootDirs, dir => glob.sync(`${dir}/**/*`));
  const categorizedFilenames = categorize(filenames);
  const indexFiles = generateIndices(categorizedFilenames);

  writeFiles(indexFiles);
}

function categorize(filenames) {
  return groupBy(
    filenames.map(filename => ({
      basename: path.basename(filename, path.extname(filename)),
      dirname: path.dirname(filename),
      extname: path.extname(filename),
    })),
    "dirname"
  );
}

function generateIndices(categorizedFilenames) {
  return Object.keys(categorizedFilenames)
    .map(dirname => {
      const files = categorizedFilenames[dirname].filter(
        f => f.basename !== "index"
      );

      if (files.length < 1) {
        return null;
      }

      return {
        filename: path.join(dirname, `index${files[0].extname}`),
        content: generateIndex(files.map(f => f.basename)),
      };
    })
    .filter(Boolean);
}

function generateIndex(basenames) {
  return basenames
    .map(
      basename => `export { default as "${basename}" } from "./${basename}";`
    )
    .join("\n");
}

function writeFiles() {}

main();
