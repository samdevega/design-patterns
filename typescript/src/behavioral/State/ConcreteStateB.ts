import { ConcreteStateA, State } from '.'

export class ConcreteStateB extends State {
  public handle1(): void {}
  
  public handle2(): void {
    this.context?.transitionTo(new ConcreteStateA())
  }
}
