import { ConcreteStrategyA, ConcreteStrategyB, Context } from '@/behavioral/Strategy'

describe('Strategy', () => {
  describe('From Context', () => {
    it('should return the data sorted in ascending order and joined by comma', () => {
      const context = new Context(new ConcreteStrategyA())

      const result = context.join(['a', 'c', 'b'])

      expect(result).toBe('a,b,c')
    })

    it('should return the data sorted in descending order and joined by comma', () => {
      const context = new Context(new ConcreteStrategyB())

      const result = context.join(['a', 'c', 'b'])

      expect(result).toBe('c,b,a')
    })
  })
})
