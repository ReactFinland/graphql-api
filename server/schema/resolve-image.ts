import cloudinary from "cloudinary";
import * as path from "path";
import { env } from "process";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

let resources: Array<{ id: string; url: string }> = [];

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

async function resolveImage(mediaUrl: string, mediaPath: string, url: string) {
  const source: string = path.join(mediaPath, url);

  // TODO: Figure out how to derive the same resource id as cloudinary does
  const resourceId: string = url.split("?")[0].replace(/\//g, "-");
  const matchedResource = resources.find(
    resource => resource.id === resourceId
  );

  if (!matchedResource) {
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

  if (process.env.PROXY_CLOUDINARY) {
    return `${mediaUrl}${matchedResource.url.split("res.cloudinary.com")[1]}`;
  }

  return `${mediaUrl}/${url}`;
}

export { initImageRegistry, resolveImage };
