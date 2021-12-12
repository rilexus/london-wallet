import EventEmitter from 'events';
import { StateActionTypesEnum } from './StateActionTypes.enum';

class State extends EventEmitter {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private state;

  constructor(state: any) {
    super();
    this.state = state;
  }

  setState(state: any) {
    if (typeof state === 'function') {
      this.state = state(this.state);
    } else {
      this.state = state;
    }
    this.emit(StateActionTypesEnum.stateChange, this.state);
  }

  getState() {
    return this.state;
  }
}

export { State };
