import { Circle, Square, Triangle, Visitor } from '.'

export class AreaCalculatorVisitor implements Visitor {
  private area = 0

  public visitCircle(shape: Circle): void {
    this.area = Math.PI * Math.pow(shape.getRadius(), 2)
  }

  public visitSquare(shape: Square): void {
    this.area = Math.pow(shape.getBase(), 2)
  }

  public visitTriangle(shape: Triangle): void {
    this.area = (shape.getBase() * shape.getHeight()) / 2
  }

  public getArea(): number {
    return this.area
  }
}
