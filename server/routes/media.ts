import { readFile } from "node:fs/promises";
import * as path from "path";
import logger from "../logger";

const publicImageExtensions = new Set([".ico", ".jpeg", ".jpg", ".png", ".svg"]);

async function handleMediaRequest(
  pathname: string,
  mediaUrl: string,
  mediaPath: string
) {
  const asset = decodeURIComponent(pathname.slice(mediaUrl.length + 1));
  const rootPath = path.resolve(mediaPath);
  const filePath = path.resolve(rootPath, asset);

  if (!isInsideRoot(filePath, rootPath) || !isPublicImageAsset(asset)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const body = new Uint8Array(await readFile(filePath));

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

export function isPublicImagePath(pathname: string, mediaUrl: string) {
  if (!pathname.startsWith(`${mediaUrl}/`)) {
    return false;
  }

  const asset = decodeURIComponent(pathname.slice(mediaUrl.length + 1));

  return isPublicImageAsset(asset);
}

function getContentType(filePath: string) {
  switch (path.extname(filePath).toLowerCase()) {
    case ".ico":
      return "image/x-icon";
    case ".jpeg":
    case ".jpg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".svg":
      return "image/svg+xml";
    default:
      return "application/octet-stream";
  }
}

function isPublicImageAsset(asset: string) {
  return publicImageExtensions.has(path.extname(asset).toLowerCase());
}

function isInsideRoot(filePath: string, rootPath: string) {
  return filePath === rootPath || filePath.startsWith(`${rootPath}${path.sep}`);
}

export default handleMediaRequest;
