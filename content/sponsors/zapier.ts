import { Contact } from "../../server/schema/Contact";

export default {
  name: "Zapier",
  about: "Makes you happier :)",
  image: {
    url: "sponsors/zapier.png",
  },
  social: {
    homepage: "https://www.zapier.com/",
    facebook: "ZapierApp",
    linkedin: "zapier",
    twitter: "zapier",
    youtube: "ZapierApp",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "San Francisco",
  },
} as Contact;
