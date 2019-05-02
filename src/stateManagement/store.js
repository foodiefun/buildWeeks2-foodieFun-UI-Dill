import { BehaviorSubject, interval } from 'rxjs';
import { scan, throttle } from 'rxjs/operators';
import { reducer } from './reducers';

const initialState = {
  currentIndex: -1,
  slideCount: 6
};

const action = new BehaviorSubject({
  type: 'INC_INDEX'
});

export const store = action.pipe(
  throttle(() => interval(800)),
  scan(reducer, initialState)
);


export const dispatch = func => (...args) => {
  action.next(func(...args));
};

store.subscribe(state => {
  console.group('STATE - store.js');
  console.log(state);
  console.groupEnd();
});