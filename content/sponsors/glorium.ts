import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Glorium",
  about: "Your Product. Your Idea. Our Innovation and Engineering",
  image: {
    url: "sponsors/glorium.svg",
  },
  social: {
    homepage: "https://gloriumtech.com/",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "New Jersey",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
