import { IAnnouncement, announcementRepository } from "../repositories/announcement-repository";
import { ResourceNotExistErro } from "./errors/resource-not-exists-error";

interface GetAnnouncementUseCaseRequest {
 userId: string;
}

interface GetAnnouncementUseCaseResponse {
  announcement: IAnnouncement;
}

export class GetAnnouncementUseCase {
  constructor(private announcementRepository: announcementRepository) {}
  async execute({ userId }: GetAnnouncementUseCaseRequest): Promise<GetAnnouncementUseCaseResponse>{

    console.log('USER Id', userId);
      const announcement = await this.announcementRepository.findById(userId)

      if(!announcement){
          throw new ResourceNotExistErro()
      }

      return {
        announcement,
      }
  }
}
