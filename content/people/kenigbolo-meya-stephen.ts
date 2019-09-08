import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Kenigbolo Meya Stephen",
  about:
    "Full Stack Software Engineer with a passion for clean code. Working languages are Ruby, JavaScript, Python. Frontend Engineering Team Lead at BCaster",
  image: {
    url: "people/kenigbolo.jpg",
  },
  social: {
    homepage: "https://www.kenigbolo.dev/",
    twitter: "expensivestevie",
    github: "kenigbolo",
    facebook: "kenigbolo.meyastephen",
    medium: "@kenigbolo",
    instagram: "",
    linkedin: "kenigbolo",
    youtube: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
