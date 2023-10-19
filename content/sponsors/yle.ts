import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Yle",
  about: "Finnish broadcasting corporation",
  image: {
    url: "sponsors/yledev.png",
  },
  social: {
    homepage: "https://yle.fi/",
    facebook: "",
    instagram: "",
    twitter: "Yleisradio",
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
