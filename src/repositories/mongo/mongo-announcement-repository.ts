import { Announcement } from "../../models/Announcement";
import { Ivehicle, vehicleRepository } from "../announcement-repository";

export class MongoAnnouncementRepository implements vehicleRepository {

  async create(data: Ivehicle) {
    const vehicle = await Announcement.create(data)

    return vehicle;
  }
}
