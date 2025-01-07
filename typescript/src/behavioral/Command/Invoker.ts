import { Command } from '.'

export class Invoker {
  private onStart!: Command
  private onFinish!: Command

  public setOnStart(command: Command): void {
    this.onStart = command
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command
  }

  public doSomethingImportant(): void {
    console.log(`Invoker: doSomethingImportant onStart`)
    if (this.isCommand(this.onStart)) {
      this.onStart.execute()
    }

    console.log(`Invoker: doSomethingImportant onFinish`)
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute()
    }
  }

  private isCommand(command: Command): boolean {
    return command.execute !== undefined
  }
}
