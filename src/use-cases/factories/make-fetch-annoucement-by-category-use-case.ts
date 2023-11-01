import { MongoAnnouncementRepository } from "../../repositories/mongo/mongo-announcement-repository"
import { FetchAnnouncementByCategoryUseCase } from "../fetch-announcement-by-category"

export function makeFetchAnnoucementByCategoryUseCase() {
  const announcementRepository = new MongoAnnouncementRepository()
  const useCase = new FetchAnnouncementByCategoryUseCase(announcementRepository)

  return useCase
}

