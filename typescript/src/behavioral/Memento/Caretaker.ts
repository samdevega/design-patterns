import { Memento, Originator } from '.'

export class Caretaker {
  private mementos: Array<Memento> = []
  private originator: Originator
  
  constructor(originator: Originator) {
    this.originator = originator
  }

  public backup(): void {
    this.mementos.push(this.originator.createMemento())
  }

  public undo(): void {
    const memento = this.mementos.pop()

    if (memento) {
      this.originator.restoreFromMemento(memento)
    }
  }
}
