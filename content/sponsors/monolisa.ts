import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "MonoLisa",
  about: "Font follows function",
  image: {
    url: "sponsors/monolisa.png",
  },
  social: {
    homepage: "https://www.monolisa.dev?utm_source=ff",
  },
  location: {
    country: {
      name: "Austria",
      code: "AT",
    },
    city: "Vienna",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
