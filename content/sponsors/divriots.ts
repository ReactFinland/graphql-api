import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Divriots",
  about: "Front-end is back!",
  image: {
    url: "sponsors/divriots.svg",
  },
  social: {
    homepage: "https://divriots.com/",
    github: "divriots",
    twitter: "divriots",
    linkedin: "company/divriots",
  },
  location: {
    country: {
      name: "France",
      code: "FR",
    },
    city: "Paris",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
