import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Wunderdog",
  about: "Future-proof design and development",
  image: {
    url: "sponsors/wunderdog.svg",
  },
  social: {
    homepage: "https://www.wunderdog.io/",
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
