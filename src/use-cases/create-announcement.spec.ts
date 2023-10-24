import { InMemoryVehiclesRepository } from '../repositories/in-memory/in-memory-announcement-repository'
import { CreateVehicleUseCase } from './create-announcement'
import { expect, describe, it, beforeEach } from 'vitest'

let vehiclesRepository: InMemoryVehiclesRepository
let sut: CreateVehicleUseCase

describe('Announcement Use Case', () => {
  beforeEach(() => {
    vehiclesRepository = new InMemoryVehiclesRepository()
    sut = new CreateVehicleUseCase(vehiclesRepository)
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
