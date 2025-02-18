import { Caretaker, Originator } from '@/behavioral/Memento'

describe('Memento', () => {  
  describe('From Caretaker and Originator', () => {
    const originator = new Originator('Hello, world!')
    const caretaker = new Caretaker(originator)

    it('should have the last content added', () => {
      originator.addSomething('Hello, galaxy!')

      expect(originator.getContent()).toBe('Hello, world!\nHello, galaxy!\n')
    })

    it('should backup and undo', () => {
      caretaker.backup()
      originator.addSomething('Hello, universe!')

      expect(originator.getContent()).toBe('Hello, world!\nHello, galaxy!\nHello, universe!\n')

      caretaker.undo()

      expect(originator.getContent()).toBe('Hello, world!\nHello, galaxy!\n')
    })
  })
})
