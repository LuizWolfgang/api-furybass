
import { Iservice, serviceRepository } from '../service-repository'
export class InMemoryServicesRepository implements serviceRepository {
  public items: Iservice[] = []

 async create(data: Iservice) {
    const service = {
      userId: data.userId,
      title: data.title,
      description: data.description,
      number: data.number,
      price: data.price,
      category: data.category,
      type: data.type,
      country: data.country,
      city: data.city,
      mediaUrls: data.mediaUrls,
      created_at: new Date(),
    }

    this.items.push(service)

    return service
  }
}
