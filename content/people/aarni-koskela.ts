import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

export default {
  name: "Aarni Koskela",
  about: "Aarni works on the site and the app. Specializes in terrible puns.",
  image: {
    url: "people/aarni.jpg",
  },
  social: {
    homepage: "",
    twitter: "akx",
    github: "akx",
    linkedin: "aarni",
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
