export interface Iuser {
  id?: string;
  name: string;
  email: string;
  password_hash: string;
}

export interface usersRepository {
  findById(id: string): Promise<Iuser | null>;
  findByEmail(email: string): Promise<Iuser | null>;
  create(data: Iuser): Promise<Iuser>;
}
