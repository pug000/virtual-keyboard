import Keys from './Keys';

export default class Language extends Keys {
  input = () => {
    const { state } = this;
    state.data = {
      ...state.data,
      langIndex: (state.data.langIndex + 1) % state.languages.length,
    };
  };
}
