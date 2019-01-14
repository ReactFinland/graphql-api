import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Bruno Lourenço",
  about: "",
  image: "people/bruno.jpg",
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
};
