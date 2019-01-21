import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "",
  about: "",
  image: {
    url: "people/TODO.jpg", // TODO: Place image at root images/ and update name
  },
  social: {
    homepage: "",
    twitter: "",
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "", // TODO: Country name
      code: "", // TODO: Two-letter country code
    },
    city: "", // TODO: City name
  },
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
