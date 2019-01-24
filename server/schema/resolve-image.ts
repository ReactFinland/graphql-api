import cloudinary from "cloudinary";
import * as path from "path";
import { env } from "process";
import urlExists from "url-exists";

cloudinary.config({
  cloud_name: env.CLOUDINARY_CLOUD_NAME,
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});

async function resolveImage(mediaPath, url) {
  const source = path.join(mediaPath, url);
  const id = url.split("?")[0].replace(/\//g, "-");
  const cloudinaryUrl = cloudinary.url(id);

  if (!(await assetExists(cloudinaryUrl))) {
    try {
      const uploadedAsset = await cloudinary.v2.uploader.upload(source, {
        overwrite: true,
        public_id: id,
      });

      return uploadedAsset.secure_url;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return cloudinaryUrl;
}

function assetExists(url) {
  return new Promise((resolve, reject) => {
    urlExists(url, (err, exists) => {
      if (err) {
        return reject(err);
      }

      resolve(exists);
    });
  });
}

export default resolveImage;
