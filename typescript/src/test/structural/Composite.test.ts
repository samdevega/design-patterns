import { Composite, FinalComponent } from '@/structural/Composite'

describe('Composite', () => {
  it('should get operation from a single FinalComponent', () => {
    const finalComponent = new FinalComponent()

    expect(finalComponent.operation()).toBe('*')
  })

  it('should get operation from a Composite', () => {
    const composite = new Composite()
    const finalComponent1 = new FinalComponent()
    const finalComponent2 = new FinalComponent()
    composite.add(finalComponent1)
    composite.add(finalComponent2)

    expect(composite.operation()).toBe([
      finalComponent1.operation(),
      finalComponent2.operation(),
    ].join(' '))
  })

  it('should get operation from a nested Composite', () => {
    const composite1 = new Composite()
    const composite2 = new Composite()
    const finalComponent1 = new FinalComponent()
    const finalComponent2 = new FinalComponent()
    composite1.add(finalComponent1)
    composite2.add(finalComponent2)
    composite1.add(composite2)

    expect(composite1.operation()).toBe([
      finalComponent1.operation(),
      composite2.operation(),
    ].join(' '))
  })
})
