import { Facade } from '@/structural/Facade'

describe('Facade', () => {
  it('should provide access to its subsystems\' operations through a simple interface', () => {
    const facade = new Facade()

    expect(facade.operation()).toBe('Facade initializes subsystems:\nSubsystem1: Ready!\nSubsystem2: Get ready!\nFacade orders subsystems to perform the action:\nSubsystem1: Go!\nSubsystem2: Fire!')
  })
})
