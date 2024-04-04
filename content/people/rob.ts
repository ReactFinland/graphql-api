import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Rob Palmer",
  about: "Engineering Manager at Bloomberg LP.",
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
