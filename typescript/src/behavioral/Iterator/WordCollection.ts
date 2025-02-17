import { Aggregator, Iterator, WordIterator } from '.'

export class WordCollection implements Aggregator {
  private items: string[] = []

  public getItems(): string[] {
    return this.items
  }

  public getCount(): number {
    return this.items.length
  }

  public addItem(item: string): void {
    this.items.push(item)
  }

  public getIterator(): Iterator<string> {
    return new WordIterator(this)
  }

  public getReverseIterator(): Iterator<string> {
    return new WordIterator(this, true)
  }
}
