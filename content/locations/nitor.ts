import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Nitor",
  about: "Nitor is one of the workshop hosts of the event.",
  social: {
    homepage: "https://nitor.com/",
    googleMaps: "https://goo.gl/maps/c1s3PWr52qKhRCGJ7",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Aleksanterinkatu 46 A",
};

export default location;
