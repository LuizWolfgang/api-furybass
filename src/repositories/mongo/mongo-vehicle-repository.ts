import { Vehicle } from "../../models/Vehicle";
import { Ivehicle, vehicleRepository } from "../vehicle-repository";

export class MongoVehiclesRepository implements vehicleRepository {
  // async findByEmail(email: string) {
  //   const user = await User.findOne({ email })

  //   if(!user) {
  //     return null
  //   }

  //   return user
  // }

  async create(data: Ivehicle) {
    console.log('DTAAAAAAAA', data);
    const vehicle = await Vehicle.create({
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
      mediaUrls: data.mediaUrls
    })

    return vehicle;
  }
}
