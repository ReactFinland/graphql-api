import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Backscreen",
  about: "You made it. We keep your audience.",
  image: {
    url: "sponsors/backscreen-only.svg",
  },
  social: {
    homepage: "https://www.backscreen.com/",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Latvia",
      code: "LV",
    },
    city: "Riga",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
