import cloudinary from "cloudinary";
import * as path from "path";
import { env } from "process";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

let resourceIds: string[] = [];

function initImageRegistry() {
  cloudinary.api.resources(
    result => {
      if (!result.resources) {
        throw new Error("No image resources!");
      }

      resourceIds = result.resources.map(resource => resource.public_id);
    },
    {
      max_results: 500,
    }
  );
}

// FIXME: Likely this should be called somewhere else (app init)
initImageRegistry();

async function resolveImage(mediaPath, url) {
  const source: string = path.join(mediaPath, url);
  const resourceId: string = url.split("?")[0].replace(/\//g, "-");

  if (!resourceIds.find(id => id === resourceId)) {
    try {
      const uploadedAsset = await cloudinary.v2.uploader.upload(source, {
        overwrite: true,
        public_id: resourceId,
      });

      resourceIds.push(resourceId);

      return uploadedAsset.secure_url;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return cloudinary.url(resourceId);
}

export { initImageRegistry, resolveImage };
