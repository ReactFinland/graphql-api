import * as path from "path";
import logger from "../logger";
import { resolveImage } from "./resolve-image";

function routeMedia(router, mediaUrl, mediaPath) {
  router.all(`${mediaUrl}/*`, async (req, res, next) => {
    const asset = req.params["0"];

    if ([".jpg", ".png", ".svg"].includes(path.extname(asset))) {
      try {
        const url = await resolveImage(mediaPath, asset);

        // TODO: This is where it would be possible to intercept and cache
        // so we don't hit Cloudinary CDN.
        // Likely we want something like images.react-finland.fi and then use
        // that as a bucket for some CDN (Cloudflare?) to decouple images from
        // the API.
        res.redirect(url);
      } catch (err) {
        logger.error(err);

        next();
      }
    } else {
      res.sendFile(asset, { root: mediaPath }, err => {
        res.end();

        if (err) {
          logger.error(err);
        }
      });
    }
  });
}

export default routeMedia;
