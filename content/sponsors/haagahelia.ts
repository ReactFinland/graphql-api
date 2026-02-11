import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Haaga-Helia",
  about: "The keys to skills",
  image: {
    url: "sponsors/haagahelia.png",
  },
  social: {
    homepage: "https://www.haaga-helia.fi/",
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
