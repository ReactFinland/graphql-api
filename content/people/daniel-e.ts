import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Daniel Ehrenberg",
  about:
    "Daniel Ehrenberg is a software engineer on Bloomberg’s JavaScript Infrastructure & Tooling Engineering team. He serves as the Vice President of Ecma International and contributes to Ecma TC39, the JavaScript standards committee. Daniel has dabbled in WebAssembly and web standards as well, both while at Bloomberg and in his previous positions at Igalia, a free software cooperative, and at Google on the V8 team, the JavaScript engine in Chrome.",
  image: {
    url: "people/daniel-e.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "littledan", // Handle without @ is enough
    github: "littledan",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "danielehrenberg",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "New York",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
