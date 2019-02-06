import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juha Linnanen",
  about: "Head of mobile dev @GoforeGroup. React Native & Android background.",
  image: {
    url: "people/juha.jpg",
  },
  social: {
    homepage: "",
    twitter: "pillar15",
    github: "eduplus",
    linkedin: "juha-linnanen",
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
