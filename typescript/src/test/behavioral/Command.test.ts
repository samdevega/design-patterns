import { ComplexCommand, Invoker, Receiver, SimpleCommand } from '@/behavioral/Command'

describe('Command', () => {
  describe('From Invoker', () => {
    it('should be able to doSomethingImportant with onStart and onFinish commands', () => {
      const onStart = new SimpleCommand('Hello World!')
      const onFinish = new SimpleCommand('Goodbye World!')
      const invoker = new Invoker()
      invoker.setOnStart(onStart)
      invoker.setOnFinish(onFinish)
      jest.spyOn(onStart, 'execute')
      jest.spyOn(onFinish, 'execute')

      invoker.doSomethingImportant()

      expect(onStart.execute).toHaveBeenCalled()
      expect(onFinish.execute).toHaveBeenCalled()
    })
  })

  describe('From Receiver', () => {
    it('should be able to doSomething with onStart and onFinish commands', () => {
      const receiver = new Receiver()
      const onStart = new SimpleCommand('Hello World!')
      const onFinish = new ComplexCommand(receiver, 'Hello World!', 'Goodbye World!')
      const invoker = new Invoker()
      invoker.setOnStart(onStart)
      invoker.setOnFinish(onFinish)
      jest.spyOn(receiver, 'doSomething')

      invoker.doSomethingImportant()

      expect(receiver.doSomething).toHaveBeenCalled()
    })

    it('should be able to doSomethingElse', () => {
      const receiver = new Receiver()
      const onStart = new SimpleCommand('Hello World!')
      const onFinish = new ComplexCommand(receiver, 'Hello World!', 'Goodbye World!')
      const invoker = new Invoker()
      invoker.setOnStart(onStart)
      invoker.setOnFinish(onFinish)
      jest.spyOn(receiver, 'doSomethingElse')

      invoker.doSomethingImportant()

      expect(receiver.doSomethingElse).toHaveBeenCalled()
    })
  })
})
