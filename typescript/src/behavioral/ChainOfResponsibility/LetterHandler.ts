import { AbstractHandler } from '.'

export class LetterHandler extends AbstractHandler {
  public handle(request: string): string {
    if (!/\p{L}/u.test(request)) {
      return 'The request must contain at least one letter'
    }
    
    return super.handle(request) 
  }
}
