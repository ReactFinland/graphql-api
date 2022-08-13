import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Esa-Matti Suuronen",
  about:
    "Esa-Matti is a software developer from Jyväskylä, Finland with more than 10 years of professional software development experience who has used React and Node.js since their 0.x days. Currently working for Valu Digital as a Lead Developer building developer tools.",
  image: {
    url: "people/esa-matti.jpg",
  },
  social: {
    homepage: "https://esamatti.fi/",
    twitter: "esamatti",
    github: "esamattis",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Jyväskylä",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
