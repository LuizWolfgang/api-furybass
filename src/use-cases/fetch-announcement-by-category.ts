import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";

interface FetchAllVehiclesUseCaseRequest{
  page: number;
  category: string;
}

interface FetchAllVehiclesUseCaseResponse {
  announcement: IAnnouncement[];
}

export class FetchAllVehiclesUseCase {
  constructor(private announcementRepository: announcementRepository) {}

  async execute({
    page,
    category
  }: FetchAllVehiclesUseCaseRequest): Promise<FetchAllVehiclesUseCaseResponse> {
    const announcement = await this.announcementRepository.findManyAnnouncement(
      page,
      category
    );

    return {
      announcement,
    };
  }
}
