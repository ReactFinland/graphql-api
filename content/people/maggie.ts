import { Contact } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Maggie Appleton",
  about: "",
  image: {
    url: "people/maggie.jpg",
  },
  social: {
    homepage: "https://maggieappleton.com/",
    mastodon: "https://indieweb.social/@maggie", // This has to be a whole link
    twitter: "Mappletons", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "maggieappleton",
    youtube: "",
    devto: "",
    // dribbble https://dribbble.com/mappleton
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  keywords: [],
  type: [],
};

export default person;
