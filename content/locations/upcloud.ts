import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "UpCloud",
  about: "Fast, flexible, and reliable cloud.",
  social: {
    homepage: "https://upcloud.com/",
    googleMaps: "https://maps.app.goo.gl/3BhJSd7QYZxPSHp68",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Aleksanterinkatu 15b, 7th floor",
};

export default location;
