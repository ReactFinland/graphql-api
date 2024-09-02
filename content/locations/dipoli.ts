import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Dipoli",
  about: "Dipoli is the main venue of the event.",
  social: {
    homepage: "https://www.aalto.fi/en/locations/dipoli",
    googleMaps: "https://maps.app.goo.gl/NuqHLtEvHwbCr3kY7",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Espoo",
  address: "Otakaari 24",
};

export default location;
