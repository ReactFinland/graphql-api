import { Session, SessionType } from "../../../server/schema/Session";
import { paasitorni } from "../../locations";
import { erikRasmussen } from "../../people";

const workshop: Session = {
  type: SessionType.WORKSHOP,
  people: [erikRasmussen],
  title: "Modern Forms with React",
  description: `This workshop will take the students from building a two-field form using just useState() hooks through to using a form library to manage complex form data such as field arrays, with support for field-level and record-level client-side validation as well as submit validation, third party input components and more. It will also touch on more complex concepts like minimizing field re-renders with a useField() hook, as well as subscribing to certain parts of form state with a useFormState() hook.

  Beyond only forms, the app we build will talk to a GraphQL backend to load data into the form and mutate it upon form submission using Apollo Client, using hooks, of course!
  
  Students will walk away confident in their knowledge of how to build forms of any complexity with great UX.
  
  The workshop requires an intermediary level in React.js (>= 3month experience). More details coming soon. Ticket includes breakfast and lunch. It does not include the conference ticket.`,
  keywords: [],
  location: paasitorni,
};

export default workshop;
