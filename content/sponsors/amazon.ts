import { Contact } from "../../server/schema/Contact";

export default {
  name: "Amazon Web Services",
  about:
    "Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. ",
  image: {
    url: "sponsors/amazon.png",
  },
  social: {
    homepage: "https://aws.amazon.com/",
    twitter: "AWSCloud",
  },
  location: {
    country: {
      name: "USA",
      code: "US",
    },
    city: "Seattle",
  },
} as Contact;
