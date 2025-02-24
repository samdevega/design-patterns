import { BeverageMaker, CoffeeMaker, TeaMaker } from '@/behavioral/TemplateMethod'

describe('Template Method', () => {
  describe('From BeverageMaker', () => {
    it('should make some coffee', () => {
      const beverageMaker: BeverageMaker = new CoffeeMaker()

      const result = beverageMaker.makeBeverage()

      expect(result).toBe('A cup of coffee with hot milk and sugar')
    })

    it('should make some tea', () => {
      const beverageMaker: BeverageMaker = new TeaMaker()

      const result = beverageMaker.makeBeverage()

      expect(result).toBe('A cup of tea with hot water and lemon')
    })
  })
})
