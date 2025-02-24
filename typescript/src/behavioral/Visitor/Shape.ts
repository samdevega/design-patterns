import { Visitor } from '.'

export interface Shape {
  accept(visitor: Visitor): void
}
