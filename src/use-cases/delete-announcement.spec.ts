import { InMemoryAnnouncementRepository } from "../repositories/in-memory/in-memory-announcement-repository";
import { expect, describe, it, beforeEach } from "vitest";
import { DeleteAnnouncementUseCase } from "./delete-announcement";

let announcementRepository: InMemoryAnnouncementRepository;
let sut: DeleteAnnouncementUseCase;

describe("Delete Announcement Use Case", () => {
  beforeEach(() => {
    announcementRepository = new InMemoryAnnouncementRepository();
    sut = new DeleteAnnouncementUseCase(announcementRepository);
  });

  it("should be able to delete announcement", async () => {
    await announcementRepository.create({
      userId: "324324",
      title: "aaaa",
      description: "luiz andre",
      number: "3243423432",
      price: "3001",
      category: "servico",
      type: "rebaixado",
      country: "DF",
      city: "brasilia",
      brand: "pionner",
      km: "2333",
      year: "2023",
      mediaUrls: [
        {
          url: "URL_da_Midia_1",
          fileType: "Tipo_de_Arquivo_1",
        },
        {
          url: "URL_da_Midia_2",
          fileType: "Tipo_de_Arquivo_2",
        },
      ],
    });

    await sut.execute({
      userId: "324324",
    });
    expect(announcementRepository.items).toHaveLength(0);
  });
});
