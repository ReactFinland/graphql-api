import * as fs from "node:fs";
import * as path from "node:path";
import { globSync } from "glob";
import mri from "mri";

interface FileDescriptor {
  basename: string;
  dirname: string;
}

interface IndexFile {
  content: string;
  name: string;
}

type CategorizedFilenames = Record<string, FileDescriptor[]>;

interface CliOptions {
  _: string[];
  format: string;
  verbose: boolean;
}

function main() {
  const args = mri<CliOptions>(process.argv.slice(2), {
    default: {
      format: "ts",
      verbose: false,
    },
    boolean: ["verbose"],
    string: ["format"],
  });
  const { _: rootDirs, format, verbose } = args;
  const indexableDirs = rootDirs
    .flatMap((dir) => globSync(`${dir}/**/.index-modules`))
    .sort((left, right) => left.localeCompare(right))
    .map((markerPath) => path.dirname(markerPath));
  const filenames = indexableDirs.flatMap((dir) =>
    globSync(`${dir}/**/*.${format}`)
  )
    .sort((left, right) => left.localeCompare(right));
  const categorizedFilenames = categorize(filenames);
  const indexFiles = generateIndices(categorizedFilenames, format);

  writeFiles(indexFiles, verbose);
}

function categorize(filenames: string[]): CategorizedFilenames {
  return filenames
    .map((filename) => ({
      basename: path.basename(filename, path.extname(filename)),
      dirname: path.dirname(filename),
    }))
    .reduce<CategorizedFilenames>((result, file) => {
      if (!result[file.dirname]) {
        result[file.dirname] = [];
      }

      result[file.dirname].push(file);

      return result;
    }, {});
}

function generateIndices(
  categorizedFilenames: CategorizedFilenames,
  format: string
): IndexFile[] {
  return Object.keys(categorizedFilenames)
    .sort((left, right) => left.localeCompare(right))
    .map((dirname) => {
      const files = categorizedFilenames[dirname].filter(
        (file) => file.basename !== "index"
      )
        .sort((left, right) => left.basename.localeCompare(right.basename));

      if (files.length < 1) {
        return null;
      }

      return {
        content: generateIndex(files.map((file) => file.basename)),
        name: path.join(dirname, `index.${format}`),
      };
    })
    .filter((indexFile): indexFile is IndexFile => indexFile !== null);
}

function generateIndex(basenames: string[]): string {
  return (
    basenames
      .map(
        (basename) =>
          `export { default as ${toCamelCase(basename)} } from "./${basename}";`
      )
      .join("\n") + "\n"
  );
}

function writeFiles(indexFiles: IndexFile[], verbose: boolean) {
  indexFiles.forEach((file) => {
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

function toCamelCase(value: string): string {
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

      const camelPart =
        index === 0
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);

      return camelPart.replace(/(\d+)([a-z])/g, (_, digits, character) => {
        return `${digits}${character.toUpperCase()}`;
      });
    })
    .join("");
}

main();
