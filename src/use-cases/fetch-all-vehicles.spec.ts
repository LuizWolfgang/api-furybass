import { InMemoryVehiclesRepository } from '../repositories/in-memory/in-memory-announcement-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { FetchAllVehiclesUseCase } from './fetch-all-vehicles'

let vehiclesRepository: InMemoryVehiclesRepository
let sut: FetchAllVehiclesUseCase

describe('Fetch All Vehicle Use Case', () => {
  beforeEach(() => {
    vehiclesRepository = new InMemoryVehiclesRepository()
    sut = new FetchAllVehiclesUseCase(vehiclesRepository)
  })

  it('should be able to create vehicle', async () => {

    await vehiclesRepository.create({
      userId: '4321',
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

    await vehiclesRepository.create({
      userId: '1234',
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

    const { vehicles } = await sut.execute({
      page: 1,
    })

    expect(vehicles).toHaveLength(2)
    expect(vehicles).toEqual([
      expect.objectContaining({ userId: '4321' }),
      expect.objectContaining({ userId: '1234' }),
    ])


    // expect(vehicle.Vehicle.userId).toEqual(expect.any(String))
  })

  it('should be able to fetch paginated veiches', async () => {
    for (let i = 1; i <= 22; i++) {
      await vehiclesRepository.create({
      userId: `id-${i}`,
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
    }

    const { vehicles } = await sut.execute({
      page: 2,
    })

    expect(vehicles).toHaveLength(2)
    expect(vehicles).toEqual([
      expect.objectContaining({ userId: 'id-21' }),
      expect.objectContaining({ userId: 'id-22' }),
    ])
  })
})
