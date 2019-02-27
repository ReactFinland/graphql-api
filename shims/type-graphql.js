const dummyFn = () => void 0;
const dummyDecorator = () => dummyFn;

TypeGraphQL = {
  Arg: dummyDecorator,
  Args: dummyDecorator,
  ArgsType: dummyDecorator,
  Authorized: dummyDecorator,
  Ctx: dummyDecorator,
  registerEnumType: dummyFn,
  Field: typeFn => (instance, field) => {
    Object.defineProperty(instance.__proto__, "_fields", {
      enumerable: false,
      writable: true,
    });

    const fields = instance.__proto__._fields || {};
    instance.__proto__._fields = {
      ...fields,
      [field]: typeFn(),
    };
  },
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
