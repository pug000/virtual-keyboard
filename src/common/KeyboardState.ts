import { FunctionalKeysState, KeyState } from '../ts/interfaces';

import keyEn from '../utils/languages/keyEn';
import keyRu from '../utils/languages/keyRu';

import Observer from './Observer';

export default class KeyboardState {
  private functionalKeys: FunctionalKeysState;

  languages: KeyState[];

  constructor(functionalKeys: FunctionalKeysState) {
    this.functionalKeys = functionalKeys;
    this.languages = [keyEn, keyRu];
  }

  change = new Observer<FunctionalKeysState>();

  get data() {
    return this.functionalKeys;
  }

  set data(value: FunctionalKeysState) {
    this.functionalKeys = value;
    this.change.emit(this.functionalKeys);
  }
}
