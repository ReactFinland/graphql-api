import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Pörssitalo",
  about: "Pörssitalo is the main venue of the event.",
  social: {
    homepage: "http://porssitalo.fi/",
    googleMaps: "https://goo.gl/maps/ZfbVBs8tepm2UbACA",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Fabianinkatu 14",
};

export default location;
