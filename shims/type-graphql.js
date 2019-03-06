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
    const metaField = "_fields";
    // It should be possible to write to the meta field but
    // not to enumerate it since it should be hidden.
    Object.defineProperty(instance.__proto__, metaField, {
      enumerable: false,
      writable: true,
    });

    // Create the meta field if it doesn't exist yet.
    const fields = instance.__proto__[metaField] || {};
    let type = typeFn();
    let values;

    // Handle enums.
    if (typeof type === "object") {
      values = type;
      type = "enum";
    }

    instance.__proto__[metaField] = {
      ...fields,
      [field]: { type, default: "", values },
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
