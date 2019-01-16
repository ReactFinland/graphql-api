import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Digia",
  about: "Smoother digital world",
  image: {
    url: "sponsors/digia.png",
  },
  social: {
    homepage: "https://digia.com/",
    twitter: "digiaonline",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
};

export default sponsor;
