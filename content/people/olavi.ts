import { Contact, ContactType } from "../../server/schema/Contact";

const person: Contact = {
  name: "Olavi Haapala",
  about: "",
  image: {
    url: "people/olavi.jpg",
  },
  social: {
    homepage: "https://olavihaapala.fi",
    twitter: "0lpeh",
    github: "olpeh",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "olavi-haapala-b7b752162",
    youtube: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
