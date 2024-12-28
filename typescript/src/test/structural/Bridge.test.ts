import { Abstraction, ConcreteImplementationA, ConcreteImplementationB, ExtendedAbstraction } from '@/structural/Bridge'

describe('Bridge', () => {
  describe('Abstraction', () => {
    it('should be able to work with ConcreteImplementationA', () => {
      const implementation = new ConcreteImplementationA()
      const abstraction = new Abstraction(new ConcreteImplementationA())

      expect(abstraction.operation()).toBe(`Abstraction: Base operation with:\n${implementation.operationImplementation()}`)
    })

    it('should be able to work with ConcreteImplementationB', () => {
      const implementation = new ConcreteImplementationB()
      const abstraction = new Abstraction(new ConcreteImplementationB())

      expect(abstraction.operation()).toBe(`Abstraction: Base operation with:\n${implementation.operationImplementation()}`)
    })
  })

  describe('ExtendedAbstraction', () => {
    it('should be able to work with ConcreteImplementationA', () => {
      const implementation = new ConcreteImplementationA()
      const abstraction = new ExtendedAbstraction(new ConcreteImplementationA())

      expect(abstraction.operation()).toBe(`ExtendedAbstraction: Extended operation with:\n${implementation.operationImplementation()}`)
    })

    it('should be able to work with ConcreteImplementationB', () => {
      const implementation = new ConcreteImplementationB()
      const abstraction = new ExtendedAbstraction(new ConcreteImplementationB())

      expect(abstraction.operation()).toBe(`ExtendedAbstraction: Extended operation with:\n${implementation.operationImplementation()}`)
    })
  })
})
