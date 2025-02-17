import { WordCollection } from '@/behavioral/Iterator'

describe('Iterator', () => {
  describe('From WordCollection', () => {
    const collection = new WordCollection()
    collection.addItem('First')
    collection.addItem('Second')
    collection.addItem('Third')

    it('should be able to iterate over the collection in straight order', () => {
      const iterator = collection.getIterator()

      expect(iterator.next()).toBe('First')
      expect(iterator.next()).toBe('Second')
      expect(iterator.next()).toBe('Third')
    })

    it('should be able to iterate over the collection in reverse order', () => {
      const reverseIterator = collection.getReverseIterator()

      expect(reverseIterator.next()).toBe('Third')
      expect(reverseIterator.next()).toBe('Second')
      expect(reverseIterator.next()).toBe('First')
    })
  })
})
