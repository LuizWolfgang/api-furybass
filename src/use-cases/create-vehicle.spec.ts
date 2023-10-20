import { InMemoryVehiclesRepository } from '../repositories/in-memory/in-memory-vehicles-repository'
import { CreateVehicleUseCase } from './create-vehicle'
import { expect, describe, it, beforeEach } from 'vitest'

let vehiclesRepository: InMemoryVehiclesRepository
let sut: CreateVehicleUseCase

describe('Vehicle Use Case', () => {
  beforeEach(() => {
    vehiclesRepository = new InMemoryVehiclesRepository()
    sut = new CreateVehicleUseCase(vehiclesRepository)
  })

  it('should be able to create vehicle', async () => {
   const vehicle = await sut.execute({
      userId: '324324',
      title: 'aaaa',
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

    console.log('VEICULO', vehicle)

    expect(vehicle.vehicle.userId).toEqual(expect.any(String))
  })

})
