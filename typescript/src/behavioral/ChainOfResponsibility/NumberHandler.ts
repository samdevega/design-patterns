import { AbstractHandler } from '.'

export class NumberHandler extends AbstractHandler {
  public handle(request: string): string {
    if (!/[0-9]/u.test(request)) {
      return 'The request must contain at least one number'
    }
    
    return super.handle(request) 
  }
}
