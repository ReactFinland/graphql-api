import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Una Kravets",
  about:
    "Una leads the Web UI DevRel team at Google Chrome, focusing on making the web platform a more robust and powerful tool for developers through new CSS, HTML, and JavaScript APIs. She is also a member of the CSS Working Group and OpenUI Community Group. Before that, Una worked on building scalable and expressive design systems as a Developer Advocate on the Material Design team, as the Director of Product Design at Bustle Digital Group, and as a UI Engineer at DigitalOcean and IBM Design. Offline, Una loves gardening, sewing, and traveling as much as possible.",
  image: {
    url: "people/una.jpg",
  },
  social: {
    homepage: "https://una.im/",
    mastodon: "https://front-end.social/@una", // This has to be a whole link
    twitter: "una", // Handle without @ is enough
    bluesky: "una.im",
    github: "una",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "unakravets",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
