import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Tae'lur Alexis",
  about:
    "Software Engineer. #A11Y. Nomadic Soul. Late-Night Indie Scholar. Open Software Enthusiast. Decentralize the Web.",
  image: {
    url: "people/taelur.jpg",
  },
  social: {
    homepage: "",
    twitter: "TaelurAlexis",
    github: "cyberbarbie",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Seattle",
  },
  keywords: [Keyword.REACT], // TODO: check keywords for more
  type: [ContactType.SPEAKER],
};

export default person;
