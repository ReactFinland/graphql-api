import { Contact } from "../../server/schema/Contact";

const person: Contact = {
  name: "Jussi Kinnula",
  about: "",
  image: {
    url: "people/jussi.jpeg",
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
    linkedin: "",
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
  type: [],
};

export default person;
