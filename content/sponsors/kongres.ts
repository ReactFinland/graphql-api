import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Kongres Next.js",
  about: "All things frameworks, web",
  image: {
    url: "sponsors/kongrespl.svg",
  },
  social: {
    homepage: "https://kongresnextjs.pl/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Poland",
      code: "PL",
    },
    city: "Warsaw",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
