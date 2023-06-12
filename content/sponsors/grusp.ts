import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Grusp",
  about: "Tech events in IT-aly",
  image: {
    url: "sponsors/grusp.svg",
  },
  social: {
    homepage: "https://www.grusp.org/en/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Italy",
      code: "IT",
    },
    city: "Verona",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
