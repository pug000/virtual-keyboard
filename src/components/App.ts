import { FunctionalKeysState } from '../ts/interfaces';

import Background from './Background';
import Container from './Container';

export default class App {
  constructor(readonly body: HTMLElement, functionalKeysState: FunctionalKeysState) {
    this.body = body;
    new Background(this.body);
    new Container(this.body, functionalKeysState);
  }
}
