import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Yoav Ganbar",
  about:
    "DevRel 🥑 & DX @ Builder.io | Content Creator | Software Architect | Tech Lead | Podcast host | Community Organizer",
  image: {
    url: "people/yoav.jpeg",
  },
  social: {
    homepage: "https://www.hamatoyogi.dev/",
    mastodon: "", // This has to be a whole link
    twitter: "HamatoYogi",
    github: "hamatoyogi",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "yoav-ganbar",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Israel",
      code: "IL",
    },
    city: "Tel Aviv",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
