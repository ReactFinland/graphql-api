import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Pasi Sillanpää",
  about:
    "Pasi Sillanpää brings broad, cross-disciplinary experience in building and scaling new initiatives. His background spans marketing and advertising, mobile service development, leadership and management transformation, and product development. He currently serves as Chief Operating Officer of a semiconductor start-up, operating in one of the world’s most technically demanding and complex product development environments.",
  image: {
    url: "people/pasi.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "pasi-sillanpää-1592b75",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
