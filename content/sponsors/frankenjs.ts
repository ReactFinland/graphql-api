import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "FrankenJS",
  about: "Franconia's Finest JavaScript User Group",
  image: {
    url: "sponsors/frankenjs.svg",
  },
  social: {
    homepage: "https://frankenjs.org/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Nürnberg",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
