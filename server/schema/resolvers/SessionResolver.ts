import { FieldResolver, Resolver, Root } from "type-graphql";
import { Contact } from "../Contact";
import { Session } from "../Session";

@Resolver(_ => Session)
class SessionResolver {
  @FieldResolver(_ => [Contact], { deprecationReason: "Use `people` instead" })
  public speakers(@Root() session: Session) {
    return session.people || [];
  }
}

export default SessionResolver;
