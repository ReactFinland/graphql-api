import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Jani Eväkallio",
  about:
    "Jani is a small-town Finnish boy far from home. Today he leads a team building cross-stack React mobile and web apps at Formidable London and, in his spare time, performs improvised comedy and speaks at conferences advocating for the React ecosystem, particularly React Native and GraphQL.",
  image: {
    url: "people/jani.jpg",
  },
  social: {
    homepage: "",
    twitter: "jevakallio",
    github: "jevakallio",
    linkedin: "jevakallio",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "GB",
    },
    city: "London",
  },
  keywords: [keywords.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
