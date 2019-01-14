import { ContactType } from "../../server/schema";

export default {
  name: "Harri Määttä",
  about:
    "Mobile Developer. Also DevOps Specialist. Otherwise nice guy. Lives in Helsinki, so can help with local issues (=I know bars!)",
  image: "people/harri.jpg",
  social: {
    homepage: "",
    twitter: "HarriMaatta",
    github: "HarriMaatta",
    linkedin: "harrimaatta",
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
