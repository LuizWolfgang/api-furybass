
import { expect, describe, it, beforeEach } from 'vitest'
import { FetchAnnouncementByCategoryUseCase } from './fetch-announcement-by-category'
import { InMemoryAnnouncementRepository } from '../repositories/in-memory/in-memory-announcement-repository'

let announcementRepository: InMemoryAnnouncementRepository
let sut: FetchAnnouncementByCategoryUseCase

describe('Fetch All Announcement Use Case', () => {
  beforeEach(() => {
    announcementRepository = new InMemoryAnnouncementRepository()
    sut = new FetchAnnouncementByCategoryUseCase(announcementRepository)
  })

  it('should be able to create announcement', async () => {

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
      page: 1,
      category: 'veiculo',
    })


    expect(announcement).toHaveLength(2);
    expect(announcement).toEqual([
      expect.objectContaining({  title: 'saveiro' }),
      expect.objectContaining({ title: 'golf' }),
    ])
  })

  it('should be able to fetch paginated announcement', async () => {
    for (let i = 1; i <= 12; i++) {
      await announcementRepository.create({
      userId: `id-${i}`,
      title: 'aaaa',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'servico',
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
    }

    const { announcement } = await sut.execute({
      page: 2,
      category: 'servico'
    })

    expect(announcement).toHaveLength(2)
    expect(announcement).toEqual([
      expect.objectContaining({ userId: 'id-11' }),
      expect.objectContaining({ userId: 'id-12' }),
    ])
  })
})
