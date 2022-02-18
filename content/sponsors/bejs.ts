import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "React Brussels",
  about: "React at the heart of Europe",
  image: {
    url: "sponsors/bejs.svg",
  },
  social: {
    homepage: "https://www.react.brussels/",
    twitter: "BrusselsReact",
  },
  location: {
    country: {
      name: "Belgium",
      code: "BE",
    },
    city: "Brussels",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
