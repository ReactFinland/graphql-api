import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tony Kovanen",
  about:
    "Founding Engineer at [mastra.ai](https://mastra.ai/). Previously co-founder/CTO @ Vercel, co-creator of Next.js, CTO @ based.io, principal engineer @ Gatsby etc.",
  image: {
    url: "people/tony-kovanen.jpeg",
  },
  social: {
    homepage: "",
    mastodon: "", // This has to be a whole link
    twitter: "TonyKovanen", // Handle without @ is enough
    bluesky: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "tony-kovanen-36991a74",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
