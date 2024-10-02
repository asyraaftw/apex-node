// import { Resolver, Query, Mutation, Arg } from 'type-graphql';
// import { User } from '../entities/User';
// import { AppDataSource } from '../data-source'; // Adjust the path according to your setup
// @Resolver(User)
// export class UserResolver {
//   private userRepository = AppDataSource.getRepository(User);
//   @Query(() => [User])
//   async getUsers(): Promise<User[]> {
//     return await this.userRepository.find();
//   }
//   @Mutation(() => User)
//   async addUser(
//     @Arg('name') name: string,
//     @Arg('email') email: string
//   ): Promise<User> {
//     const user = this.userRepository.create({ name, email });
//     return await this.userRepository.save(user);
//   }
// }
