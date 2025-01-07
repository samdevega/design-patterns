import { Command, Receiver } from '.'

export class ComplexCommand implements Command {
  constructor(private receiver: Receiver, private a: string, private b: string) {}

  execute(): void {
    console.log(`ComplexCommand:`)
    this.receiver.doSomething(this.a)
    this.receiver.doSomethingElse(this.b)
  }
}
