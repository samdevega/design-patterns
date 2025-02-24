import { AreaCalculatorVisitor, Circle, Square, Triangle } from '@/behavioral/Visitor'

describe('Visitor', () => {
  describe('AreaCalculatorVisitor', () => {
    const areaCalculatorVisitor = new AreaCalculatorVisitor()

    it('should calculate the area of a Circle', () => {
      areaCalculatorVisitor.visitCircle(new Circle(1))

      expect(areaCalculatorVisitor.getArea()).toBe(Math.PI)
    })

    it('should calculate the area of a Square', () => {
      areaCalculatorVisitor.visitSquare(new Square(5))

      expect(areaCalculatorVisitor.getArea()).toBe(25)
    })

    it('should calculate the area of a Triangle', () => {
      areaCalculatorVisitor.visitTriangle(new Triangle(13, 14))

      expect(areaCalculatorVisitor.getArea()).toBe(91)
    })
  })
})
