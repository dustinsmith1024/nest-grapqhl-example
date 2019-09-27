import { Resolver, Query } from '@nestjs/graphql';
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Thing {
  @Field()
  title: string;
}

@Resolver('Thing')
export class ThingResolver {
  constructor() { }

  @Query(returns => Thing)
  async thingnoerror() {
    const t = new Thing();
    t.title = 'hiiii';
    return t;
  }

  @Query(returns => Thing)
  async thingerror() {
    return new Error('problem factory!')
  }

}
