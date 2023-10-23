import { Iproduct, productRepository } from '../product-repository'

export class InMemoryProductsRepository implements productRepository {
  public items: Iproduct[] = []

 async create(data: Iproduct) {
    const product = {
      userId: data.userId,
      title: data.title,
      description: data.description,
      number: data.number,
      price: data.price,
      category: data.category,
      type: data.type,
      country: data.country,
      city: data.city,
      brand:data.brand,
      mediaUrls: data.mediaUrls,
      created_at: new Date(),
    }

    this.items.push(product)

    return product
  }
}
