import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Zak Allal",
  about: "Renaissance polymath. MD.",
  image: {
    url: "people/zak.jpeg",
  },
  social: {
    homepage: "https://www.zakallal.com/",
    mastodon: "", // This has to be a whole link
    twitter: "ZakAllalMD",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "7862266955",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
