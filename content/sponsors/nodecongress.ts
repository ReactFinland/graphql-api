import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Node Congress",
  about: "The biggest event about JavaScript backends and devops",
  image: {
    url: "sponsors/nodecongress.png",
  },
  social: {
    homepage: "https://nodecongress.com/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
