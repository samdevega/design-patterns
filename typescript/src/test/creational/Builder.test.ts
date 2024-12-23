import { Builder, ConcreteBuilder1, Director, Product1 } from '@/creational/Builder'

describe('Builder', () => {
  describe('From ConcreteBuilder1', () => {
    const director = new Director()
    const builder: Builder = new ConcreteBuilder1()
    director.setBuilder(builder)

    it('should build a minimal Product1 instance', () => {
      director.buildMinimalViableProduct()
      const product = builder.getProduct()

      expect(product).toBeInstanceOf(Product1)
      expect(product.listParts()).toHaveLength(1)
      expect(product.listParts()).toEqual(['PartA1'])
    })

    it('should create a full Product1 instance', () => {
      director.buildFullFeaturedProduct()
      const product = builder.getProduct()

      expect(product).toBeInstanceOf(Product1)
      expect(product.listParts()).toHaveLength(3)
      expect(product.listParts()).toEqual(['PartA1', 'PartB1', 'PartC1'])
    })
  })
})
