import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Upcloud",
  about: "Fast, flexible, and reliable cloud",
  image: {
    url: "sponsors/upcloud.svg",
  },
  social: {
    homepage: "https://upcloud.com/",
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
