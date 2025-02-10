import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Devlin Duldulao",
  about:
    "Co-author of the Packt book Practical Enterprise React, Devlin has been using HTML, CSS, and TypeScript to build web and mobile apps for customers for years. He has been a Microsoft MVP and an on-site React trainer for eight years.",
  image: {
    url: "people/devlin.jpg",
  },
  social: {
    homepage: "https://devlinduldulao.pro/",
    mastodon: "", // This has to be a whole link
    twitter: "DevlinDuldulao", // Handle without @ is enough
    bluesky: "devlinduldulao.pro",
    github: "webmasterdevlin",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "devlinduldulao",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Norway",
      code: "NO",
    },
    city: "Oslo",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
