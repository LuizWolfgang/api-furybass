import { hash } from "bcryptjs";
import { User } from "../models/User";

/*
 * SOLID - D Dependency inversion - ao invez da classe instanciar as dependencias que ela precisa
 * nos vamos receber por parâmetro
*/

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: any){}
  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await User.findOne({ email })

    console.log('aaaaaa', userWithSameEmail)
    if (userWithSameEmail) {
      console.log('cai no if')
      throw new Error("E-mail already exists.");
      //return reply.status(409).send -> não fazer isso, exclusivo da parte HTTP
    }

    // const mongoUsersRepository = new MongoUsersRepository();

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
