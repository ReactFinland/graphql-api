import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Sven Sauleau",
  about:
    "Sven is a software engineer living in France and mostly working with Golang and JavaScript. OSS enthusiast and one of the persons behind Babel.",
  image: "people/sven.jpg",
  social: {
    homepage: "http://www.xtuc.fr/",
    twitter: "svensauleau",
    github: "xtuc",
  },
  location: {
    country: {
      name: "France",
      code: "FR",
    },
    city: "",
  },
  keywords: [keywords.BABEL, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};
