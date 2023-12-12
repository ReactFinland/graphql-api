import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Evitec",
  about: "Inspiring innovations in finance",
  image: {
    url: "sponsors/evitec.svg",
  },
  social: {
    homepage: "https://evitec.com/",
    facebook: "",
    instagram: "",
    linkedin: "",
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
