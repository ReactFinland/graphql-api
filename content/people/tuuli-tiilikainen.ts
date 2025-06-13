import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Tuuli Tiilikainen",
  about: "",
  image: {
    url: "people/tuuli.jpg",
  },
  social: {
    homepage: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
  },
  keywords: [],
  type: [ContactType.ORGANIZER],
};

export default person;
