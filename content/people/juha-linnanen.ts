import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Juha Linnanen",
  about: "Mobile dev enthusiast, boardgamer and mtg cuber.",
  image: {
    url: "people/juha.jpg",
  },
  social: {
    homepage: "",
    twitter: "pillar15",
    github: "eduplus",
    linkedin: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [ContactType.SPEAKER],
};

export default person;
