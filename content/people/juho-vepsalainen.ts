import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Juho Vepsäläinen",
  about:
    "Juho Vepsäläinen, a doctor of science (DSc), has decades of experience with open source development. Besides a developer, he is also an academic researcher and teacher focused on web development. He is also the director of Future Frontend conference and is responsible for crafting its program and concept.",
  image: {
    url: "people/juho.jpg",
  },
  company: "SurviveJS Oy",
  social: {
    homepage: "https://survivejs.com/",
    twitter: "bebraw",
    medium: "@bebraw",
    github: "bebraw",
    linkedin: "juhovepsalainen",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Rautalampi",
  },
  keywords: [Keyword.TOOLING, Keyword.WEBPACK],
  type: [ContactType.ORGANIZER],
};

export default person;
