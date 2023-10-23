import { InMemoryServicesRepository } from '../repositories/in-memory/in-memory-services-repository'
import { CreateServiceUseCase } from './create-service'
import { expect, describe, it, beforeEach } from 'vitest'

let serviceRepository: InMemoryServicesRepository
let sut: CreateServiceUseCase

describe('Service Use Case', () => {
  beforeEach(() => {
    serviceRepository = new InMemoryServicesRepository()
    sut = new CreateServiceUseCase(serviceRepository)
  })

  it('should be able to create service', async () => {
   const service = await sut.execute({
      userId: '324324',
      title: 'aaaa',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
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

    console.log('SERIVIÇO', service)

    expect(service.Service.userId).toEqual(expect.any(String))
  })

})
