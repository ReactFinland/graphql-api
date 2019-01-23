const fs = require("fs");
const path = require("path");
const camelCase = require("camelcase");
const flatmap = require("flatmap");
const glob = require("glob");
const groupBy = require("lodash.groupby");
const mri = require("mri");
const argv = process.argv.slice(2);

function main() {
  const args = mri(argv, {
    default: {
      format: "ts",
      verbose: false,
    },
    boolean: ["verbose"],
    string: ["format"],
  });
  const { _: rootDirs, format, verbose } = args;

  const indexableDirs = flatmap(rootDirs, dir =>
    glob.sync(`${dir}/**/.index-modules`)
  ).map(p => path.dirname(p));
  const filenames = flatmap(indexableDirs, dir =>
    glob.sync(`${dir}/**/*.${format}`)
  );
  const categorizedFilenames = categorize(filenames);
  const indexFiles = generateIndices(categorizedFilenames, format);

  writeFiles(indexFiles, verbose);
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

function generateIndices(categorizedFilenames, format) {
  return Object.keys(categorizedFilenames)
    .map(dirname => {
      const files = categorizedFilenames[dirname].filter(
        f => f.basename !== "index"
      );

      if (files.length < 1) {
        return null;
      }

      return {
        name: path.join(dirname, `index.${format}`),
        content: generateIndex(files.map(f => f.basename)),
      };
    })
    .filter(Boolean);
}

function generateIndex(basenames) {
  return (
    basenames
      .map(
        basename =>
          `export { default as ${camelCase(basename)} } from "./${basename}";`
      )
      .join("\n") + "\n"
  );
}

function writeFiles(indexFiles, verbose) {
  indexFiles.forEach(
    file =>
      (verbose && console.log(`Writing ${file.name}`)) ||
      fs.writeFileSync(file.name, file.content, "utf8")
  );
}

main();
