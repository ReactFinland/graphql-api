import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

export default {
  name: "Joni Nevalainen",
  about: "Joni Nevalainen works on the app.",
  image: {
    url: "people/joni.jpg",
  },
  social: {
    homepage: "",
    twitter: "joninevalainen",
    github: "joni-",
    linkedin: "nevalainenjoni",
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
