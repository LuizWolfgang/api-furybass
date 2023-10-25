import {
  IAnnouncement,
  announcementRepository,
} from "../repositories/announcement-repository";

interface EditAnnouncementUseCaseRequest {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  km?: string;
  brand?: string;
  year?: string;
  mediaUrls: {
    url: string;
    fileType: string;
  }[];
}

interface EditAnnouncementUseCaseResponse {
  announcement: IAnnouncement;
}

export class EditAnnouncementUseCase {
  constructor(private announcementRepository: announcementRepository) {}

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
    km,
    brand,
    year,
    mediaUrls,
  }: EditAnnouncementUseCaseRequest): Promise<EditAnnouncementUseCaseResponse> {
    const announcement = await this.announcementRepository.findById(userId);

    if (!announcement) {
      throw new Error("Announcement not found.");
    }

    announcement.title = title;
    announcement.description = description;
    announcement.number = number;
    announcement.price = price;
    announcement.category = category;
    announcement.type = type;
    announcement.country = country;
    announcement.city = city;
    announcement.km = km;
    announcement.brand = brand;
    announcement.year = year;
    announcement.mediaUrls = mediaUrls;

    await this.announcementRepository.save(announcement);

    return {
      announcement,
    };
  }
}

