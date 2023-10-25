import { hash } from "bcryptjs";
import { Iuser, usersRepository } from "../repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists-error";

/*
 * SOLID - D Dependency inversion - ao invez da classe instanciar as dependencias que ela precisa
 * nos vamos receber por parâmetro
 * nosso caso de uso deve ser INDEPENDENTE - nenhuma menção ao banco que estou utlizando
 */

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: Iuser;
}

export class RegisterUseCase {
  constructor(private usersRepository: usersRepository) {} //recebi meu repositorio
  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
      //return reply.status(409).send -> não fazer isso, exclusivo da parte HTTP
    }

    const user = await this.usersRepository.create({
      //executei o metodo create do meu repo
      name,
      email,
      password: password_hash,
    });

    return {
      user,
    };
  }
}
