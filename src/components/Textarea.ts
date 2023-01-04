import View from '../common/View';

export default class Textarea extends View<HTMLTextAreaElement> {
  constructor(parent: HTMLElement) {
    super(parent, 'textarea', 'textarea');
    this.node.spellcheck = false;
    this.node.placeholder = 'Клавиатура создана в операционной системе Windows.\nПереключение языка: Shift + Alt.';
  }

  get position() {
    return this.node.selectionStart;
  }

  addChar = (currentPosition: number, char: string) => {
    const beforePos = this.node.value.slice(0, currentPosition);
    const afterPos = this.node.value.slice(currentPosition);
    this.node.value = beforePos + char + afterPos;
    this.node.focus();
  };

  removeBeforeChar = (currentPosition: number) => {
    if (currentPosition === 0) {
      return;
    }

    const beforePos = this.node.value.slice(0, currentPosition);
    const afterPos = this.node.value.slice(currentPosition);
    this.node.value = beforePos.slice(0, -1) + afterPos;
    this.node.focus();
  };

  removeAfterChar = (currentPosition: number) => {
    const beforePos = this.node.value.slice(0, currentPosition);
    const afterPos = this.node.value.slice(currentPosition);
    this.node.value = beforePos + afterPos.substring(1);
    this.node.focus();
  };
}
