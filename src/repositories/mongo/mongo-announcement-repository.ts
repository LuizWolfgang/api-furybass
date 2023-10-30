import { Announcement } from "../../models/Announcement";
import { IAnnouncement, announcementRepository } from "../announcement-repository";

export class MongoAnnouncementRepository implements announcementRepository {
  async findById(id: string) {
    const announcement = await Announcement.findById({ _id: id });

    if (!announcement) {
      return null;
    }

    // Converta o Mongoose Document em IAnnouncement
    const foundAnnouncement: IAnnouncement = announcement.toObject();

    return foundAnnouncement;
  }

  async findManyAnnouncement(page: number, category: string) {
    const skip = (page - 1) * 10;
    const limit = 10;

    try {
      const announcements = await Announcement.find({ category })
        .skip(skip)
        .limit(limit)
        .exec();

      // Converter os documentos do Mongoose para o tipo IAnnouncement
      const convertedAnnouncements: IAnnouncement[] = announcements.map((announcement) => {
        return announcement.toObject();
      });

      return convertedAnnouncements;
    } catch (error) {
      // Lide com erros, como lançando ou registrando
      throw new Error('Anúncio não encontrado');
    }
  }

  async create(data: IAnnouncement) {
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
    mediaUrls: data.mediaUrls
    });

    const createdAnnouncement: IAnnouncement = announcement.toObject();

    return createdAnnouncement;
  }

  async delete(announcement: IAnnouncement): Promise<void> {
    try {
      await Announcement.deleteOne({ _id: announcement.userId });
    } catch (error) {
      // Lide com erros, como lançando ou registrando
      throw new Error('Erro ao excluir o anúncio');
    }
  }

  async save(announcementProps: IAnnouncement) {
    try {
      // Encontre o anúncio pelo ID
      const announcement = await Announcement.findById(announcementProps.userId);

      if (!announcement) {
        throw new Error('Anúncio não encontrado');
      }

      // Atualize os campos
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

      // Salve as alterações
      await announcement.save();
    } catch (error) {
      // Lide com erros, como lançando ou registrando
      throw new Error('Erro ao atualizar o anúncio');
    }
  }

}
