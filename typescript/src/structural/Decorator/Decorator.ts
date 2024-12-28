import { Component } from '.'

export class Decorator implements Component {
  protected component: Component

  constructor(component: Component) {
    this.component = component
  }

  public operation(): string {
    return this.component.operation()
  }
}
