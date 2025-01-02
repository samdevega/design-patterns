export class Flyweight {
  private sharedState: any

  constructor(sharedState: any) {
    this.sharedState = sharedState
  }

  public operation(uniqueState: string[]): string[] {
    return this.sharedState.concat(uniqueState)
  }
}
