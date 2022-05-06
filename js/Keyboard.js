export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.capsLock = false;
    this.keys = [];
    this.lang = false;
  }

  initKeyboard() {
    this.keyboardBody.appendChild(this.createKeys());
    this.keys = this.keyboardBody.children;
    this.addFunctionalKey();
    return this.keyboardBody;
  }

  createKeys() {
    const fragment = document.createDocumentFragment();
    this.keyButtons.forEach((elem) => {
      this.keyElement = document.createElement('div');
      this.keyElement.className = 'keyboard__key';
      this.keyElement.classList.add(`${elem.code}`);
      this.keyElement.textContent = elem.key.en;
      fragment.appendChild(this.keyElement);
    });

    return fragment;
  }

  addFunctionalKey() {
    Array.from(this.keys).forEach((elem) => {
      elem.addEventListener('mousedown', (e) => {
        e.target.classList.add('active');
      });
      elem.addEventListener('mouseup', (e) => {
        e.target.classList.remove('active');
        if (elem.classList.contains('Backspace')) {
          this.backspace();
        } else if (elem.classList.contains('Tab')) {
          this.tab();
        } else if (elem.classList.contains('Delete')) {
          this.delete();
        } else if (elem.classList.contains('Enter')) {
          this.enter();
        } else if (elem.classList.contains('ControlLeft')
          || elem.classList.contains('ControlRight')) {
          this.doNothingWrite();
        } else if (elem.classList.contains('ShiftLeft')
          || elem.classList.contains('ShiftRight')) {
          this.doNothingWrite();
        } else if (elem.classList.contains('AltLeft')
          || elem.classList.contains('AltRight')) {
          this.doNothingWrite();
        } else if (elem.classList.contains('CapsLock')) {
          this.doNothingWrite();
          this.toggleCapsLock();
        } else if (elem.classList.contains('Space')) {
          this.space();
        } else if (elem.classList.contains('Switch-Lang')) {
          this.switchLang();
        } else if (this.capsLock) {
          this.textarea.value += elem.textContent.toUpperCase();
        } else {
          this.textarea.value += elem.textContent.toLowerCase();
        }
      });
    });
  }

  doNothingWrite() {
    this.textarea.value += '';
  }

  backspace() {
    this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
    this.textarea.textContent = this.textarea.value;
  }

  tab() {
    this.textarea.value += '  ';
    this.textarea.textContent = this.textarea.value;
  }

  delete() {
    this.textarea.value = this.textarea.value.substring(1);
    this.textarea.textContent = this.textarea.value;
  }

  enter() {
    this.textarea.value += '\n';
    this.textarea.textContent = this.textarea.value;
  }

  space() {
    this.textarea.value += ' ';
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;

    for (let i = 0; i < this.keys.length; i += 1) {
      if (this.keys[i].childElementCount === 0) {
        if (this.capsLock) {
          this.keys[i].textContent = this.keys[i].textContent.toUpperCase();
        } else {
          this.keys[i].textContent = this.keys[i].textContent.toLowerCase();
        }
      }
    }
  }

  switchLang() {
    this.lang = !this.lang;

    for (let i = 0; i < this.keys.length; i += 1) {
      const rus = this.keyButtons[i].key.ru;
      const eng = this.keyButtons[i].key.en;
      if (this.keys[i].childElementCount === 0) {
        if (this.lang) {
          this.keys[i].textContent = rus;
        } else {
          this.keys[i].textContent = eng;
        }
      }
    }
  }
}
