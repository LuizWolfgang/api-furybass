export interface Iuser {
  id?: string;
  name: string;
  email: string;
  password: string;
}

export interface UsersRepository {
  findById(id: string): Promise<Iuser | null>;
  findByEmail(email: string): Promise<Iuser | null>;
  create(data: Iuser): Promise<Iuser>;
}
