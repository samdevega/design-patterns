import { BeverageMaker } from '.'

export class CoffeeMaker extends BeverageMaker {
  public addSpice(): string {
    return 'coffee'
  }
  public addLiquid(): string {
    return 'with hot milk'
  }
  public addCondiment(): string {
    return 'and sugar'
  }
}
