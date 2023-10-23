import { Iproduct, productRepository } from "../repositories/product-repository";


interface CreateProductUseCaseRequest {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  brand: string
  mediaUrls: {
    url: string;
    fileType: string;
  }[];
}

interface CreateProductUseCaseResponse {
  Product: Iproduct;
}

export class CreateProductUseCase {
  constructor(private ProductRepository: productRepository) {}
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
    brand,
    mediaUrls
  }: CreateProductUseCaseRequest): Promise<CreateProductUseCaseResponse> {
    const Product = await this.ProductRepository.create({
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
    });

    return {
      Product,
    };
  }
}
