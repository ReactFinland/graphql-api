import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Tejas Kumar",
  about: "I write code and love life.",
  image: "people/tejas.jpg",
  social: {
    homepage: "",
    twitter: "TejasKumar_",
    github: "tejasq",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};
