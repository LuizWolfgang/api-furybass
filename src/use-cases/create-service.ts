import { Iservice, serviceRepository } from "../repositories/service-repository";


interface CreateServiceUseCaseRequest {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  mediaUrls: {
    url: string;
    fileType: string;
  }[];
}

interface CreateServiceUseCaseResponse {
  Service: Iservice;
}

export class CreateServiceUseCase {
  constructor(private ServiceRepository: serviceRepository) {}
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
    mediaUrls
  }: CreateServiceUseCaseRequest): Promise<CreateServiceUseCaseResponse> {
    const Service = await this.ServiceRepository.create({
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
    });

    return {
      Service,
    };
  }
}
