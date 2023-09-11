import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jason Rametta",
  about: "Certified TypeScript compiler API guru.",
  image: {
    url: "people/jason.jpg",
  },
  social: {
    homepage: "https://rametta.org/",
    mastodon: "", // This has to be a whole link
    twitter: "rametta", // Handle without @ is enough
    github: "rametta",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Canada",
      code: "CA",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
