export abstract class BeverageMaker {
  public makeBeverage(): string {
    return [
      this.addCup(),
      this.addSpice(),
      this.addLiquid(),
      this.addCondiment(),
    ].join(' ')
  }

  public addCup(): string {
    return 'A cup of'
  }

  public abstract addSpice(): string
  public abstract addLiquid(): string
  public abstract addCondiment(): string
}
