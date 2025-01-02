import { Flyweight } from '.'

interface FlyweightList {
  [key: string]: Flyweight
}

export class FlyweightFactory {
  private flyweights: FlyweightList = {}

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state)
    }
  }

  private getKey(state: string[]): string {
    return state.join('_')
  }

  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState)

    if (!(key in this.flyweights)) {
      this.flyweights[key] = new Flyweight(sharedState)
    }

    return this.flyweights[key]
  }

  public listFlyweights(): FlyweightList {
    return this.flyweights
  }
}
