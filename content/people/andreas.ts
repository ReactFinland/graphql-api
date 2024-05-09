import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Andreas Møller",
  about:
    "Experienced Vice President Of Engineering with a demonstrated history of working in the information technology and services industry.",
  image: {
    url: "people/andreas.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "andreas-møller-bbb1a14",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Denmark",
      code: "DK",
    },
    city: "Copenhagen",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
