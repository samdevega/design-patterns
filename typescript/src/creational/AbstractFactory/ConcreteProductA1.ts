import { AbstractProductA } from '.'

export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
    return 'Result of the product A1'
  }
}
