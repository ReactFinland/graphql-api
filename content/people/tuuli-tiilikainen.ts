import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";

export default {
  name: "Tuuli Tiilikainen",
  about: "",
  image: {
    url: "people/tuuli.jpg",
  },
  social: {
    homepage: "https://www.columbiaroad.com/people/tuuli-tiilikainen",
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
