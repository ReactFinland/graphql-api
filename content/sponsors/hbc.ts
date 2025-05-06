import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Helsinki Business College",
  about: "Welcome to study, future professionals",
  image: {
    url: "sponsors/hbc.svg",
  },
  social: {
    homepage: "https://www.bc.fi/",
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
