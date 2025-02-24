import { Strategy } from '.'

export class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string[] {
    return data.toSorted().reverse()
  }
}
