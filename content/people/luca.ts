import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Luca Casonato",
  about:
    "I'm a developer and open source enthusiast. I like Rust, Go, TypeScript, and fast websites. I work at the Deno company, building Deno, Deno Deploy, and Fresh. I also serve as a delegate at TC39. I build deno-puppeteer, and a few other open source libraries. Probably reading some web spec right now.",
  image: {
    url: "people/luca.jpeg",
  },
  social: {
    homepage: "https://lcas.dev/",
    mastodon: "", // This has to be a whole link
    twitter: "lcasdev", // Handle without @ is enough
    github: "lucacasonato",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "luca-casonato-15946b156",
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
