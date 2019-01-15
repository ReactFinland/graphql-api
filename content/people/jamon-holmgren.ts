import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

export default {
  name: "Jamon Holmgren",
  about:
    "Founder & CTO @infinitered (http://infinite.red). Software engineer (JS, React/React Native, Node, Ruby, Elixir), Lutheran, husband, dad to 4.",
  image: {
    url: "people/jamon.jpg",
  },
  social: {
    homepage: "https://jamonholmgren.com/",
    twitter: "jamonholmgren",
    github: "jamonholmgren",
    facebook: "",
    medium: "jamonholmgren",
    instagram: "",
    linkedin: "jamonholmgren",
    youtube: "",
  },
  location: {
    country: {
      name: "United States",
      code: "US",
    },
    city: "Vancouver",
  },
  keywords: [keywords.REACT, keywords.REACT_NATIVE],
  type: [ContactType.SPEAKER],
} as Contact;
