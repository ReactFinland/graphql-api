import { Field, ID, ObjectType } from "type-graphql";
import { Image } from "./Image";

@ObjectType()
export class Colors {
  @Field(_ => String)
  public primary!: string;

  @Field(_ => String)
  public secondary!: string;

  @Field(_ => String)
  public text!: string;

  @Field(_ => String)
  public background!: string;
}

@ObjectType()
export class Font {
  @Field(_ => String)
  public family!: string;

  @Field(_ => String)
  public weight!: string;

  @Field(_ => String)
  public style!: string;

  @Field(_ => String)
  public fileName!: string;

  @Field(_ => [String])
  public formats!: string[];
}

@ObjectType()
export class Fonts {
  @Field(_ => String)
  public primary!: string;

  @Field(_ => String)
  public secondary!: string;

  @Field(_ => [Font])
  public variants!: Font[];
}

@ObjectType()
export class WithWithoutText {
  @Field(_ => Image)
  public withoutText!: Image;

  @Field(_ => Image)
  public withText!: Image;
}

@ObjectType()
export class Logos {
  @Field(_ => WithWithoutText)
  public black!: WithWithoutText;

  @Field(_ => WithWithoutText)
  public colored!: WithWithoutText;

  @Field(_ => WithWithoutText)
  public white!: WithWithoutText;
}

// TODO: Add fonts here (name + path)
@ObjectType()
export class Theme {
  @Field(_ => ID)
  public id!: string;

  @Field(_ => Fonts)
  public fonts!: Fonts;

  @Field(_ => Image)
  public texture!: Image;

  @Field(_ => Colors)
  public colors!: Colors;

  @Field(_ => Logos)
  public logos!: Logos;
}
