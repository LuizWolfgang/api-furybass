export interface Iuser {
  name: string;
  email: string;
  password: string;
}

export interface UsersRepository {
  findByEmail(email: string): Promise<Iuser | null>;
  create(data: Iuser): Promise<Iuser>
}
