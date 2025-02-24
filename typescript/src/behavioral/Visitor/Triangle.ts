import { Shape, Visitor } from '.'

export class Triangle implements Shape {
  constructor (private base: number, private height: number) {}

  public accept(visitor: Visitor): void {
    visitor.visitTriangle(this)
  }

  public getBase(): number {
    return this.base
  }

  public getHeight(): number {
    return this.height
  }
}
