interface FunctionalKeysState {
  langIndex: number,
  capsLock: boolean,
  shift: boolean,
  alt: boolean,
  ctrl: boolean,
}

interface KeysData {
  [key: string]: string;
}

interface KeyState {
  defaultState: KeysData;
  shiftState: KeysData;
  shiftLowState: KeysData;
  capsLockState: KeysData;
}

export type { FunctionalKeysState, KeysData, KeyState };
