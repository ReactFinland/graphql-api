import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

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
  keywords: [Keyword.REACT, Keyword.REACT_NATIVE],
  type: [ContactType.SPEAKER],
};

export default person;
