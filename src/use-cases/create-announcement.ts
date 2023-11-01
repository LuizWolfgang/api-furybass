import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";
import { CategoryNotInformed } from "./errors/category-not-informed.error";
import { ResourceNotExistErro } from "./errors/resource-not-exists-error";

interface CreateAnnouncementUseCaseRequest {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  km?: string;
  brand?: string;
  year?: string;
  mediaUrls: {
    url: string;
    fileType: string;
  }[];
}

interface CreateAnnouncementUseCaseResponse {
  announcement: IAnnouncement;
}

export class CreateAnnouncementUseCase {
  constructor(private AnnouncementRepository: announcementRepository) {}
  async execute({
    title,
    description,
    number,
    price,
    category,
    type,
    country,
    city,
    brand,
    km,
    year,
    mediaUrls,
    userId,
  }: CreateAnnouncementUseCaseRequest): Promise<CreateAnnouncementUseCaseResponse> {
    if (
      category.includes("veiculo") ||
      category.includes("produto") ||
      category.includes("servico")
    ) {
      if (category === "veiculo") {
        const announcementAnnouncement = {
          userId,
          title,
          description,
          number,
          price,
          category,
          type,
          country,
          city,
          km,
          year,
          mediaUrls,
        };

        const announcement = await this.AnnouncementRepository.create(
          announcementAnnouncement
        );

        return {
          announcement,
        };
      }

      if (category === "produto") {
        const announcementProduct = {
          userId,
          title,
          description,
          number,
          price,
          category,
          type,
          country,
          city,
          brand,
          mediaUrls,
        };

        const announcement = await this.AnnouncementRepository.create(
          announcementProduct
        );

        return {
          announcement,
        };
      }

      if (category === "servico") {
        const announcementProduct = {
          userId,
          title,
          description,
          number,
          price,
          category,
          type,
          country,
          city,
          mediaUrls,
        };

        const announcement = await this.AnnouncementRepository.create(
          announcementProduct
        );

        console.log('USE CASE', announcement);

        return {
          announcement,
        };
      }
    } else {
      throw new ResourceNotExistErro();
    }

    throw new CategoryNotInformed()
  }
}
