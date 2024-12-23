import { Builder, Product1 } from '.'

export class ConcreteBuilder1 implements Builder {
  private product!: Product1

  constructor() {
    this.reset()
  }

  private reset(): void {
    this.product = new Product1()
  }

  public buildPartA(): void {
    this.product.add('PartA1')
  }

  public buildPartB(): void {
    this.product.add('PartB1')
  }

  public buildPartC(): void {
    this.product.add('PartC1')
  }

  public getProduct(): Product1 {
    const result = this.product
    this.reset()
    return result
  }
}
