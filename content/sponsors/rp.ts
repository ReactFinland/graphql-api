import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "React Paris",
  about: "2 days single track React Conference in Paris",
  image: {
    url: "sponsors/rp.png",
  },
  social: {
    homepage: "https://react.paris/",
    facebook: "",
    instagram: "",
    twitter: "",
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
