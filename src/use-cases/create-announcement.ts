import {
  Ivehicle,
  vehicleRepository,
} from "../repositories/announcement-repository";
import { ResourceNotExistErro } from "./errors/resource-not-exists-error";

interface CreateVehicleUseCaseRequest {
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

interface CreateVehicleUseCaseResponse {
  announcement: Ivehicle;
}

export class CreateVehicleUseCase {
  constructor(private vehicleRepository: vehicleRepository) {}
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
  }: CreateVehicleUseCaseRequest): Promise<CreateVehicleUseCaseResponse> {
    if (
      category.includes("veiculo") ||
      category.includes("produto") ||
      category.includes("servico")
    ) {
      if (category === "veiculo") {
        const announcementVehicle = {
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

        const announcement = await this.vehicleRepository.create(
          announcementVehicle
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

        const announcement = await this.vehicleRepository.create(
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

        const announcement = await this.vehicleRepository.create(
          announcementProduct
        );

        return {
          announcement,
        };
      }
    } else {
      throw new ResourceNotExistErro();
    }

    throw new Error('category not informed');
  }
}
