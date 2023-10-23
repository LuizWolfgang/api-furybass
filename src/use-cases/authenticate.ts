import { compare } from "bcryptjs";
import { Iuser, usersRepository } from "../repositories/users-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: Iuser;
}

export class AuthenticateUseCase {
  constructor(private usersRepository: usersRepository) {}
  async execute({email,password}: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse>{
      const user = await this.usersRepository.findByEmail(email)

      if(!user){
          throw new InvalidCredentialsError()
      }

      const doesPasswordMatches = await compare(password, user.password)

      if(!doesPasswordMatches){
          throw new InvalidCredentialsError()
      }

      return {
          user,
      }
  }
}
