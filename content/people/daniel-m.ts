import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Daniel Minor",
  about: "Staff Software Developer at Mozilla Corporation.",
  image: {
    url: "people/daniel-m.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "dminor",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "daminor",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Canada",
      code: "CA",
    },
    city: "Ottawa",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
