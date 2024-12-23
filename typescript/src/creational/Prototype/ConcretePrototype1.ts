import { Prototype } from '.'

export class ConcretePrototype1 implements Prototype {
  private attributeC: number

  constructor(private attributeA: string, private attributeB: string) {
    this.attributeC = new Date().getTime()
  }

  public clone(): Prototype {
    const clone = new ConcretePrototype1(this.attributeA, this.attributeB)
    clone.attributeC = this.attributeC
    return clone
  }

  public getAttributeA(): string {
    return this.attributeA
  }

  public getAttributeB(): string {
    return this.attributeB
  }

  public getAttributeC(): number {
    return this.attributeC
  }
}
