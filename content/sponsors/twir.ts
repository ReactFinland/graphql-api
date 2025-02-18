import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "This Week in React",
  about: "The latest news directly in your inbox!",
  image: {
    url: "sponsors/twir.png",
  },
  social: {
    homepage: "https://thisweekinreact.com?utm_source=ff",
    twitter: "sebastienlorber",
  },
  location: {
    country: {
      name: "France",
      code: "FR",
    },
    city: "Paris",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
