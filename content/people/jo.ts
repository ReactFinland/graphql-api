import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jo Franchetti",
  about:
    "Jo is a Developer Advocate, passionate about teaching best use of the web and its technologies. She’s got 10 years experience as a front end developer and has worked in various parts of the tech industry from start-ups, agencies, charities to large organisations. She is a mentor and organiser at codebar.io and at Front End Foxes where she is able to act on her passion not only for teaching but also for improving the diversity and inclusivity of the tech industry.",
  image: {
    url: "people/jo.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "ThisIsJoFrank", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "thisisjofrank",
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
