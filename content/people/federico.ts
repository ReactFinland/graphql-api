import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Federico Fregosi",
  about:
    "I am a seasoned engineering leader with a strong interest in distributed, highly scalable, and cloud-based systems. Currently at Wise as a Staff Software Engineer in the SRE team.",
  image: {
    url: "people/federico.jpeg",
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
    linkedin: "federico-fregosi",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "UK",
    },
    city: "London",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
