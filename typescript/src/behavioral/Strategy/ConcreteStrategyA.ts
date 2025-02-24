import { Strategy } from '.'

export class ConcreteStrategyA implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.toSorted()
  }
}
