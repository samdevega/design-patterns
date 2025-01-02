import { Subject } from '.'

export class Proxy implements Subject {
  private realSubject: Subject

  constructor(realSubject: Subject) {
    this.realSubject = realSubject
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.doNothing()
    }
  }

  private checkAccess(): boolean {
    return true
  }

  private doNothing(): void {}
}
