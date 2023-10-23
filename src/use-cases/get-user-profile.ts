import { Iuser, usersRepository } from "../repositories/users-repository";
import { ResourceNotExistErro } from "./errors/resource-not-exists-error";

interface getUserUseCaseRequest {
 userId: string;
}

interface getUserUseCaseResponse {
  user: Iuser;
}

export class getUserUseCase {
  constructor(private usersRepository: usersRepository) {}
  async execute({ userId }: getUserUseCaseRequest): Promise<getUserUseCaseResponse>{
      const user = await this.usersRepository.findById(userId)

      if(!user){
          throw new ResourceNotExistErro()
      }

      return {
          user,
      }
  }
}
