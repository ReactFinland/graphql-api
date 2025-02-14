import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "JSNation",
  about: "The main JS conference",
  image: {
    url: "sponsors/jsn.svg",
  },
  social: {
    homepage: "https://jsnation.com?utm_source=ff",
    facebook: "",
    twitter: "",
    youtube: "",
  },
  location: {
    country: {
      name: "Netherlands",
      code: "NL",
    },
    city: "Amsterdam",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
