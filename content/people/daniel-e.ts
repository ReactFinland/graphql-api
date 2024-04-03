import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Daniel Ehrenberg",
  about:
    "Software engineer at Bloomberg, former Igalia and Google. Contributes to TC39. he/they(((🏳️‍🌈)))",
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
