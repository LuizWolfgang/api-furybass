import { IAnnouncement, announcementRepository } from '../announcement-repository'

export class InMemoryAnnouncementRepository implements announcementRepository {

  public items: IAnnouncement[] = []

  async create(data: IAnnouncement): Promise<IAnnouncement> {
    this.items.push(data);
    return data;
  }

  async findManyAnnouncement(userId: string, page: number, category:string){
    return this.items.filter((item) => item.category.includes(category))
    .slice((page - 1) * 10, page * 10)
  }

  async findById(id: string) {
    const announcement = this.items.find((item) => item.userId === id)

    if (!announcement) {
      return null
    }

    return announcement
  }


  async delete(announcement: IAnnouncement){
    const itemIndex = this.items.findIndex((item) => item.userId === announcement.userId)

    this.items.splice(itemIndex, 1)
  }

  async save(announcement: IAnnouncement){
    const itemIndex = this.items.findIndex((item) => item.userId === announcement.userId)

      this.items[itemIndex] = announcement
  }
}
