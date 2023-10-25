
import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryAnnouncementRepository } from '../repositories/in-memory/in-memory-announcement-repository'
import { GetAnnouncementUseCase } from './get-announcement-by-id'
import { ResourceNotExistErro } from './errors/resource-not-exists-error'

let announcementRepository: InMemoryAnnouncementRepository
let sut: GetAnnouncementUseCase

describe('Get By Id Announcement Use Case', () => {
  beforeEach(() => {
    announcementRepository = new InMemoryAnnouncementRepository()
    sut = new GetAnnouncementUseCase(announcementRepository)
  })

  it('should be able to get by id announcement', async () => {

    await announcementRepository.create({
      userId: '4321',
      title: 'saveiro',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      km: '2333',
      year: '2023',
      mediaUrls: [
        {
          url: 'URL_da_Midia_1',
          fileType: 'Tipo_de_Arquivo_1',
        },
        {
          url: 'URL_da_Midia_2',
          fileType: 'Tipo_de_Arquivo_2',
        },
      ]
    })

    await announcementRepository.create({
      userId: '1234',
      title: 'golf',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      km: '2333',
      year: '2023',
      mediaUrls: [
        {
          url: 'URL_da_Midia_1',
          fileType: 'Tipo_de_Arquivo_1',
        },
        {
          url: 'URL_da_Midia_2',
          fileType: 'Tipo_de_Arquivo_2',
        },
      ]
    })

    const { announcement } = await sut.execute({
     userId: '4321'
    })

    expect(announcement.userId).toEqual(expect.any(String));
    expect(announcement).toEqual(expect.objectContaining({ userId: "4321" }));
  })

  it('must be able to reject the search with an invalid id', async () => {

    await announcementRepository.create({
      userId: '4321',
      title: 'saveiro',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      km: '2333',
      year: '2023',
      mediaUrls: [
        {
          url: 'URL_da_Midia_1',
          fileType: 'Tipo_de_Arquivo_1',
        },
        {
          url: 'URL_da_Midia_2',
          fileType: 'Tipo_de_Arquivo_2',
        },
      ]
    })

    await announcementRepository.create({
      userId: '1234',
      title: 'golf',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      km: '2333',
      year: '2023',
      mediaUrls: [
        {
          url: 'URL_da_Midia_1',
          fileType: 'Tipo_de_Arquivo_1',
        },
        {
          url: 'URL_da_Midia_2',
          fileType: 'Tipo_de_Arquivo_2',
        },
      ]
    })

    expect(() => {
      return sut.execute({
        userId: '697834'
      })
    }).rejects.toBeInstanceOf(ResourceNotExistErro)
  })
})
