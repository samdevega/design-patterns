import { Flyweight, FlyweightFactory } from '@/structural/Flyweight'

describe('Flyweight', () => {
  const cars = {
    chevy: ['Chevrolet', 'Camaro2018', 'yellow'],
    mercedes: ['Mercedes Benz', 'C300', 'black'],
    bmw: ['BMW', 'X6', 'white'],
    audi: ['Audi', 'A3', 'red'],
  }

  it('should have a shared state', () => {
    const flyweight = new Flyweight(cars.chevy)

    expect(flyweight).toBeInstanceOf(Flyweight)
    expect(flyweight).toHaveProperty('sharedState')
  })

  it('should have an operation method which lists shared and unique state', () => {
    const flyweight = new Flyweight(cars.chevy)

    expect(flyweight.operation(['John Doe'])).toEqual(['Chevrolet', 'Camaro2018', 'yellow', 'John Doe'])
  })

  describe('From FlyweightFactory', () => {
    it('should reuse existing flyweight', () => {
      const factory = new FlyweightFactory([
        cars.chevy,
        cars.mercedes,
        cars.bmw,
      ])

      factory.getFlyweight(cars.chevy).operation(['John Doe'])

      expect(Object.keys(factory.listFlyweights()).length).toBe(3)
      expect(Object.keys(factory.listFlyweights())).toContain(cars.chevy.join('_'))
    })

    it('should create new flyweight', () => {
      const factory = new FlyweightFactory([
        cars.chevy,
      ])

      factory.getFlyweight(cars.audi).operation(['John Doe'])

      expect(Object.keys(factory.listFlyweights()).length).toBe(2)
      expect(Object.keys(factory.listFlyweights())).toContain(cars.audi.join('_'))
    })
  })
})
