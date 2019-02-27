const dummyFn = () => void 0;
const dummyDecorator = () => dummyFn;

TypeGraphQL = {
  Arg: dummyDecorator,
  Args: dummyDecorator,
  ArgsType: dummyDecorator,
  Authorized: dummyDecorator,
  Ctx: dummyDecorator,
  registerEnumType: dummyFn,
  Field: dummyDecorator,
  FieldResolver: dummyDecorator,
  Info: dummyDecorator,
  InputType: dummyDecorator,
  InterfaceType: dummyDecorator,
  Mutation: dummyDecorator,
  ObjectType: dummyDecorator,
  PubSub: dummyDecorator,
  Query: dummyDecorator,
  Resolver: dummyDecorator,
  Root: dummyDecorator,
  Subscription: dummyDecorator,
  createUnionType: dummyFn,
  UseMiddleware: dummyDecorator,
};
