import { ConcreteObserver, ConcreteSubject } from '@/behavioral/Observer'

describe('Observer', () => {
  const concreteSubject = new ConcreteSubject()
  const concreteObserver = new ConcreteObserver()
  const concreteObserverSpy = jest.spyOn(concreteObserver, 'update')

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should not update from Subject notification before attach', () => {
    concreteSubject.setState('-')

    expect(concreteObserverSpy).not.toHaveBeenCalled()
  })

  it('should update from Subject notification after attach', () => {
    concreteSubject.attach(concreteObserver)

    concreteSubject.setState('A')

    expect(concreteObserverSpy).toHaveBeenCalledWith('A')
  })

  it('should not update from Subject notification after detach', () => {
    concreteSubject.detach(concreteObserver)

    concreteSubject.setState('B')

    expect(concreteObserverSpy).not.toHaveBeenCalled()
  })
})
