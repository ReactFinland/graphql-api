import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Yle",
  about: "Yle is one of the workshop venues of the event",
  social: {
    homepage: "https://www.yle.fi/",
    googleMaps: "https://maps.app.goo.gl/7DRiQPV5wUXHefZm7",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Radiokatu 3",
};

export default location;
