import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Pete Bacon Darwin",
  about: "Systems Engineer at Cloudflare, Angular team member, AngularConnect organiser, Dad.",
  image: {
    url: "people/pete.jpeg",
  },
  social: {
    homepage: "https://www.bacondarwin.com/",
    mastodon: "", // This has to be a whole link
    twitter: "petebd", // Handle without @ is enough
    github: "petebacondarwin",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
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
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
