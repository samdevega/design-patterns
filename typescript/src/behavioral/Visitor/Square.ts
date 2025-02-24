import { Shape, Visitor } from '.'

export class Square implements Shape {
  constructor(private base: number) {}

  public accept(visitor: Visitor): void {
    visitor.visitSquare(this)
  }

  public getBase(): number {
    return this.base
  }
}
