import { Component, ConcreteComponent, ConcreteDecoratorA, ConcreteDecoratorB } from '@/structural/Decorator'

describe('Decorator', () => {
  describe('Client code expecting a Component', () => {
    it('should work with ConcreteComponent', () => {
      const component: Component = new ConcreteComponent()
  
      expect(component.operation()).toBe('ConcreteComponent')
    })
  
    it('should work with ConcreteDecoratorA', () => {
      const component: Component = new ConcreteComponent()
      const decorator: Component = new ConcreteDecoratorA(component)
  
      expect(decorator.operation()).toBe('ConcreteDecoratorA(ConcreteComponent)')
    })
  
    it('should work with ConcreteDecoratorB', () => {
      const component: Component = new ConcreteComponent()
      const decorator: Component = new ConcreteDecoratorB(component)
  
      expect(decorator.operation()).toBe('ConcreteDecoratorB(ConcreteComponent)')
    })
  })
})
