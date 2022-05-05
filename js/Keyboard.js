export default class Keyboard {
  constructor(textarea, keyButtons) {
    this.keyboardBody = document.createElement('div');
    this.keyboardBody.className = 'body-keyboard';
    this.textarea = textarea;
    this.keyButtons = keyButtons;
    this.buttons = '';
    this.capsLock = false;
    this.keys = [];
  }

  initKeyboard() {
    this.keyboardBody.appendChild(this.initKeys());
    this.keys = this.keyboardBody.children;
    return this.keyboardBody;
  }

  initKeys() {
    const fragment = document.createDocumentFragment();
    this.keyButtons.forEach((elem) => {
      this.keyElement = document.createElement('div');
      this.keyElement.className = 'keyboard__key';
      this.keyElement.classList.add(`${elem.code}`);
      fragment.appendChild(this.keyElement);
      this.setKeyButtons(elem);
    });

    return fragment;
  }

  setKeyButtons(elem) {
    switch (elem.code) {
      case 'Backspace':
        this.setBackspace(elem);
        break;

      case 'Tab':
        this.setTab(elem);
        break;

      case 'Delete':
        this.setDelete(elem);
        break;

      case 'Enter':
        this.setEnter(elem);
        break;

      case 'CapsLock':
        this.setCapsLock(elem);
        break;

      default:
        this.keyElement.textContent = elem.key.en;

        this.keyElement.addEventListener('mousedown', (e) => {
          e.target.classList.add('active');
        });

        this.keyElement.addEventListener('mouseup', (e) => {
          e.target.classList.remove('active');
          if (this.capsLock) {
            this.textarea.value += elem.key.en.toUpperCase();
          } else {
            this.textarea.value += elem.key.en.toLowerCase();
          }
        });

        break;
    }
  }

  setBackspace(elem) {
    this.keyElement.textContent = elem.key.en;

    this.keyElement.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });

    this.keyElement.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(0, this.textarea.value.length - 1);
      this.textarea.textContent = this.textarea.value;
    });
    return this.keyElement;
  }

  setTab(elem) {
    this.keyElement.textContent = elem.key.en;

    this.keyElement.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });

    this.keyElement.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
      this.textarea.value += '  ';
      this.textarea.textContent = this.textarea.value;
    });

    return this.keyElement;
  }

  setDelete(elem) {
    this.keyElement.textContent = elem.key.en;

    this.keyElement.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });

    this.keyElement.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
      this.textarea.value = this.textarea.value.substring(1);
      this.textarea.textContent = this.textarea.value;
    });

    return this.keyElement;
  }

  setEnter(elem) {
    this.keyElement.textContent = elem.key.en;

    this.keyElement.addEventListener('mousedown', (e) => {
      e.target.classList.add('active');
    });

    this.keyElement.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
      this.textarea.value += '\n';
      this.textarea.textContent = this.textarea.value;
    });

    return this.keyElement;
  }

  setCapsLock(elem) {
    this.keyElement.textContent = elem.key.en;

    this.keyElement.addEventListener('mousedown', (e) => {
      this.toggleCapsLock();
      e.target.classList.add('active');
    });

    this.keyElement.addEventListener('mouseup', (e) => {
      e.target.classList.remove('active');
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
