import { Abstraction } from '.'

export class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    return `ExtendedAbstraction: Extended operation with:\n${this.implementation.operationImplementation()}`
  }
}
