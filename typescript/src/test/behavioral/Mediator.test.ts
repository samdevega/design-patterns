import { Component1, Component2, ConcreteMediator } from '@/behavioral/Mediator'

describe('Mediator', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('From ConcreteMediator', () => {
    const component1 = new Component1()
    const component2 = new Component2()
    const component1Spy = jest.spyOn(component1, 'doB')
    const component2Spy = jest.spyOn(component2, 'doC')
    const mediator = new ConcreteMediator(component1, component2)
    component1.setMediator(mediator)
    component2.setMediator(mediator)
    
    describe('When Component1 doA', () => {
      it('should trigger Component2 doC', () => {
        component1.doA()

        expect(component2Spy).toHaveBeenCalledTimes(1)
      })
    })

    describe('When Component2 doD', () => {
      it('should trigger Component1 doB', () => {
        component2.doD()

        expect(component1Spy).toHaveBeenCalledTimes(1)
      })

      it('should trigger Component2 doC', () => {
        component2.doD()

        expect(component2Spy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
