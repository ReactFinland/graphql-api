import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Joe Macleod",
  about:
    "I design endings. Founder & Head of Endineering at andEnd. | Author of Ends & Endineering | TEDx Speaker | Mentors the world’s leading brands in creating the best consumer endings",
  image: {
    url: "people/joe.jpeg",
  },
  social: {
    homepage: "https://www.andend.co/",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Sweden",
      code: "SE",
    },
    city: "Stockholm",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
