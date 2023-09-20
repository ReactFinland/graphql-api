import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Steve Ruiz",
  about:
    "Steve Ruiz is a developer and interaction designer in London, currently working with creative tools. He build lots of prototypes and sometimes those prototypes turn into products.",
  image: {
    url: "people/steve.jpg",
  },
  social: {
    homepage: "https://www.steveruiz.me/",
    mastodon: "", // This has to be a whole link
    twitter: "steveruizok", // Handle without @ is enough
    github: "steveruizok",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "steve-ruiz-61a150239",
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
  tagline: "Founder of tldraw",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
