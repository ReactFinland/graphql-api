import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Varya Stepanova",
  about:
    "Varya Stepanova is a design systems expert from Helsinki. She has a long history working in a field of component-focused UI design and development, creating helpful tooling for the subject and spreading the practices across large organizations. Nowadays her focus is bringing design systems to the next level of success which includes cooperative work in the company development community and bridging the gap for designers, developers, and business specialists.",
  image: {
    url: "people/varya.jpg",
  },
  social: {
    homepage: "http://varya.me/",
    twitter: "varya_en",
    github: "varya",
    linkedin: "varyastepanova",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.REACT, Keyword.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
