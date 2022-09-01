import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Aalto University, TUAS Building, TU1",
  about: "Aalto University, TUAS.",
  social: {
    homepage: "https://aalto.fi",
    googleMaps: "https://goo.gl/maps/3fjJtdc9XVFQp9Ex5",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Espoo",
  address: "Maarintie 8",
};

export default location;
