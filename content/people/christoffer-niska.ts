import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Christoffer Niska",
  about: `Christoffer Niska is a software engineer with over 15 years of experience. He built [Acolyte](https://acolyte.sh/), an open-source AI coding agent, to own every layer of his workflow: model choice, tools, memory, and execution. He specialises in developer tooling and TypeScript, and writes about building with AI at [crisu.me](https://crisu.me).`,
  image: {
    url: "people/crisu.jpg",
  },
  social: {
    homepage: "https://about.me/crisu83",
    twitter: "Crisu83",
    github: "crisu83",
    linkedin: "cniska",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  keywords: [Keyword.GRAPHQL],
  type: [ContactType.SPEAKER],
};

export default person;
