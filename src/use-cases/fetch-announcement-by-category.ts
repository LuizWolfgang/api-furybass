import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";

interface FetchAnnouncementByCategoryUseCaseRequest{
  page: number;
  category: string;
}

interface FetchAnnouncementByCategoryUseCaseResponse {
  announcement: IAnnouncement[];
}

export class FetchAnnouncementByCategoryUseCase {
  constructor(private announcementRepository: announcementRepository) {}

  async execute({
    page,
    category
  }: FetchAnnouncementByCategoryUseCaseRequest): Promise<FetchAnnouncementByCategoryUseCaseResponse> {
    const announcement = await this.announcementRepository.findManyAnnouncement(
      page,
      category
    );

    return {
      announcement,
    };
  }
}
