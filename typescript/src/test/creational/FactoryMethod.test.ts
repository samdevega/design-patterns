import { Creator, ConcreteCreator1, ConcreteCreator2, ConcreteProduct1, ConcreteProduct2, Product } from '@/creational/FactoryMethod'

describe('FactoryMethod', () => {
  let creator1: Creator
  let creator2: Creator

  beforeEach(() => {
    creator1 = new ConcreteCreator1()
    creator2 = new ConcreteCreator2()
  })

  describe('From ConcreteCreator1', () => {
    it('should create ConcreteProduct1 using factoryMethod', () => {
      const product: Product = creator1.factoryMethod()

      expect(product).toBeInstanceOf(ConcreteProduct1)
      expect(product.operation()).toBe('Result of the ConcreteProduct1')
    })

    it('should perform some operation with the created product', () => {
      const result: string = creator1.someOperation()

      expect(result).toBe(`Creator: The same creator's code has just worked with Result of the ConcreteProduct1`)
    })
  })

  describe('From ConcreteCreator2', () => {
    it('should create ConcreteProduct2 using factoryMethod', () => {
      const product: Product = creator2.factoryMethod()

      expect(product).toBeInstanceOf(ConcreteProduct2)
      expect(product.operation()).toBe('Result of the ConcreteProduct2')
    })

    it('should perform some operation with the created product', () => {
      const result: string = creator2.someOperation()

      expect(result).toBe(`Creator: The same creator's code has just worked with Result of the ConcreteProduct2`)
    })
  })
})
