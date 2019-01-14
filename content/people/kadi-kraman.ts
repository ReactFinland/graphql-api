import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Kadi Kraman",
  about:
    "Kadi is a Software Engineer at Formidable, JavaScript enthusiast, believer in open source and a huge fan of sticking JavaScript on every possible platform.",
  image: "people/kadi.jpg",
  social: {
    twitter: "kadikraman",
    github: "kadikraman",
  },
  location: {
    country: {
      name: "Estonia",
      code: "EE",
    },
    city: "London",
  },
  keywords: [keywords.GRAPHQL],
  type: [ContactType.SPEAKER, ContactType.LIGHTNING_TALK],
};
