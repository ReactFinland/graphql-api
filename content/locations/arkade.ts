import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Arkade Bar",
  about: "The bar for gamers",
  social: {
    homepage: "https://www.arkade.fi/",
    googleMaps: "https://goo.gl/maps/xmTJPHsWgLNaKH526",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Kalevankatu 30",
};

export default location;
