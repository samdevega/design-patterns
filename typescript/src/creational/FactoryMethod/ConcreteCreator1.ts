import { ConcreteProduct1, Creator, Product } from '.'

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1()
  }
}
