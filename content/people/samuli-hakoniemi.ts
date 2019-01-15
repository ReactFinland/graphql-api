import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

export default {
  name: "Samuli Hakoniemi",
  about: "",
  image: {
    url: "people/samuli.jpg",
  },
  social: {
    homepage: "",
    twitter: "zvona",
    github: "zvona",
    linkedin: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
  },
  keywords: [],
  type: [ContactType.ORGANIZER],
} as Contact;
