import { ContactType } from "../../server/schema";

export default {
  name: "Aleksi Pousar",
  about:
    "Aleksi Pousar works on the app and is the treasurer of the association.",
  image: "people/aleksi.jpg",
  social: {
    homepage: "https://aleksipousar.fi",
    twitter: "AleksiPousar",
    github: "stoneman1",
    linkedin: "aleksipousar",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
  },
  keywords: [],
  type: [ContactType.ORGANIZER],
};
