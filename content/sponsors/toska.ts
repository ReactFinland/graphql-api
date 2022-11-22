import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Toska Osuuskunta",
  about: "Toska is an event co-operative based in Finland",
  aboutShort: "Toska is an event co-operative based in Finland",
  // TODO
  image: {
    url: "react-finland/logo/v2/logo-colored-with-text.svg",
  },
  // TODO
  social: {
    homepage: "https://www.react-finland.fi/",
    github: "ReactFinland",
    medium: "ReactFinland",
    twitter: "ReactFinland",
    youtube: "ReactFinland",
    linkedin: "react-finland",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.ORGANIZER],
};

export default sponsor;
