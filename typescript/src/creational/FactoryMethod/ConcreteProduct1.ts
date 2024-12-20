import { Product } from '.'

export class ConcreteProduct1 implements Product {
  public operation() {
    return 'Result of the ConcreteProduct1'
  }
}
