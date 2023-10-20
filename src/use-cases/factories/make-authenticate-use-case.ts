import { MongoUsersRepository } from "../../repositories/mongo/mongo-users-repository"
import { AuthenticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
  const usersRepository = new MongoUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(usersRepository)

  return authenticateUseCase
}
