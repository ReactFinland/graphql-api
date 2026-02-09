import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Salla Lehtipuu",
  about: "Graphic recorder & visual facilitator.",
  image: {
    url: "people/salla.jpeg",
  },
  social: {
    homepage: "https://www.sallalehtipuu.fi/",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "sallalehtipuu",
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
