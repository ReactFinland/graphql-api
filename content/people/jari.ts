import { Contact, ContactType } from "../../server/schema/Contact";
// import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Jari Porras",
  about:
    "Jari Porras D.Sc (Tech) is a Professor of Software Engineering (especially Distributed Systems) at the Lappeenranta-Lahti University of Technology LUT. Prof. Porras received the DSc. (Tech.) degree from the Lappeenranta University of Technology, Finland in 1998 about modeling and simulation of communication networks in a distributed computing environment. He's a visiting professor at Aalto University, Finland, and at the University of Huddersfield, UK. He has supervised and examined 500+ Master’s Thesis works and 27 Dissertations, as well as acted as an external evaluator for 28 doctoral thesis works since the start of his professorship in 2000. He has conducted research on parallel and distributed computing, wireless and mobile systems and services, as well as sustainable ICT. In the last years, he has focused his research on human and sustainability aspects of software engineering. He is actively working in international networks and organizations. He was chosen as the IT influencer of the year 2023 in Finland by Tivi magazine.",
  image: {
    url: "people/jari.jpeg",
  },
  social: {
    homepage: "https://research.lut.fi/converis/portal/detail/Person/188923",
    mastodon: "", // This has to be a whole link
    twitter: "JariPorras", // Handle without @ is enough
    github: "",
    facebook: "",
    medium: "",
    instagram: "",
    linkedin: "jari-porras-18837",
    youtube: "",
    devto: "",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Lappeenranta",
  },
  keywords: [],
  type: [ContactType.SPEAKER],
};

export default person;
