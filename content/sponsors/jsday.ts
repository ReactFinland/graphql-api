import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "jsday",
  about: "International JavaScript in Italy",
  image: {
    url: "sponsors/jsday.svg",
  },
  social: {
    homepage: "https://www.jsday.it/",
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
