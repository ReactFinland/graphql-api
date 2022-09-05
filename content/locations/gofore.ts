import { Location } from "../../server/schema/Location";

// FIXME: These should be Contacts instead -> Location can become simpler again
const location: Location = {
  name: "Gofore",
  about: "Gofore offices at Kamppi.",
  social: {
    homepage: "https://gofore.fi",
    googleMaps: "https://goo.gl/maps/MsAqEY3RXJXFEBRg7",
  },
  country: {
    name: "Finland",
    code: "FI",
  },
  city: "Helsinki",
  address: "Urho Kekkosen katu 7B",
};

export default location;
