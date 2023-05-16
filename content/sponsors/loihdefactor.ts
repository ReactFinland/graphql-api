import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Loihde Factor",
  about: "We shape the digital world around us",
  image: {
    url: "sponsors/loihdefactor.svg",
  },
  social: {
    homepage: "https://loihdefactor.com/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
