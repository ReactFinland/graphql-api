import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Varya Stepanova",
  about:
    "Varya Stepanova is a developer enthusiast for modular web and pattern libraries. She loves automation, also in the development processes, strongly believes in open-source community and likes social media. Originally from Russia, she now lives in Helsinki with her family and two cats.",
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
  keywords: [keywords.REACT, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
