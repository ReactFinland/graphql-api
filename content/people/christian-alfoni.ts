import { ContactType } from "../../server/schema";
import { Contact } from "../../server/schema/Contact";
import keywords from "../keywords";

const person: Contact = {
  name: "Christian Alfoni",
  about:
    "Christian has been crunching JavaScript for about 8 years. In the recent years open source and writing articles has become a passion. Throwing bad and not so bad ideas out there to see what is valuable to people. Author of Cerebral, created Webpackbin and JSBlog... amongst other things.",
  image: {
    url: "people/christian.jpg",
  },
  social: {
    homepage: "http://www.christianalfoni.com/",
    twitter: "christianalfoni",
    github: "christianalfoni",
  },
  location: {
    country: {
      name: "Norway",
      code: "NO",
    },
    city: "Trondheim",
  },
  keywords: [keywords.CEREBRAL, keywords.REACT, keywords.STATE_MANAGEMENT],
  type: [ContactType.SPEAKER],
};

export default person;
