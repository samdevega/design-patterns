import { BaseComponent, Event } from '.'

export class Component2 extends BaseComponent {
  public doC(): void {
    if (this.mediator) {
      this.mediator.notify(this, Event.C)
    }
  }

  public doD(): void {
    if (this.mediator) {
      this.mediator.notify(this, Event.D)
    }
  }
}
