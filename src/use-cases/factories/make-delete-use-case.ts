import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { DeleteAnnouncementUseCase } from "../delete-announcement"

export function makeDeleteAnnoucementUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new DeleteAnnouncementUseCase(announcementRepository)

  return useCase
}

