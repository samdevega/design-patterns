import { Component1, Component2, Event, Mediator } from '.'

export class ConcreteMediator implements Mediator {
  constructor(private component1: Component1, private component2: Component2) {}

  notify(_sender: object, event: string): void {
    switch (event) {
      case Event.A:
        this.component2.doC()
        break
      case Event.D:
        this.component1.doB()
        this.component2.doC()
        break
    }
  }
}
