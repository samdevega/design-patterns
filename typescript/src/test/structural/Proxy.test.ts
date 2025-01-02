import { Proxy } from '@/structural/Proxy'

describe('Proxy', () => {
  it('should call subject request', () => {
    const subjectSpy = {
      request: jest.fn()
    }
    const proxy = new Proxy(subjectSpy)

    proxy.request()

    expect(subjectSpy.request).toHaveBeenCalled()
  })
})
