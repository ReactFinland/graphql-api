import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ohans Emmanuel",
  about:
    "Staff software engineer and technical author with 5+ published books. Since 2017, he’s written extensively about software and product development, with his work reaching 5M+ readers. He specialises in turning complex problems into simple, reliable systems and building delightful user interfaces that hold up in the real world.",
  image: {
    url: "people/ohans.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "ohansemmanuel",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "ohans-emmanuel",
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
  keywords: [], // [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
