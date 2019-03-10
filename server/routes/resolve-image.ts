import cloudinary from "cloudinary";
import * as fs from "fs-extra";
import md5 from "md5";
import * as path from "path";
import { env } from "process";
import request from "request-promise-native";

if (env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: env.CLOUDINARY_CLOUD_NAME,
    api_key: env.CLOUDINARY_API_KEY,
    api_secret: env.CLOUDINARY_API_SECRET,
  });
}

let resources: Array<{ id: string; url: string; md5?: string }> = [];

function initImageRegistry() {
  cloudinary.api.resources(
    result => {
      if (!result.resources) {
        throw new Error("No image resources!");
      }

      resources = result.resources.map(resource => ({
        id: resource.public_id,
        url: resource.secure_url,
      }));
    },
    {
      max_results: 500,
    }
  );
}

// FIXME: Likely this should be called somewhere else (app init)
initImageRegistry();

async function resolveImage(mediaPath: string, url: string) {
  const source: string = path.join(mediaPath, url);

  if (!env.CLOUDINARY_CLOUD_NAME) {
    return source;
  }

  // TODO: Figure out how to derive the same resource id as cloudinary does
  const resourceId: string = url.split("?")[0].replace(/\//g, "-");
  const matchedResource = resources.find(
    resource => resource.id === resourceId
  );

  if (!matchedResource) {
    return await uploadToCloudinary(source, resourceId);
  }

  let fileMd5 = matchedResource.md5;

  if (!fileMd5) {
    // Calculate and cache md5 to avoid some fs ops.
    // TODO: It would be better to use something like Redis for this.
    fileMd5 = md5(await fs.readFile(source));
    matchedResource.md5 = fileMd5;
  }

  // Check etag as the file contents may have changed
  const { etag } = await request.head(matchedResource.url);

  if (etag === `W/"${fileMd5}"`) {
    return matchedResource.url;
  }

  return await uploadToCloudinary(source, resourceId);
}

async function uploadToCloudinary(source: string, resourceId: string) {
  try {
    const uploadedAsset = await cloudinary.v2.uploader.upload(source, {
      overwrite: true,
      public_id: resourceId,
    });
    const imageUrl = uploadedAsset.secure_url;

    resources.push({ id: resourceId, url: imageUrl });

    return imageUrl;
  } catch (err) {
    throw new Error(err.message);
  }
}

export { initImageRegistry, resolveImage };
