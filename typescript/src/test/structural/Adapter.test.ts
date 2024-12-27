import { Adaptee, Adapter, Target } from '@/structural/Adapter'

describe('Adapter', () => {
  describe('Client code', () => {
    it('should be able to work with domain specific Target object', () => {
      const target = new Target()
  
      expect(target.request()).toBe('Target: The default target\'s behavior.')
    })
  
    it('should not be able to work with Adaptee object directly', () => {
      const adaptee = new Adaptee()

      expect(adaptee.specificRequest()).not.toBe('Special behavior of the Adaptee.')
    })

    it('should be able to work with Adaptee object through Adapter object', () => {
      const adaptee = new Adaptee()
      const adapter = new Adapter(adaptee)
  
      expect(adapter.request()).toBe('Adapter: (TRANSLATED) Special behavior of the Adaptee.')
    })
  })
})
