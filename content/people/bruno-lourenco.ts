import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

export default {
  name: "Bruno Lourenço",
  about: "",
  image: {
    url: "people/bruno.jpg",
  },
  social: {
    homepage: "",
    twitter: "brunnolou",
    github: "brunnolou",
    linkedin: "",
  },
  location: {
    country: {
      name: "Portugal",
      code: "PT",
    },
    city: "Braga",
  },
  keywords: [keywords.REACT],
  type: [ContactType.SPEAKER],
} as Contact;
