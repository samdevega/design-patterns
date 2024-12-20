import { ConcreteProduct2, Creator, Product } from '.'

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2()
  }
}
