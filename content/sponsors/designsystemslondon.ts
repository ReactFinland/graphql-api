import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Design Systems London",
  about: "Open-source conference for the design systems community",
  image: {
    url: "sponsors/designsystemslondon.png",
  },
  social: {
    homepage: "https://www.designsystemslondon.com/",
    twitter: "DSLconf",
  },
  location: {
    country: {
      name: "United Kingdom",
      code: "GB",
    },
    city: "London",
  },
};

export default sponsor;
