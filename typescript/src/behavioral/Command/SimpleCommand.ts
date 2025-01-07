import { Command } from '.'

export class SimpleCommand implements Command {
  constructor(private payload: string) {}

  execute(): void {
    console.log(`SimpleCommand: ${this.payload}`)
  }
}
