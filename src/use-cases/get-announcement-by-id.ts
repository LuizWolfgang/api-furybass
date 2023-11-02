import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";

interface GetAnnouncementUseCaseRequest {
 userId: string;
}

interface GetAnnouncementUseCaseResponse {
  announcement: IAnnouncement[];
}

export class GetAnnouncementUseCase {
  constructor(private announcementRepository: announcementRepository) {}

  async execute({ userId }: GetAnnouncementUseCaseRequest): Promise<GetAnnouncementUseCaseResponse> {
    const announcement = await this.announcementRepository.findById(userId);

    if (!announcement) {
      return {
        announcement: [],
      };
    }

    return {
      announcement: [announcement], // Wrap the announcement in an array
    };
  }
}
