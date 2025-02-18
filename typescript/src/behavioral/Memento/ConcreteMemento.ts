import { Memento } from '.'

export class ConcreteMemento implements Memento {
  constructor(private state: string) {}

  public getContent(): string {
    return this.state
  }
}
