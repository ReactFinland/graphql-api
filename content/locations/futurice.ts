import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Futurice",
  about: "Futurice is one of the workshop hosts of the event.",
  social: {
    homepage: "https://www.futurice.com/",
    googleMaps: "https://goo.gl/maps/8x9gTKycudhuVvCr5",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Kansakoulukatu 3",
};

export default location;
