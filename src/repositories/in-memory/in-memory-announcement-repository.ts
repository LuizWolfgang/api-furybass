import { Ivehicle, vehicleRepository } from '../announcement-repository'

export class InMemoryVehiclesRepository implements vehicleRepository {

  public items: Ivehicle[] = []

  async create(data: Ivehicle): Promise<Ivehicle> {
    this.items.push(data);
    return data;
  }

  async findManyVehicles(page: number){
    return this.items
    .slice((page - 1) * 20, page * 20)
  }
}
