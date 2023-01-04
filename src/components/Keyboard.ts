import KeyboardState from '../common/KeyboardState';
import View from '../common/View';

import { KeyCodes } from '../ts/types';
import { KeysData } from '../ts/interfaces';

import Backspace from './keys/Backspace';
import Delete from './keys/Delete';
import Enter from './keys/Enter';
import Keys from './keys/Keys';
import Shift from './keys/Shift';
import Capslock from './keys/Capslock';
import Control from './keys/Control';
import Space from './keys/Space';
import Alt from './keys/Alt';
import Tab from './keys/Tab';
import Language from './keys/Language';
import Textarea from './Textarea';



const functionalKey: Record<string, typeof Keys> = {
  Backspace,
  Delete,
  Enter,
  Space,
  Tab,
  SwitchLang: Language,
  CapsLock: Capslock,
  ShiftLeft: Shift,
  ShiftRight: Shift,
  ControlLeft: Control,
  ControlRight: Control,
  AltLeft: Alt,
  AltRight: Alt,
};

export default class Keyboard extends View {
  keyMap: Record<string, Keys> = {};

  constructor(parent: HTMLElement, keys: KeyCodes, textarea: Textarea, state: KeyboardState) {
    super(parent, 'div', 'body-keyboard');
    this.keyMap = {};

    keys.forEach((keyCode) => {
      const KeyClass = functionalKey[keyCode] || Keys;
      const key = new KeyClass(this.node, keyCode, textarea, state);
      this.keyMap[keyCode] = key;
    });
  }

  switchLanguage = (languageKey: KeysData) => {
    Object.keys(languageKey).forEach((keyCode) => {
      this.keyMap[keyCode].setKey(languageKey[keyCode]);
    });
  };

  handleDown = (keyCode: string, event: KeyboardEvent) => {
    const currentKey = this.keyMap[keyCode];
    if (currentKey) {
      currentKey.eventDown(event);
    }
  };

  handleUp = (keyCode: string) => {
    const currentKey = this.keyMap[keyCode];
    if (currentKey) {
      currentKey.eventUp();
    }
  };
}
