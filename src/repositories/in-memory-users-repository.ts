import { User } from "../models/User";

interface User {
  name: string;
  email: string;
  password_hash: string;
}

export class InMemoryUsersRepository {
  public users: User[] = []

  async create(data: User){
    this.users.push(data);

  }
}
