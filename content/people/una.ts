import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Una Kravets",
  about:
    "Hi, I'm Una! I’ve spent my career working on making the web a better place for designers and developers. Currently, I lead the Web UI Developer Relations team at Google Chrome, where I support millions of developers through improvements to native web capabilities and platform APIs.",
  image: {
    url: "people/una.jpg",
  },
  social: {
    homepage: "https://una.im/",
    mastodon: "https://front-end.social/@una", // This has to be a whole link
    twitter: "una", // Handle without @ is enough
    bluesky: "una.im",
    github: "una",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "unakravets",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
