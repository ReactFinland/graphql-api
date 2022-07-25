import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Huuva",
  about: "Your favorite restaurants, all in one order",
  image: {
    url: "sponsors/huuva.svg",
  },
  social: {
    homepage: "https://www.huuva.io/software-developer-recruitment",
    linkedin: "huuva",
    instagram: "huuvaio",
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
