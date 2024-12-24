import { Object1 } from '.'

export class ObjectPool {
  private static instance: ObjectPool
  private initialSize = 5
  private pool: Object1[] = []

  private constructor() {
    for (let index = 0; index < this.initialSize; index++) {
      this.pool.push(this.createObject())
    }
  }

  private createObject(): Object1 {
    return new Object1(`Object#${new Date().getTime()}`)
  }

  public static getInstance(): ObjectPool {
    if (!ObjectPool.instance) {
      ObjectPool.instance = new ObjectPool()
    }
    return ObjectPool.instance
  }

  public getObject(): Object1 {
    if (this.pool.length > 0) {
      return this.pool.pop() as Object1
    }
    return this.createObject()
  }

  public releaseObject(obj: Object1): void {
    this.pool.push(obj)
  }

  public size(): number {
    return this.pool.length
  }
}
