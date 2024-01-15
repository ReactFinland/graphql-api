import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "JSConfBP",
  about: "The international event for coding inspiration",
  image: {
    url: "sponsors/jsconfbp.svg",
  },
  social: {
    homepage: "https://jsconfbp.com/",
    twitter: "jsconfbp",
  },
  location: {
    country: {
      name: "Hungary",
      code: "HU",
    },
    city: "Budapest",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
