import { announcementRepository } from "../repositories/announcement-repository"

interface DeleteAnnouncementUseCaseRequest {
  userId: string
}

interface DeleteAnnouncementUseCaseResponse {}

export class DeleteAnnouncementUseCase {
  constructor(private announcementRepository: announcementRepository) {}

  async execute({
    userId,
  }: DeleteAnnouncementUseCaseRequest): Promise<DeleteAnnouncementUseCaseResponse> {
    const announcement = await this.announcementRepository.findById(userId)

    if (!announcement) {
      throw new Error('Announcement not found.')
    }

    await this.announcementRepository.delete(announcement)

    return {}
  }
}
