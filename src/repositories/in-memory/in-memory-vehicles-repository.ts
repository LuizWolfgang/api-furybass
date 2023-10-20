import { Ivehicle, vehicleRepository } from '../vehicle-repository'

export class InMemoryVehiclesRepository implements vehicleRepository {
  public items: Ivehicle[] = []

 async create(data: Ivehicle) {
    const vehicle = {
      userId: data.userId,
      title: data.title,
      description: data.description,
      number: data.number,
      price: data.price,
      category: data.category,
      type: data.type,
      country: data.country,
      city: data.city,
      km: data.km,
      year: data.year,
      mediaUrls: data.mediaUrls,
      created_at: new Date(),
    }

    this.items.push(vehicle)

    return vehicle
  }
}
