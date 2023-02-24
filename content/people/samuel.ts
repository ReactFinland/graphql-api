import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Samuel Macleod",
  about: "Systems Engineer at Cloudflare and Technical Development",
  image: {
    url: "people/samuel.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "penalosa",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "penalosa",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "Edinburgh",
  },
  tagline: "Secures your edge",
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
