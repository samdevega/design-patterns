import { Iterator, WordCollection } from '.'

export class WordIterator implements Iterator<string> {
  private collection: WordCollection
  private reverse: boolean
  private position: number = 0

  constructor(collection: WordCollection, reverse: boolean = false) {
    this.collection = collection
    this.reverse = reverse

    if (reverse) {
      this.position = collection.getCount() - 1
    }
  }

  public current(): string {
    return this.collection.getItems()[this.position]
  }

  public next(): string {
    const item = this.collection.getItems()[this.position]
    this.position += this.reverse ? -1 : 1
    return item
  }

  public key(): number {
    return this.position
  }

  public valid(): boolean {
    if (this.reverse) {
      return this.position >= 0
    }

    return this.position < this.collection.getCount()
  }

  public rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0
  }
}
