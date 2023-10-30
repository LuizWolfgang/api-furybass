import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { EditAnnouncementUseCase } from "../edit-announcement"

export function makeEditAnnoucementUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new EditAnnouncementUseCase(announcementRepository)

  return useCase
}

