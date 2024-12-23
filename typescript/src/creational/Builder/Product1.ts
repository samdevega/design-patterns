import { Product } from '.'

export class Product1 implements Product {
  private parts: string[] = []

  public add(part: string): void {
    this.parts.push(part)
  }

  public listParts(): string[] {
    return this.parts
  }
}
