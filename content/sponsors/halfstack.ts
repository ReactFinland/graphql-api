import { Contact } from "../../server/schema/Contact";

export default {
  name: "HalfStack",
  about:
    "HalfStack is a one-day, single track, fun JS conf in a Shoreditch pub",
  image: {
    url: "sponsors/halfstack.svg",
  },
  social: {
    homepage: "http://halfstackconf.com/",
    facebook: "halfstackconf",
    instagram: "halfstackconf",
    twitter: "london_ajax",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
} as Contact;
