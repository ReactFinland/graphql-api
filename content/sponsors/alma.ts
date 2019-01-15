import { Contact } from "../../server/schema/Contact";

export default {
  name: "Alma Media",
  about: "Courage to grow",
  image: {
    url: "sponsors/alma.png",
  },
  social: {
    homepage: "https://www.almamedia.fi/",
    facebook: "almamedia",
    instagram: "almamedia_fi",
    twitter: "almamedia_fi",
    linkedin: "company/alma-media-corporation",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
} as Contact;
