import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Toddle",
  about: "Why use a text editor to build web apps?",
  image: {
    url: "sponsors/toddle2.svg",
  },
  social: {
    homepage: "https://toddle.dev/",
    linkedin: "company/toddledev",
    twitter: "toddledev",
    youtube: "@toddledev",
  },
  location: {
    country: {
      name: "Denmark",
      code: "DK",
    },
    city: "Copenhagen",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
