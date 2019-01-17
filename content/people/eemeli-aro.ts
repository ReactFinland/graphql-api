import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Eemeli Aro",
  about:
    "Eemeli has been falling down the rabbit hole of JavaScript localization for about six years now, and keeps wondering at what the next level might be. For work he makes complicated systems seem simple, for fun he writes open-source libraries, and in his spare time he organises science fiction conventions.",
  image: {
    url: "people/eemeli.jpg",
  },
  social: {
    homepage: "",
    twitter: "eemeli_aro",
    github: "eemeli",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [keywords.TOOLING, keywords.REACT],
  type: [ContactType.SPEAKER],
};

export default person;
