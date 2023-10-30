import { User } from "../../models/User";
import { Iuser, usersRepository } from "../users-repository";

export class MongoUsersRepository implements usersRepository {
  async findById(id: string) {
    const user = await User.findById({ _id: id });
    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await User.findOne({ email }).select("password_hash");

    if (!user) {
      return null;
    }

    console.log('user findByEmail', user)

    return user;
  }

  async create(data: Iuser) {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
    });

    return user;
  }
}
