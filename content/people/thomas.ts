import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Thomas Allmer",
  about:
    "Maintainer Open Web Components, Modern Web, Rocket and works at ING doing Design Systems and Lion Web Components",
  image: {
    url: "people/thomas.jpg",
  },
  social: {
    homepage: "https://modern-web.dev",
    twitter: "daKmoR",
    github: "daKmoR",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "thomas-allmer-1b264716",
    youtube: "",
    devto: "https://dev.to/dakmor",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  keywords: [Keyword.WEB_COMPONENTS, Keyword.SSG, Keyword.OPEN_SOURCE],
  type: [ContactType.SPEAKER],
};

export default person;
