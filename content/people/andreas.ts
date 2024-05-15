import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Andreas Møller",
  about:
    "Andreas Møller is a software engineer with 20+ years of experience. He is a Fellow of the British Computer Society and does not think text editors are the best way to build web apps. He is the CEO and co-founder of [toddle](https://www.toddle.dev/) - the design collaboration tool for developers and designers.",
  image: {
    url: "people/andreas.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "andreas-møller-bbb1a14",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Denmark",
      code: "DK",
    },
    city: "Copenhagen",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
