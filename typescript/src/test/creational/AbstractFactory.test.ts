import {
  AbstractFactory,
  AbstractProductA,
  AbstractProductB,
  ConcreteFactory1,
  ConcreteFactory2,
  ConcreteProductA1,
  ConcreteProductA2,
  ConcreteProductB1,
  ConcreteProductB2,
} from '@/creational/AbstractFactory'

describe('AbstractFactory', () => {
  let factory1: AbstractFactory
  let factory2: AbstractFactory

  beforeEach(() => {
    factory1 = new ConcreteFactory1()
    factory2 = new ConcreteFactory2()
  })

  describe('From ConcreteFactory1', () => {
    it('should create product A', () => {
      const productA: AbstractProductA = factory1.createProductA()
  
      expect(productA).toBeInstanceOf(ConcreteProductA1)
      expect(productA.usefulFunctionA()).toBe('Result of the product A1')
    })
  
    it('should create product B', () => {
      const productB: AbstractProductB = factory1.createProductB()
  
      expect(productB).toBeInstanceOf(ConcreteProductB1)
      expect(productB.usefulFunctionB()).toBe('Result of the product B1')
    })
  })

  describe('From ConcreteFactory2', () => {
    it('should create product A', () => {
      const productA: AbstractProductA = factory2.createProductA()
  
      expect(productA).toBeInstanceOf(ConcreteProductA2)
      expect(productA.usefulFunctionA()).toBe('Result of the product A2')
    })
  
    it('should create product B', () => {
      const productB: AbstractProductB = factory2.createProductB()
  
      expect(productB).toBeInstanceOf(ConcreteProductB2)
      expect(productB.usefulFunctionB()).toBe('Result of the product B2')
    })
  })
})
