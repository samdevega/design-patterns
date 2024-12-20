import {
  AbstractFactory,
  AbstractProductA,
  AbstractProductB,
  ConcreteProductA1,
  ConcreteProductB1
} from '.'

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1()
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1()
  }
}
