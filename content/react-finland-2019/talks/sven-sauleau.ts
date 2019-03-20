import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/sven-sauleau";

const talk: Session = {
  people: [speaker],
  title: "WebAssembly becoming the biggest platform",
  description: `
    JavaScript has the monopoly on the web for quite some time now. What if, for performance reasons or preference, you want to use another language on the web or mixing them?

    WebAssembly is the right tool for the job! I want to demonstrate, in practice, how you could write some parts of your React application in Rust and using our daily tools.
    Rust's ecosystem offers many great tools to work with WebAssembly on the web; including DOM manipulation, JavaScript bindings etc.

    Lastly, that isn't the only place where Rust is cool, I will deploy my Rust code on Cloudflare's serverless platform.
  `,
  type: SessionType.TALK,
  keywords: [
    "live-coding",
    "WebAssembly",
    "Rust",
    "Serverless"
  ],
};

export default talk;
