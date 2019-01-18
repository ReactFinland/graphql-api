import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Sara Vieira",
  about:
    "Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.",
  image: {
    url: "people/sara.jpg",
  },
  social: {
    homepage: "https://iamsaravieira.com/",
    twitter: "NikkitaFTW",
    github: "SaraVieira",
    linkedin: "saravieira1",
  },
  location: {
    country: {
      name: "Portugal",
      code: "PT",
    },
    city: "",
  },
  keywords: [keywords.REACT, keywords.TESTING],
  type: [ContactType.SPEAKER],
};

export default person;
