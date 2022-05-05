export default class Buttons {
  constructor(keysClass, keysEng, keysRus, textarea) {
    this.keyElement = document.createElement('div');
    this.br = document.createElement('br');
    this.keyFunc = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Switch-Lang', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
    this.keysClass = keysClass;
    this.keysEng = keysEng;
    this.keysRus = keysRus;
    this.textarea = textarea;
  }

  initKeys() {
    const fragment = document.createDocumentFragment();
    this.keyElement.className = 'keyboard__key';
    this.keyElement.classList.add(`${this.keysClass}`);
    fragment.appendChild(this.keyElement);
    if (this.keyFunc.indexOf(this.keysClass) !== -1) {
      this.keyElement.classList.add('functional');
    }
    this.setKeyButtons();
    return fragment;
  }

  setKeyButtons() {
    switch (this.keysClass) {
      case 'Backspace':
        this.setBackspace();
        break;

      case 'Tab':
        this.setTab();
        break;

      case 'Delete':
        this.setDelete();
        break;

      case 'Enter':
        this.setEnter();
        break;

      default:
        this.keyElement.textContent = this.keysEng.toLowerCase();
        this.keyElement.addEventListener('mousedown', () => {
          this.keyElement.classList.add('active');
        });
        this.keyElement.addEventListener('mouseup', () => {
          this.keyElement.classList.remove('active');
          this.textarea.value += this.keysEng.toLowerCase();
          this.textarea.textContent = this.textarea.value;
        });
        break;
    }
  }

  setBackspace() {
    this.keyElement.textContent = this.keysEng;
    this.keyElement.addEventListener('mousedown', () => {
      this.keyElement.classList.add('active');
    });
    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
      this.textarea.textContent = this.textarea.value;
    });
    return this.keyElement;
  }

  setTab() {
    this.keyElement.textContent = this.keysEng;
    this.keyElement.addEventListener('mousedown', () => {
      this.keyElement.classList.add('active');
    });
    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('active');
      this.textarea.value += '  ';
      this.textarea.textContent = this.textarea.value;
    });
    return this.keyElement;
  }

  setDelete() {
    this.keyElement.textContent = this.keysEng;

    this.keyElement.addEventListener('mousedown', () => {
      this.keyElement.classList.add('active');
    });
    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(1);
      this.textarea.textContent = this.textarea.value;
    });
    return this.keyElement;
  }

  setEnter() {
    this.keyElement.textContent = this.keysEng;

    this.keyElement.addEventListener('mousedown', () => {
      this.keyElement.classList.add('active');
    });
    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('active');
      this.textarea.value += '\n';
      this.textarea.textContent = this.textarea.value;
    });
    return this.keyElement;
  }
}
