import { ConcreteStateA, ConcreteStateB, Context } from '@/behavioral/State'

describe('State', () => {
  describe('From Context', () => {
    const contextSpy = jest.spyOn(Context.prototype, 'transitionTo')

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('should transition to injected State on creation', () => {
      new Context(new ConcreteStateA())

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateA))

      new Context(new ConcreteStateB())

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateB))
    })

    it('should transition from ConcreteStateA to ConcreteStateB on request1', () => {
      const context = new Context(new ConcreteStateA())

      context.request1()

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateB))
    })

    it('should keep in ConcreteStateA on request2', () => {
      const context = new Context(new ConcreteStateA())

      context.request2()

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateA))
    })

    it('should transition from ConcreteStateB to ConcreteStateA on request2', () => {
      const context = new Context(new ConcreteStateB())

      context.request2()

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateA))
    })

    it('should keep in ConcreteStateB on request1', () => {
      const context = new Context(new ConcreteStateB())

      context.request1()

      expect(contextSpy).toHaveBeenCalledWith(expect.any(ConcreteStateB))
    })
  })
})
