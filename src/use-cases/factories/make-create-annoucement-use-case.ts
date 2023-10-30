import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { AuthenticateUseCase } from "../authenticate"

export function makeCreateAnnoucementUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new AuthenticateUseCase(announcementRepository)

  return useCase
}

