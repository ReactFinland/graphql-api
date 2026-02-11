import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "APIOps Helsinki Conference",
  about: "Strategy · AI-Driven APIs · Community Co-Creation",
  image: {
    url: "sponsors/apidays.png",
  },
  social: {
    homepage: "https://helsinki.apiops.info/",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
