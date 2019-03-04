import { Session, SessionType } from "../../../server/schema/Session";
import speaker from "../../people/manuel-matuzovic";

const talk: Session = {
  people: [speaker],
  title: "12 Tips For More Accessible React Apps",
  description: `If you want to improve the accessibility of your React apps but you don't know how or where to start, this talk is just what you need. Manuel shares 12 tips that will help you build web sites and applications that can be used by anyone. Each tip fits on one slide and you'll be able to put them into practice right away without having to learn anything fundamentally new. The tips include testing, HTML, JS techniques, and general best practices.`,
  type: SessionType.TALK,
  keywords: [],
};

export default talk;
