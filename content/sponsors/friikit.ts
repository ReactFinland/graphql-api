import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Ohjelmistofriikit",
  about:
    "Ohjelmistofriikit is Finland’s most rapidly growing network of software freelancers",
  image: {
    url: "sponsors/friikit.svg",
  },
  social: {
    homepage: "https://ohjelmistofriikit.fi/",
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
