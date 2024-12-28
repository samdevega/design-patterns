import { Component } from '.'

export class Composite extends Component {
  protected children: Component[] = []

  public add(component: Component): void {
    this.children.push(component)
    component.setParent(this)
  }

  public remove(component: Component): void {
    this.children = this.children.filter((child) => child !== component)
    component.setParent(null)
  }

  public isComposite(): boolean {
    return true
  }

  public operation(): string {
    return this.children.map((child) => child.operation()).join(' ')
  }
}
