import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Artem Zakharchenko",
  about:
    "Full-stack JavaScript engineer, doctor, musician, designer. Walking the marvelous road of learning.",
  image: {
    url: "people/artem-z.jpg",
  },
  social: {
    homepage: "",
    twitter: "kettanaito",
    github: "kettanaito",
    linkedin: "artem-zakharchenko",
  },
  location: {
    country: {
      name: "Czech Republic",
      code: "CZ",
    },
    city: "Prague",
  },
  keywords: [keywords.REACT, keywords.STYLING, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
