import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Supermetrics",
  about: "We get data",
  image: {
    url: "sponsors/supermetrics.svg",
  },
  social: {
    homepage: "https://supermetrics.com/",
    facebook: "Supermetrics",
    linkedin: "company/supermetrics",
    twitter: "supermetrics",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
