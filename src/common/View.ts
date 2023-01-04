export default class View<NodeType extends HTMLElement = HTMLElement> {
  public node: NodeType;

  constructor(parent: HTMLElement | null, tag = 'div', className = '') {
    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    if (parent) {
      parent.append(element);
    }

    this.node = element as NodeType;
  }

  destroy() {
    this.node.remove();
  }
}
