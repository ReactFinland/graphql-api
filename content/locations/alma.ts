import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Alma Media",
  about: "Alma is one of the workshop hosts of the event.",
  social: {
    homepage: "https://www.almamedia.fi/",
    googleMaps: "https://maps.app.goo.gl/8zfW7i9Agq8QsXU39",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Alvar Aallon katu 3C",
};

export default location;
