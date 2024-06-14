import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Rob Palmer",
  about:
    "Rob Palmer leads JavaScript Infrastructure at Bloomberg. He serves as Co-chair of Ecma TC39 - the JavaScript language committee. He works on scaling JavaScript and TypeScript to power the Bloomberg Terminal with an emphasis on performance for users and developers. He enjoys collaborative investments in open source that expand the boundaries and applications of JavaScript.",
  image: {
    url: "people/rob.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "robpalmer2", // Handle without @ is enough
    github: "robpalme",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "robpalmer2",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
