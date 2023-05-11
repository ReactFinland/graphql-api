import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Rooftop Miami",
  about: "Rooftop Miami is the afterparty location of the event.",
  social: {
    homepage: "https://www.rooftopmiami.fi/",
    googleMaps: "https://goo.gl/maps/vMZE61FRDRXHHM6t9",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Aleksanterinkatu 52 Stockmann, 8.-10. floor",
};

export default location;
