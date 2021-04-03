import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class CatsResolver {
  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
