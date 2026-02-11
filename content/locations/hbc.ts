import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Haaga-Helia University of Applied Sciences - Pasila campus",
  about: "Haaga-Helia (Helsinki) is one of the workshop hosts of the event.",
  social: {
    homepage: "https://www.haaga-helia.fi/",
    googleMaps: "https://maps.app.goo.gl/qJ5rRUpAhjY3tz8J8",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Ratapihantie 13",
};

export default location;
