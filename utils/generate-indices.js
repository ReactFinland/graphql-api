const fs = require("node:fs");
const path = require("path");
const { globSync } = require("glob");
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

  const indexableDirs = rootDirs
    .flatMap(dir => globSync(`${dir}/**/.index-modules`))
    .map(p => path.dirname(p));
  const filenames = indexableDirs.flatMap(dir =>
    globSync(`${dir}/**/*.${format}`)
  );
  const categorizedFilenames = categorize(filenames);
  const indexFiles = generateIndices(categorizedFilenames, format);

  writeFiles(indexFiles, verbose);
}

function categorize(filenames) {
  return filenames
    .map(filename => ({
      basename: path.basename(filename, path.extname(filename)),
      dirname: path.dirname(filename),
      extname: path.extname(filename),
    }))
    .reduce((result, file) => {
      if (!result[file.dirname]) {
        result[file.dirname] = [];
      }

      result[file.dirname].push(file);

      return result;
    }, {});
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
          `export { default as ${toCamelCase(basename)} } from "./${basename}";`
      )
      .join("\n") + "\n"
  );
}

function writeFiles(indexFiles, verbose) {
  indexFiles.forEach(file => {
    const oldContent = fs.readFileSync(file.name, { encoding: "utf8" });
    const contentDiffers = file.content.trim() !== oldContent.trim();

    if (contentDiffers) {
      if (verbose) {
        console.log(`Writing ${file.name}`);
      }
      fs.writeFileSync(file.name, file.content, "utf8");
    }
  });
}

function toCamelCase(value) {
  const normalized = value
    .replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "")
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);

  if (normalized.length < 1) {
    return "";
  }

  return normalized
    .map((part, index) => {
      const lower = part.toLowerCase();

      return index === 0
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
}

main();
