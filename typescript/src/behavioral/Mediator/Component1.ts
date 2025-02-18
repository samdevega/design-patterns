import { BaseComponent, Event } from '.'

export class Component1 extends BaseComponent {
  public doA(): void {
    if (this.mediator) {
      this.mediator.notify(this, Event.A)
    }
  }

  public doB(): void {
    if (this.mediator) {
      this.mediator.notify(this, Event.B)
    }
  }
}
