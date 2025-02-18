import { Mediator } from '.'

export class BaseComponent {
  protected mediator?: Mediator

  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
}
