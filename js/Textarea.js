export default class Textarea {
  constructor() {
    this.textarea = document.createElement('textarea');
    this.textarea.setAttribute('id', 'textarea');
    this.textarea.value = 'adasda';
  }

  initTextarea() {
    this.textarea.addEventListener('blur', () => {
      this.textarea.focus();
    });
    return this.textarea;
  }
}
