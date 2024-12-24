import { Object1, ObjectPool } from '@/creational/ObjectPool'

describe('ObjectPool', () => {
  let pool: ObjectPool
  let objects = [] as Object1[]

  beforeEach(() => {
    pool = ObjectPool.getInstance()
  })

  afterEach(() => {
    for (let index = 0; index < objects.length; index++) {
      pool.releaseObject(objects[index])
    }
    objects = []
  })

  it('should create a singleton instance', () => {
    const samePool = ObjectPool.getInstance()

    expect(samePool).toBe(pool)
  })

  it('should initialize with a minimum size', () => {
    expect(pool.size()).toBeGreaterThan(0)
  })

  it('should retrieve an object', () => {
    const object = pool.getObject()

    expect(object).toBeInstanceOf(Object1)
    pool.releaseObject(object)
  })

  it('should reduce the pool size when an object is retrieved', () => {
    const expectedSize = pool.size() - 1

    const object = pool.getObject()

    expect(pool.size()).toBe(expectedSize)
    pool.releaseObject(object)
  })

  it('should be empty after retrieving all its objects', () => {
    const originalSize = pool.size()
    for (let index = 0; index < originalSize; index++) {
      objects.push(pool.getObject())
    }

    expect(pool.size()).toBe(0)
  })

  it('should create a new object when is empty', () => {
    const originalSize = pool.size()
    for (let index = 0; index < originalSize; index++) {
      objects.push(pool.getObject())
    }
    const newObject = pool.getObject()
    objects.push(newObject)

    expect(newObject).toBeInstanceOf(Object1)
  })

  it('should release an object back', () => {
    const expectedSize = pool.size()
    const object = pool.getObject()

    pool.releaseObject(object)

    expect(pool.size()).toBe(expectedSize)
  })

  it('should increase the maximum size when a created object is released back', () => {
    const originalSize = pool.size()
    const expectedSize = pool.size() + 1
    for (let index = 0; index < originalSize; index++) {
      objects.push(pool.getObject())
    }
    objects.push(pool.getObject())

    for (let index = 0; index < objects.length; index++) {
      pool.releaseObject(objects[index])
    }

    expect(pool.size()).toBe(expectedSize)
  })
})
