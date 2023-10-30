import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { GetAnnouncementUseCase } from "../get-announcement-by-id"

export function makeGetAnnoucementByIdUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new GetAnnouncementUseCase(announcementRepository)

  return useCase
}

