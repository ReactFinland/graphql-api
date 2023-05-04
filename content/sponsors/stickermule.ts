import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Stickermule",
  about: "Custom stickers that kick ass",
  image: {
    url: "sponsors/stickermule.svg",
  },
  social: {
    homepage: "https://mule.to/p44p",
    github: "stickermule",
    facebook: "stickermule",
    instagram: "stickermule",
    twitter: "stickermule",
    youtube: "stickermule",
    dribble: "stickermule",
  },
  location: {
    country: {
      name: "Italy",
      code: "IT",
    },
    city: "Bologna",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
