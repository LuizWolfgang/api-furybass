import { hash } from "bcryptjs";
import { UsersRepository } from "../repositories/users-repository";
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

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository){} //recebi meu repositorio
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
      //return reply.status(409).send -> não fazer isso, exclusivo da parte HTTP
    }

    await this.usersRepository.create({ //executei o metodo create do meu repo
      name,
      email,
      password:password_hash,
    });
  }
}
