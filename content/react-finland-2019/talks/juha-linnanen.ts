import { SessionType } from "../../../server/schema";
import Keyword from "../../../server/schema/keywords";
import { Session } from "../../../server/schema/Session";
import speaker from "../../people/juha-linnanen";

const talk: Session = {
  people: [speaker],
  title: "CI/CD for React Native",
  description: `Both continuous integration and continuous delivery (CI/CD) are elements of software development best practices. Setting up CI/CD can be time consuming, even more so for a mobile project. Understanding the basics of how to apply CI/CD practices in React Native mobile application development to automate software release tasks will improve performance and will free up time more usefully spent elsewhere in the project.`,
  type: SessionType.TALK,
  keywords: [Keyword.REACT_NATIVE],
};

export default talk;
