import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";

interface FetchAnnouncementByCategoryUseCaseRequest{
  userId: string;
  page: number;
  category: string;
}

interface FetchAnnouncementByCategoryUseCaseResponse {
  announcement: IAnnouncement[] | null;
}

export class FetchAnnouncementByCategoryUseCase {
  constructor(private announcementRepository: announcementRepository) {}

  async execute({
    userId,
    page,
    category
  }: FetchAnnouncementByCategoryUseCaseRequest): Promise<FetchAnnouncementByCategoryUseCaseResponse> {
    const announcement = await this.announcementRepository.findManyAnnouncement(
      userId,
      page,
      category
    );

    return {
      announcement,
    };
  }
}
