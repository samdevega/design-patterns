import { Strategy } from '.'

export class Context {
  constructor(private strategy: Strategy) {}

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy
  }

  public join(data: string[]): string {
    const result = this.strategy.doAlgorithm(data)
    return result.join(',')
  }
}
