import { InMemoryAnnouncementRepository } from "../repositories/in-memory/in-memory-announcement-repository";
import { expect, describe, it, beforeEach } from "vitest";
import { EditAnnouncementUseCase } from "./edit-announcement";

let announcementRepository: InMemoryAnnouncementRepository;
let sut: EditAnnouncementUseCase;

describe("Delete Announcement Use Case", () => {
  beforeEach(() => {
    announcementRepository = new InMemoryAnnouncementRepository();
    sut = new EditAnnouncementUseCase(announcementRepository);
  });

  it("should be able to edit announcement", async () => {
    await announcementRepository.create({
      userId: "324324",
      title: "luiz andre",
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
      title: "teste edit",
      description: "editou",
      number: "3243423432",
      price: "3001",
      category: "servico",
      type: "rebaixado",
      country: "DF",
      city: "editou",
      brand: "editou",
      km: "2333",
      year: "2023",
      mediaUrls: [
        {
          url: "editou",
          fileType: "editou",
        },
        {
          url: "editou",
          fileType: "editou",
        },
      ],
    });

    expect(announcementRepository.items[0]).toMatchObject({
      title: "teste edit",
      description: "editou",
    })

  });
});
