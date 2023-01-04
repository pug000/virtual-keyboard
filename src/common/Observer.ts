type Action<T> = (params: T) => void;

class Observer<ListenerType> {
  private actions: Action<ListenerType>[];

  constructor() {
    this.actions = [];
  }

  add(observer: Action<ListenerType>) {
    this.actions.push(observer);
  }

  remove(observer: Action<ListenerType>) {
    this.actions = this.actions.filter((action) => action !== observer);
  }

  emit(observer: ListenerType) {
    this.actions.forEach((action) => action(observer));
  }
}

export default Observer;
