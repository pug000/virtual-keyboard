import { KeysData } from 'ts/interfaces';

const defaultState: KeysData = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'BACKSPACE',
  Tab: 'TAB',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Delete: 'DEL',
  CapsLock: 'CAPSLOCK',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ';',
  Quote: "'",
  Enter: 'ENTER',
  ShiftLeft: 'SHIFT',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '\u2191',
  ShiftRight: 'SHIFT',
  ControlLeft: 'CTRL',
  SwitchLang: 'RUS',
  AltLeft: 'ALT',
  Space: 'SPACE',
  AltRight: 'ALT',
  ArrowLeft: '\u2190',
  ArrowDown: '\u2193',
  ArrowRight: '\u2192',
  ControlRight: 'CTRL',
};

const shiftState: KeysData = {
  Backquote: '~',
  Digit1: '!',
  Digit2: '@',
  Digit3: '#',
  Digit4: '$',
  Digit5: '%',
  Digit6: '^',
  Digit7: '&',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'BACKSPACE',
  Tab: 'TAB',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '{',
  BracketRight: '}',
  Backslash: '|',
  Delete: 'DEL',
  CapsLock: 'CAPSLOCK',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ':',
  Quote: '"',
  Enter: 'ENTER',
  ShiftLeft: 'SHIFT',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: '<',
  Period: '>',
  Slash: '?',
  ArrowUp: '\u2191',
  ShiftRight: 'SHIFT',
  ControlLeft: 'CTRL',
  SwitchLang: 'RUS',
  AltLeft: 'ALT',
  Space: 'SPACE',
  AltRight: 'ALT',
  ArrowLeft: '\u2190',
  ArrowDown: '\u2193',
  ArrowRight: '\u2192',
  ControlRight: 'CTRL',
};

const shiftLowState: KeysData = {
  Backquote: '~',
  Digit1: '!',
  Digit2: '@',
  Digit3: '#',
  Digit4: '$',
  Digit5: '%',
  Digit6: '^',
  Digit7: '&',
  Digit8: '*',
  Digit9: '(',
  Digit0: ')',
  Minus: '_',
  Equal: '+',
  Backspace: 'BACKSPACE',
  Tab: 'TAB',
  KeyQ: 'q',
  KeyW: 'w',
  KeyE: 'e',
  KeyR: 'r',
  KeyT: 't',
  KeyY: 'y',
  KeyU: 'u',
  KeyI: 'i',
  KeyO: 'o',
  KeyP: 'p',
  BracketLeft: '{',
  BracketRight: '}',
  Backslash: '|',
  Delete: 'DEL',
  CapsLock: 'CAPSLOCK',
  KeyA: 'a',
  KeyS: 's',
  KeyD: 'd',
  KeyF: 'f',
  KeyG: 'g',
  KeyH: 'h',
  KeyJ: 'j',
  KeyK: 'k',
  KeyL: 'l',
  Semicolon: ':',
  Quote: '"',
  Enter: 'ENTER',
  ShiftLeft: 'SHIFT',
  KeyZ: 'z',
  KeyX: 'x',
  KeyC: 'c',
  KeyV: 'v',
  KeyB: 'b',
  KeyN: 'n',
  KeyM: 'm',
  Comma: '<',
  Period: '>',
  Slash: '?',
  ArrowUp: '\u2191',
  ShiftRight: 'SHIFT',
  ControlLeft: 'CTRL',
  SwitchLang: 'RUS',
  AltLeft: 'ALT',
  Space: 'SPACE',
  AltRight: 'ALT',
  ArrowLeft: '\u2190',
  ArrowDown: '\u2193',
  ArrowRight: '\u2192',
  ControlRight: 'CTRL',
};

const capsLockState: KeysData = {
  Backquote: '`',
  Digit1: '1',
  Digit2: '2',
  Digit3: '3',
  Digit4: '4',
  Digit5: '5',
  Digit6: '6',
  Digit7: '7',
  Digit8: '8',
  Digit9: '9',
  Digit0: '0',
  Minus: '-',
  Equal: '=',
  Backspace: 'BACKSPACE',
  Tab: 'TAB',
  KeyQ: 'Q',
  KeyW: 'W',
  KeyE: 'E',
  KeyR: 'R',
  KeyT: 'T',
  KeyY: 'Y',
  KeyU: 'U',
  KeyI: 'I',
  KeyO: 'O',
  KeyP: 'P',
  BracketLeft: '[',
  BracketRight: ']',
  Backslash: '\\',
  Delete: 'DEL',
  CapsLock: 'CAPSLOCK',
  KeyA: 'A',
  KeyS: 'S',
  KeyD: 'D',
  KeyF: 'F',
  KeyG: 'G',
  KeyH: 'H',
  KeyJ: 'J',
  KeyK: 'K',
  KeyL: 'L',
  Semicolon: ';',
  Quote: "'",
  Enter: 'ENTER',
  ShiftLeft: 'SHIFT',
  KeyZ: 'Z',
  KeyX: 'X',
  KeyC: 'C',
  KeyV: 'V',
  KeyB: 'B',
  KeyN: 'N',
  KeyM: 'M',
  Comma: ',',
  Period: '.',
  Slash: '/',
  ArrowUp: '\u2191',
  ShiftRight: 'SHIFT',
  ControlLeft: 'CTRL',
  SwitchLang: 'RUS',
  AltLeft: 'ALT',
  Space: 'SPACE',
  AltRight: 'ALT',
  ArrowLeft: '\u2190',
  ArrowDown: '\u2193',
  ArrowRight: '\u2192',
  ControlRight: 'CTRL',
};

export default {
  defaultState, 
  shiftState, 
  shiftLowState,
  capsLockState,
};
