import defaultFunctionalKeysState from './utils/constants';

import App from './components/App';

import './style.scss';


window.onload = () => {
  new App(document.body, defaultFunctionalKeysState);
};
