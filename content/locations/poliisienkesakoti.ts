import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Poliisien kesäkoti",
  about: "The conference afterparty will be held at Poliisien kesäkoti.",
  social: {
    homepage: "https://poliisienkesakoti.fi/",
    googleMaps: "https://maps.app.goo.gl/nRLM6cApRiBnBXVV7",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Länsiulapanpolku 27",
};

export default location;
