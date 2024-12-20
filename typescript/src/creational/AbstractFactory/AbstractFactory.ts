import { AbstractProductA, AbstractProductB } from '.'

export interface AbstractFactory {
  createProductA(): AbstractProductA
  createProductB(): AbstractProductB
}
