import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Loihde Factor",
  about: "We shape the digital world around us",
  social: {
    homepage: "https://loihdefactor.com/",
    googleMaps: "https://goo.gl/maps/fpcub3LPRLsrrtwW6",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Mikonkatu 4",
};

export default location;
