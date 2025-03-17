import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "AYY beach sauna",
  about: "The conference afterparty will be held at AYY beach sauna.",
  social: {
    homepage: "https://www.ayy.fi/fi/rantasauna",
    googleMaps: "https://maps.app.goo.gl/4BmxxDPUeTbk9cFX9",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Espoo",
  address: "Jämeräntaival 5",
};

export default location;
