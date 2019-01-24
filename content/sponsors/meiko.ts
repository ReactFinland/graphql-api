import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Meiko",
  about: "Digital tailor for visionaries.",
  image: {
    url: "sponsors/meiko.svg",
  },
  social: {
    homepage: "https://meiko.fi/",
    facebook: "https://www.facebook.com/meiko.fi/",
    instagram: "https://www.instagram.com/meikofi/?hl=fi",
    twitter: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Jyväskylä",
  },
};

export default sponsor;
