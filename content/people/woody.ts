import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Woody Zuill",
  about:
    "I do Mob Programming workshops, talks and presentations on agile topics, and I coach and guide folks interested in creating a wonderful workplace where people can excel in their work, and in their life",
  image: {
    url: "people/woody.jpg",
  },
  social: {
    homepage: "https://woodyzuill.com/",
    twitter: "WoodyZuill",
    github: "wzuill",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "woodyzuill",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "San Diego",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
