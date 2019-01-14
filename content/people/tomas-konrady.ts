import { ContactType } from "../../server/schema";
import keywords from "../keywords";

export default {
  name: "Tomáš Konrády",
  about: "Developer... (and artist a bit)",
  image: "people/tomas.jpg",
  social: {
    twitter: "konnnyy",
    github: "tommmyy",
    linkedin: "tomaskonrady",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Hradec Kralove",
  },
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};
