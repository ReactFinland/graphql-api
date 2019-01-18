import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Nitor",
  about: "Digital engineering",
  image: {
    url: "sponsors/nitor.png",
  },
  social: {
    homepage: "https://www.nitor.com/en",
    facebook: "NitorCreations",
    github: "NitorCreations",
    linkedin: "company/nitor-creations-ltd",
    instagram: "nitorcreations",
    twitter: "nitorcreations",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
};

export default sponsor;
