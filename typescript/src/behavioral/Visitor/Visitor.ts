import { Circle, Square, Triangle } from '.'

export interface Visitor {
  visitCircle(shape: Circle): void
  visitSquare(shape: Square): void
  visitTriangle(shape: Triangle): void 
}
