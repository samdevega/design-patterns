import { Singleton } from '@/creational/Singleton'

describe('Singleton', () => {
  it('should return always the same instance', () => {
    const singleton = Singleton.getInstance()
    const sameSingleton = Singleton.getInstance()

    expect(sameSingleton).toBeInstanceOf(Singleton)
    expect(sameSingleton).toBe(singleton)
  })
})
