import { Session, SessionType } from "../../../server/schema/Session";
import { paasitorni } from "../../locations";
import { naderDabit, juhaLinnanen } from "../../people";

const workshop: Session = {
  type: SessionType.WORKSHOP,
  people: [naderDabit, juhaLinnanen],
  title: "React Native",
  description: ``,
  keywords: [],
  location: paasitorni,
};

export default workshop;
