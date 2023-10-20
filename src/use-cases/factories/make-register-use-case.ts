import { MongoUsersRepository } from "../../repositories/mongo/mongo-users-repository"
import { RegisterUseCase } from "../register"

export function makeRegisterUseCase() {
  const usersRepository = new MongoUsersRepository()
  const registerUseCase = new RegisterUseCase(usersRepository)

  return registerUseCase
}
