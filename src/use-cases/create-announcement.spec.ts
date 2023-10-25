import { InMemoryAnnouncementRepository } from '../repositories/in-memory/in-memory-announcement-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateAnnouncementUseCase } from './create-announcement'

let announcementRepository: InMemoryAnnouncementRepository
let sut: CreateAnnouncementUseCase

describe('Announcement Use Case', () => {
  beforeEach(() => {
    announcementRepository = new InMemoryAnnouncementRepository()
    sut = new CreateAnnouncementUseCase(announcementRepository)
  })

  it('should be able to create announcement', async () => {
   const data = await sut.execute({
      userId: '324324',
      title: 'aaaa',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'servico',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      brand: 'pionner',
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

    expect(data.announcement.userId).toEqual(expect.any(String))
  })

  it('creating an ad without informing the category', async () => {

     await expect(() =>
     sut.execute({
      userId: '324324',
      title: 'aaaa',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: '',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      brand: 'pionner',
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
   ).rejects.toBeInstanceOf(Error);
   })

})
