import * as path from "path";
import * as fs from "fs-extra";
import logger from "../logger";

async function handleMediaRequest(
  pathname: string,
  mediaUrl: string,
  mediaPath: string
) {
  const asset = decodeURIComponent(pathname.slice(mediaUrl.length + 1));
  const rootPath = path.resolve(mediaPath);
  const filePath = path.resolve(rootPath, asset);

  if (!isInsideRoot(filePath, rootPath)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    if (!(await fs.pathExists(filePath))) {
      return new Response("Not found", { status: 404 });
    }

    const body = await fs.readFile(filePath);

    return new Response(body, {
      headers: {
        "content-type": getContentType(filePath),
      },
      status: 200,
    });
  } catch (err) {
    logger.error(err);

    return new Response("Not found", { status: 404 });
  }
}

function getContentType(filePath: string) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".eot":
      return "application/vnd.ms-fontobject";
    case ".ico":
      return "image/x-icon";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    case ".md":
      return "text/markdown; charset=utf-8";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    case ".ttf":
      return "font/ttf";
    case ".woff":
      return "font/woff";
    case ".woff2":
      return "font/woff2";
    default:
      return "application/octet-stream";
  }
}

function isInsideRoot(filePath: string, rootPath: string) {
  return filePath === rootPath || filePath.startsWith(`${rootPath}${path.sep}`);
}

export default handleMediaRequest;
