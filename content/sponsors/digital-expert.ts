import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Digital Expert",
  about: "Your guide to digital technologies",
  image: {
    url: "sponsors/digital-expert.svg",
  },
  social: {
    homepage: "https://digital-expert.online/en/best-digital-events",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "",
      code: "",
    },
    city: "",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
