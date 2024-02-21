import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Kevin Whinnery",
  about: `Kevin is the Head of Developer Relations at [Deno](https://deno.com/runtime). He is a JavaScript developer and developer advocate, experienced in building and leading technical teams. Kevin has been working as an engineer and leader in the developer tools space for most of the last two decades. Notably, Kevin spent nearly ten years at Twilio, part of the early team that defined Twilio’s successful developer relations program. He was the founding leader of Twilio’s documentation team, the creator and lead developer of TwilioQuest (an educational PC game built with web technologies), and the author of Twilio's official Node.js module, which to date has been downloaded by developers over 129 million times on npm.`,
  image: {
    url: "people/kevin.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "kevinwhinnery",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "",
  },
  keywords: [Keyword.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
