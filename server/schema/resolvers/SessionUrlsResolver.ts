import { Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { IContext } from "../Context";
import { SessionUrls } from "../Session";

@Resolver((_) => SessionUrls)
class SessionUrlsResolver {
  @FieldResolver((_) => String)
  public drawing(@Root() root, @Ctx() ctx: IContext) {
    if (!root.drawing) {
      return;
    }

    // FIXME: Figure out why ctx can be missing
    return `${ctx ? ctx.mediaUrl : "/media"}/${root.drawing}`;
  }
}

export default SessionUrlsResolver;
