import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Ville Immonen",
  about:
    "Software developer who works on developer tools at Expo. Formerly co-founded Reindex, a hosted GraphQL service. Likes good coffee, snowboarding and surfing. Lives in Finland with his family.",
  image: {
    url: "people/ville.jpg",
  },
  social: {
    twitter: "VilleImmonen",
    github: "fson",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Espoo",
  },
  keywords: [
    keywords.REACT,
    keywords.REACT_NATIVE,
    keywords.TOOLING,
    keywords.UNIVERSAL_REACT,
  ],
  type: [ContactType.SPEAKER],
};

export default person;
