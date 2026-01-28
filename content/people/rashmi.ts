import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Rashmi Suralkar",
  about:
    "Rashmi is a seasoned Senior Front-End Developer with over 16+ years of experience in web development and front-end technologies. Demonstrative experience in development of web applications with thorough knowledge in front-end and backend server-side technologies. As a collaborative team player with strong communication skills, I excel at bridging technical and non-technical teams, ensuring project success and adding significant value to every initiative I contribute to.",
  image: {
    url: "people/rashmi.jpeg",
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
    linkedin: "rashmisuralkar",
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
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
