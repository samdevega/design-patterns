import { BeverageMaker } from '.'

export class TeaMaker extends BeverageMaker {
  public addSpice(): string {
    return 'tea'
  }
  public addLiquid(): string {
    return 'with hot water'
  }
  public addCondiment(): string {
    return 'and lemon'
  }
}
