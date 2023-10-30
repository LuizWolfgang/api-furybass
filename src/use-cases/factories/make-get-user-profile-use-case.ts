import { MongoUsersRepository } from "../../repositories/mongo/mongo-users-repository"
import { getUserUseCase } from "../get-user-profile"


export function makeGetUserProfileUseCase() {
  const usersRepository = new MongoUsersRepository()
  const useCase = new getUserUseCase(usersRepository)

  return useCase
}
