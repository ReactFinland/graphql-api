import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Ohjelmistofriikit",
  about: "Finland’s fastest-growing freelancer network",
  image: {
    url: "sponsors/ohjelmistofriikit.svg",
  },
  social: {
    homepage: "https://ohjelmistofriikit.fi/",
    facebook: "",
    instagram: "",
    twitter: "",
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
