import { User } from "../../models/User";
import { Iuser, usersRepository } from "../users-repository";

export class MongoUsersRepository implements usersRepository {
  async findById(id: string) {
    try {
      const user = await User.findById({ _id: id });

      if (!user) {
        return null;
      }

      return user;
    } catch (error) {
      throw new Error("An error occurred while finding a user by ID.");
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await User.findOne({ email }).select("password_hash");

      if (!user) {
        return null;
      }

      console.log('user findByEmail', user);

      return user;
    } catch (error) {
      throw new Error("An error occurred while finding a user by email.");
    }
  }

  async create(data: Iuser) {
    try {
      const user = await User.create({
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
      });

      return user;
    } catch (error) {
      throw new Error("An error occurred while creating a user.");
    }
  }
}
