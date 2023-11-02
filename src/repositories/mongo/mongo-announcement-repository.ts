import { Announcement } from "../../models/Announcement";
import { IAnnouncement, announcementRepository } from "../announcement-repository";

export class MongoAnnouncementRepository implements announcementRepository {
  async findById(userId: string) {
    try {
      const announcement = await Announcement.findOne({ userId: userId });

      if (!announcement) {
        return null;
      }

      return announcement;
    } catch (error) {
      throw new Error("An error occurred while fetching an announcement by ID.");
    }
  }

  async findManyAnnouncement(userId: string, page: number, category: string) {
    try {
      const skip = (page - 1) * 10;
      const limit = 10;

      const announcements = await Announcement.find({ userId, category })
        .skip(skip)
        .limit(limit)
        .exec();

      if (!announcements) {
        return null;
      }

      const convertedAnnouncements: IAnnouncement[] = announcements.map((announcement) => {
        return announcement.toObject();
      });

      return convertedAnnouncements;
    } catch (error) {
      throw new Error("An error occurred while fetching announcements.");
    }
  }

  async create(data: IAnnouncement) {
    try {
      const announcement = await Announcement.create({
        userId: data.userId,
        title: data.title,
        description: data.description,
        number: data.number,
        price: data.price,
        category: data.category,
        type: data.type,
        country: data.country,
        city: data.city,
        brand: data.brand,
        km: data.km,
        year: data.year,
        mediaUrls: data.mediaUrls,
      });

      const createdAnnouncement: IAnnouncement = announcement.toObject();

      return createdAnnouncement;
    } catch (error) {
      throw new Error("An error occurred while creating an announcement.");
    }
  }

  async delete(announcement: IAnnouncement): Promise<void> {
    try {
      await Announcement.deleteOne({ _id: announcement.userId });
    } catch (error) {
      throw new Error("An error occurred while deleting an ad.");
    }
  }

  async save(announcementProps: IAnnouncement) {
    try {
      const announcement = await Announcement.findById(announcementProps.userId);

      if (!announcement) {
        throw new Error("Ad not found");
      }

      announcement.title = announcementProps.title;
      announcement.description = announcementProps.description;
      announcement.number = announcementProps.number;
      announcement.price = announcementProps.price;
      announcement.category = announcementProps.category;
      announcement.type = announcementProps.type;
      announcement.country = announcementProps.country;
      announcement.city = announcementProps.city;
      announcement.km = announcementProps.km;
      announcement.brand = announcementProps.brand;
      announcement.year = announcementProps.year;
      announcement.mediaUrls = announcementProps.mediaUrls;

      await announcement.save();
    } catch (error) {
      throw new Error("An error occurred while updating an ad.");
    }
  }
}
