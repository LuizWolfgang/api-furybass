import { User } from "../../models/User";
import { Iuser, UsersRepository } from "../users-repository";

export class MongoUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    const user = await User.findOne({ email })
    return user
  }

  async create(data: Iuser) {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password
    })

    return user;
  }
}
