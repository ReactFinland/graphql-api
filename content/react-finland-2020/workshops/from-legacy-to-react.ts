import { Session, SessionType } from "../../../server/schema/Session";
import { paasitorni } from "../../locations";
import { kenigboloMeyaStephen } from "../../people";

const workshop: Session = {
  type: SessionType.WORKSHOP,
  people: [kenigboloMeyaStephen],
  title: "From Legacy to React",
  description: `Changing applications from one technology to another can turn out to be rather very challenging depending on the type of tech stack. If you’ve ever migrated a large project then you can only imagine how daunting it could be, most especially moving from DOM manipulation stack to a Virtual DOM stack.

Recently after becoming Front End Engineering Team lead at BCaster I introduced an incremental migration shift from JQuery to VueJs and React. It sure did seem to be straightforward at first especially with proper test coverage, however 20% -25% into this migration we encountered a certain issues which meant re-evaluation of several architectural decisions that had been made in this regard.

The goal of this workshop is to give a hands on step by step guide and approach for incrementally migrating legacy JS or JQuery application into a React or Vue JS app without needing to use the CLI initially. The workshop requires participants to know basic javascript and DOM manipulation. It is suitable for both beginners and intermediates alike.`,
  keywords: [],
  location: paasitorni,
};

export default workshop;
