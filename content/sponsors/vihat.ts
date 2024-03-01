import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Vihat Technologies",
  about: "Quality is the queen of product success",
  image: {
    url: "sponsors/vihat.png",
  },
  social: {
    homepage: "https://vihattechnologies.com/",
  },
  location: {
    country: {
      name: "India",
      code: "IN",
    },
    city: "",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
