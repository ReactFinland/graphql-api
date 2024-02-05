import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "DevOps.js",
  about: "Learn to build, deploy, and monitor JavaScript apps",
  image: {
    url: "sponsors/dojs.svg",
  },
  social: {
    homepage: "https://devopsjsconf.com/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "Internet",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
