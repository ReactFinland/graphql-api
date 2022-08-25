import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Garden of Babylon",
  about: "The afterparty takes place at Garden of Babylon.",
  social: {
    homepage: "https://babylonhki.fi/garden",
    googleMaps: "https://goo.gl/maps/DyUcawJzQNrkeEQo8",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Erottajankatu 2",
};

export default location;
