import { Contact } from "../../server/schema/Contact";

export default {
  name: "React Alicante",
  about: "The international React.js conference in Spain",
  image: {
    url: "sponsors/react-alicante.svg",
  },
  social: {
    homepage: "http://reactalicante.es/",
    twitter: "reactalicante",
  },
  location: {
    country: {
      name: "Spain",
      code: "ES",
    },
    city: "Alicante",
  },
} as Contact;
