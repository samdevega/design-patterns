import { Iterator } from '.'

export interface Aggregator {
  getIterator(): Iterator<string>
}
