import { Contact } from "../../server/schema/Contact";

export default {
  name: "WebExpo",
  about: "The web event of the year",
  image: {
    url: "sponsors/webexpo.png",
  },
  social: {
    homepage: "https://www.webexpo.net/",
    facebook: "WebExpo",
    twitter: "webexpo",
    medium: "webexpo",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Prague",
  },
} as Contact;
