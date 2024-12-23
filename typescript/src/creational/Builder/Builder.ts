import { Product } from '.'

export interface Builder {
  buildPartA(): void
  buildPartB(): void
  buildPartC(): void
  getProduct(): Product
}
