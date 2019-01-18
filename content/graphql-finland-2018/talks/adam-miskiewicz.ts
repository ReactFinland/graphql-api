import { SessionType } from "../../../server/schema";
import { Session } from "../../../server/schema/Session";
import keywords from "../../keywords";
import speaker from "../../people/adam-miskiewicz";

const talk: Session = {
  people: [speaker],
  title: "Adopting GraphQL in Large Codebases",
  description: `With the vibrant and growing GraphQL ecosystem and community, it's simpler than ever to start using GraphQL in your project. However, adopting GraphQL incrementally (and carefully!) in huge codebases powering large distributed systems is not quite as straightforward. We'll dive into how Airbnb is tackling this challenge, what we've learned so far, and how we plan to continue evolving our GraphQL infrastructure in the future.`,
  type: SessionType.KEYNOTE,
  keywords: [keywords.GRAPHQL],
  urls: {
    web: "",
    slides: "",
    video: "https://www.youtube.com/watch?v=8KLwLzRlETc",
  },
};

export default talk;
