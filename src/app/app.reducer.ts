// counter.ts
import { ActionReducer, Action } from '@ngrx/store';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
          console.log(`INCREMENT ${state} + 1`);
          return state + 1;

        case DECREMENT:
          console.log(`DECREMENT ${state} - 1`);
          return state - 1;

        case RESET:
          console.log(`RESET ${state} => 0`);
          return 0;

        default:
            return state;
    }
}
