import { InMemoryProductsRepository } from '../repositories/in-memory/in-memory-products-repository'
import { CreateProductUseCase } from './create-product'
import { expect, describe, it, beforeEach } from 'vitest'

let productsRepository: InMemoryProductsRepository
let sut: CreateProductUseCase

describe('Product Use Case', () => {
  beforeEach(() => {
    productsRepository = new InMemoryProductsRepository()
    sut = new CreateProductUseCase(productsRepository)
  })

  it('should be able to create product', async () => {
   const product = await sut.execute({
      userId: '324324',
      title: 'aaaa',
      description: 'luiz andre',
      number: '3243423432',
      price: '3001',
      category: 'veiculo',
      type: 'rebaixado',
      country: 'DF',
      city: 'brasilia',
      brand: 'pionner',
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

    console.log('PRODUTO', product)

    expect(product.Product.userId).toEqual(expect.any(String))
  })

})
