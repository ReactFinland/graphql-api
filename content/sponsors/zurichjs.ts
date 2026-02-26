import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "ZurichJS",
  about: "ZurichJS Conf 2026",
  image: {
    url: "sponsors/zurichjs-square.png",
  },
  social: {
    homepage:
      "https://conf.zurichjs.com/?utm_source=future-frontend&utm_medium=partner&utm_campaign=zurichjs-conf-2026",
    facebook: "",
    instagram: "",
    twitter: "",
  },
  location: {
    country: {
      name: "Switzerland",
      code: "CH",
    },
    city: "Zurich",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
