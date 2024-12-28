import { Component } from '.'

export class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent'
  }
}
