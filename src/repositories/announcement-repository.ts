export interface IAnnouncement {
  userId: string;
  title: string;
  description: string;
  number: string;
  price: string;
  category: string;
  type: string;
  country: string;
  city: string;
  brand?: string;
  km?: string;
  year?: string;
  mediaUrls: { url?: string; fileType?: string }[];
  createdAt?: Date;
}

export interface announcementRepository {
  findById(userId: string): Promise<IAnnouncement | null>;
  findManyAnnouncement(page: number, category: string): Promise<IAnnouncement[]>;
  create(data: IAnnouncement): Promise<IAnnouncement>;
  delete(announcement: IAnnouncement): Promise<void>
  save(announcement: IAnnouncement): Promise<void>;
}
