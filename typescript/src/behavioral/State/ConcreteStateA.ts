import { ConcreteStateB, State } from '.'

export class ConcreteStateA extends State {
  public handle1(): void {
    this.context?.transitionTo(new ConcreteStateB())
  }

  public handle2(): void {}
}
