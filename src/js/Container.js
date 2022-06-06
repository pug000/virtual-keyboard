export default class Container {
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'container';
  }

  init() {
    return this.container;
  }
}
