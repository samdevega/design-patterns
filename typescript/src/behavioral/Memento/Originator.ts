import { ConcreteMemento, Memento } from '.'

export class Originator {
  private state: string

  constructor(state: string) {
    this.state = state + '\n'
  }

  public addSomething(content: string): void {
    this.state += content + '\n'
  }

  public getContent(): string {
    return this.state
  }

  public createMemento(): Memento {
    return new ConcreteMemento(this.state)
  }

  public restoreFromMemento(memento: Memento): void {
    this.state = memento.getContent()
  }
}
