import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Columbia Road",
  about: "Columbia Road office at Etelä-Esplanadi.",
  social: {
    homepage: "https://www.columbiaroad.com/",
    googleMaps: "https://goo.gl/maps/KwDcRbY5dDD5GgoDA",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Eteläesplanadi 8A",
};

export default location;
