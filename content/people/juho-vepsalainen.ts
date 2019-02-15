import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juho Vepsäläinen",
  about:
    "Juho Vepsäläinen is behind the SurviveJS effort. He has been active in the open source scene since the early 2000s and participated in projects like Blender and webpack as a core team member. Blue Arrow Awards winner.",
  image: {
    url: "people/juho.jpg",
  },
  social: {
    homepage: "https://survivejs.com/",
    twitter: "bebraw",
    medium: "@bebraw",
    github: "bebraw",
    linkedin: "juhovepsalainen",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [Keyword.TOOLING, Keyword.WEBPACK],
  type: [ContactType.ORGANIZER, ContactType.SPEAKER, ContactType.WORKSHOP_HOST],
};

export default person;
