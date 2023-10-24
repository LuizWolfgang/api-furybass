import { Ivehicle, vehicleRepository } from "../repositories/announcement-repository";

interface FetchAllVehiclesUseCaseRequest{
  page: number;
}

interface FetchAllVehiclesUseCaseResponse {
  vehicles: Ivehicle[];
}

export class FetchAllVehiclesUseCase {
  constructor(private vehicleRepository: vehicleRepository) {}

  async execute({
    page
  }: FetchAllVehiclesUseCaseRequest): Promise<FetchAllVehiclesUseCaseResponse> {
    const vehicles = await this.vehicleRepository.findManyVehicles(
      page
    );

    return {
      vehicles,
    };
  }
}
