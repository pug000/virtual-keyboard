export default class Textarea {
  constructor() {
    this.textarea = document.createElement('textarea');
    this.textarea.setAttribute('id', 'textarea');
    this.textarea.setAttribute('spellcheck', 'false');
    this.textarea.placeholder = 'Клавиатура создана в операционной системе Windows. \nПереключение языка: Shift + Alt.';
  }

  initTextarea() {
    this.textarea.addEventListener('blur', () => {
      this.textarea.focus();
    });
    return this.textarea;
  }
}
