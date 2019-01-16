import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Monica Lent",
  about:
    "Frontend Lead @SumUp. Balcony-gardener, and taco fanatic from Tucson, Arizona. I like cycling, craft beer, picnics, and knitwear. IPAs ⟩ IDEs.",
  image: {
    url: "people/monica.jpg",
  },
  social: {
    homepage: "https://monicalent.com/",
    twitter: "monicalent",
    github: "mlent",
    linkedin: "monica-lent-542122145",
  },
  location: {
    country: {
      name: "Germany",
      code: "DE",
    },
    city: "Berlin",
  },
  keywords: [keywords.REACT, keywords.STYLING, keywords.TOOLING],
  type: [ContactType.SPEAKER],
};

export default person;
