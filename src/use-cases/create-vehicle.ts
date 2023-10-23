
import {
  Ivehicle,
  vehicleRepository,
} from "../repositories/vehicle-repository";

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
  km: string;
  year: string;
  mediaUrls: {
    url: string;
    fileType: string;
  }[];
}

interface CreateVehicleUseCaseResponse {
  Vehicle: Ivehicle;
}

export class CreateVehicleUseCase {
  constructor(private vehicleRepository: vehicleRepository) {}
  async execute({
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
    mediaUrls
  }: CreateVehicleUseCaseRequest): Promise<CreateVehicleUseCaseResponse> {
    const Vehicle = await this.vehicleRepository.create({
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
    });

    return {
      Vehicle,
    };
  }
}
