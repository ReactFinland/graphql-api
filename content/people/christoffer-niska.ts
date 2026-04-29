import { Contact, ContactType } from "../../server/schema/Contact";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Christoffer Niska",
  about: `I am a technology professional with 15+ years of experience in software development. I focus on building software that is robust, understandable, and maintainable while keeping delivery pragmatic and product-driven.

I use AI-assisted development workflows as a natural part of day-to-day engineering, from implementation and refactoring to review and refinement. My background spans hands-on coding, architecture, and technical leadership across multiple product domains.

I prefer strongly typed languages and write most of my day-to-day code in TypeScript, Kotlin, and Rust. Over the years, I have also worked with a wide range of languages and paradigms, including Go, Haskell, and ReasonML.

Outside work, I enjoy sports, good coffee, and time with family.`,
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
