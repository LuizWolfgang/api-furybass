import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { CreateAnnouncementUseCase } from "../create-announcement"

export function makeCreateAnnoucementUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new CreateAnnouncementUseCase(announcementRepository)

  return useCase
}

