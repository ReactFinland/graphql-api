import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Ramona Schwering",
  about:
    "I currently work as a Developer Advocate at Auth0 by Okta. I love to pass on my knowledge and expertise and my great love for frontend development, quality in this area, and design to others as a speaker at large conferences with a lot of heart and soul. For me, one thing counts above all: I hope that I can become the role model I wished for myself at the beginning of my career.",
  image: {
    url: "people/ramona.jpeg",
  },
  social: {
    homepage: "https://www.ramona.codes/",
    mastodon: "", // This has to be a whole link
    twitter: "leichteckig", // Handle without @ is enough
    bluesky: "",
    github: "leichteckig",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "ramona-schwering",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Schöppingen",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
