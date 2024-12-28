import { Implementation } from '.'

export class Abstraction {
  protected implementation: Implementation

  constructor(implementation: Implementation) {
    this.implementation = implementation
  }

  public operation(): string {
    return `Abstraction: Base operation with:\n${this.implementation.operationImplementation()}`
  }
}
