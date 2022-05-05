// import Keyboard from "./Keyboard";

export default class Buttons {
  constructor(parent, keyButtons, textarea) {
    this.keyElement = document.createElement('div');
    this.br = document.createElement('br');
    this.keyFunc = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'Switch-Lang', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
    this.keyButtons = keyButtons;
    this.textarea = textarea;
    this.capsLock = false;
    this.keys = parent.children;
  }

  initKeys() {
    const fragment = document.createDocumentFragment();
    this.keyElement.className = 'keyboard__key';
    this.keyElement.classList.add(`${this.keyButtons.code}`);
    fragment.appendChild(this.keyElement);
    if (this.keyFunc.indexOf(this.keyButtons.code) !== -1) {
      this.keyElement.classList.add('functional');
    }
    this.setKeyButtons();
    return fragment;
  }

  setKeyButtons() {
    switch (this.keyButtons.code) {
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

      case 'CapsLock':
        this.setCapsLock();
        break;

      default:
        this.keyElement.textContent = this.keyButtons.key.en;

        this.keyElement.addEventListener('mousedown', () => {
          this.keyElement.classList.add('active');
        });

        this.keyElement.addEventListener('mouseup', () => {
          this.keyElement.classList.remove('active');

          if (!this.capsLock === false) {
            this.textarea.value += this.keyButtons.key.en.toLowerCase();
          } else {
            this.textarea.value += this.keyButtons.key.en.toUpperCase();
          }
          this.textarea.textContent = this.textarea.value;
        });

        break;
    }
  }

  setBackspace() {
    this.keyElement.textContent = this.keyButtons.key.en;
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
    this.keyElement.textContent = this.keyButtons.key.en;
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
    this.keyElement.textContent = this.keyButtons.key.en;

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
    this.keyElement.textContent = this.keyButtons.key.en;

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

  setCapsLock() {
    this.keyElement.textContent = this.keyButtons.key.en;
    this.keyElement.addEventListener('mousedown', () => {
      this.toggleCapsLock();
      this.keyElement.classList.add('active');
    });
    this.keyElement.addEventListener('mouseup', () => {
      this.keyElement.classList.remove('active');
    });
    return this.keyElement;
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
}
