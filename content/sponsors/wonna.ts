import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Wonna",
  about: "Deliver great software",
  image: {
    url: "sponsors/wonna.png",
  },
  social: {
    homepage: "https://wonna.fi/",
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
