import { Subject, Observer } from '.'

export class ConcreteSubject implements Subject {
  private observers: Observer[] = []
  private event: string = ''

  public attach(observer: Observer): void {
    this.observers.push(observer)
  }

  public detach(observer: Observer): void {
    this.observers = this.observers.filter(attachedObserver => attachedObserver !== observer)
  }

  public notify(): void {
    this.observers.forEach(observer => observer.update(this.event))
  }

  public setState(event: string): void {
    this.event = event
    this.notify()
  }
}
