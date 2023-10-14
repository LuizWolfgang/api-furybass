import { User } from "../models/User";

interface User {
  name: string;
  email: string;
  password_hash: string;
}

export class MongoUsersRepository {
  async create(data: User){
    const user = await User.create({
      data
    })

    return user
  }
}
