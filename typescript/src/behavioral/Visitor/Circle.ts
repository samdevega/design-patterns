import { Shape, Visitor } from '.'

export class Circle implements Shape {
  constructor(private radius: number) {}

  public accept(visitor: Visitor): void {
    visitor.visitCircle(this)
  }

  public getRadius(): number {
    return this.radius
  }
}
