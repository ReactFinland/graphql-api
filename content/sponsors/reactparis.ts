import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "React Paris",
  about: "React conference in the city of light",
  image: {
    url: "sponsors/reactparis.png",
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
