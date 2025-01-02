import { LetterHandler, NumberHandler } from '@/behavioral/ChainOfResponsibility'

describe('Chain of Responsibility', () => {
  const letterHandler = new LetterHandler()
  const numberHandler = new NumberHandler()

  letterHandler.setNext(numberHandler)

  it('should return "The request must contain at least one letter" if the request does not contain any letter', () => {
    expect(letterHandler.handle('123')).toBe('The request must contain at least one letter')
  })

  it('should return "The request must contain at least one number" if the request does not contain any number', () => {
    expect(letterHandler.handle('abc')).toBe('The request must contain at least one number')
  })

  it('should return "The request must contain at least one letter" if the request does not contain any letter', () => {
    expect(letterHandler.handle('')).toBe('The request must contain at least one letter')
  })

  it('should return "" if the request contains at least one letter and one number', () => {
    expect(letterHandler.handle('abc123')).toBe('')
  })
})
