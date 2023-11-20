import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Yulia Startsev",
  about:
    "Currently working on the SpiderMonkey Compiler at Mozilla. Interested in programming language theory, compilers, standardization and the open web.",
  image: {
    url: "people/yulia.jpg",
  },
  social: {
    homepage: "https://hag.codes/",
    mastodon: "", // This has to be a whole link
    twitter: "codehag", // Handle without @ is enough
    github: "codehag",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "yulia-s-882a3382",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
