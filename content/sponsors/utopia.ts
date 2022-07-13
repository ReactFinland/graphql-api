import { Contact, ContactType } from "../../server/schema/Contact";

const sponsor: Contact = {
  name: "Utopia Music",
  about: "Fair pay for every play",
  image: {
    url: "sponsors/utopia.svg",
  },
  social: {
    homepage: "https://utopiamusic.com/",
    facebook: "likeutopiamusic",
    instagram: "likeutopiamusic",
    twitter: "likeutopiamusic",
    linkedin: "like-utopia-music",
    youtube: "UCoH3gEveto-ta-qqBmfCnUg",
  },
  location: {
    country: {
      name: "Switzerland",
      code: "CH",
    },
    city: "Zug",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
