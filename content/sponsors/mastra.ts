import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Mastra",
  about: "Ship more capable agents",
  image: {
    url: "sponsors/mastra.svg",
  },
  social: {
    homepage: "https://mastra.ai/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
