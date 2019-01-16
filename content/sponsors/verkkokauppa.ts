import { Contact } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Verkkokauppa",
  about: "Most likely always cheaper",
  image: {
    url: "sponsors/verkkokauppa.svg",
  },
  social: {
    homepage: "https://www.verkkokauppa.com/",
    facebook: "verkkokauppacom",
    instagram: "verkkokauppacom",
    twitter: "Verkkokauppacom",
    youtube: "VerkkokauppaCom",
    linkedin: "company/verkkokauppa.com",
    vk: "verkkokauppa_com",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
};

export default sponsor;
