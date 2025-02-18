import { Observer } from '.'

export class ConcreteObserver implements Observer {
  public update(event: string): void {
    console.log(`ConcreteObserverA updated with event ${event}`)
  }
}
