import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Eeva-Jonna 'Eevis' Panula",
  about:
    "Eeva-Jonna, or Eevis, is an accessibility specialist and senior Android developer. She is also Android GDE and Women Techmakers Ambassador. Her passion is to share knowledge, and she speaks and writes a blog. When she is not doing that, she explores the beautiful Finnish nature either by foot or kayak, or knits.",
  image: {
    url: "people/eevis.jpg",
  },
  social: {
    homepage: "https://eevis.codes",
    twitter: "",
    github: "eevajonnapanula",
    facebook: "",
    medium: "@eevajonna",
    instagram: "",
    linkedin: "eevajonna",
    youtube: "",
    devto: "eevajonnapanula",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.ANDROID],
  type: [ContactType.SPEAKER],
};

export default person;
