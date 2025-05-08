import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Helsinki Business College",
  about: "Helsinki Business College is one of the workshop hosts of the event.",
  social: {
    homepage: "https://www.bc.fi/",
    googleMaps: "https://maps.app.goo.gl/s4oVDndnj8bFyx6E8",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Rautatieläisenkatu 5",
};

export default location;
