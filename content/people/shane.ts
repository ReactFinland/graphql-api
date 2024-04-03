import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Shane Carr",
  about:
    "Staff Software Engineer at Google. Enthusiastic about building for everyone. Interested in internationalization (i18n) and building software for the next billion users. Experienced in Unicode & JavaScript standards, full-stack & cross-platform development, machine learning, and computational chemistry.",
  image: {
    url: "people/shane.jpg",
  },
  social: {
    homepage: "https://www.sffc.xyz/",
    mastodon: "https://bsky.app/profile/sffc.bsky.social", // This has to be a whole link
    twitter: "_sffc", // Handle without @ is enough
    github: "sffc",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "California",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
