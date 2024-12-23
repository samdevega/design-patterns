import { ConcretePrototype1 } from '@/creational/Prototype'

describe('Prototype', () => {
  describe('From ConcretePrototype1', () => {
    const prototype = new ConcretePrototype1('A', 'B')

    it('should clone the current prototype object keeping its state', () => {
      const newPrototype = prototype.clone() as ConcretePrototype1

      expect(newPrototype).toBeInstanceOf(ConcretePrototype1)
      expect(newPrototype.getAttributeA()).toBe(prototype.getAttributeA())
      expect(newPrototype.getAttributeB()).toBe(prototype.getAttributeB())
      expect(newPrototype.getAttributeC()).toBe(prototype.getAttributeC())
    })
  })
})
