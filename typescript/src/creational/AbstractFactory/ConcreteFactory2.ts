import {
  AbstractFactory,
  AbstractProductA,
  AbstractProductB,
  ConcreteProductA2,
  ConcreteProductB2
} from '.'

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2()
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2()
  }
}
