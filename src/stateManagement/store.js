import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';
import { reducer } from './reducers';

const initialState = {
  currentIndex: 0,
  slideCount: 6
};

const action = new BehaviorSubject();

export const store = action.pipe(
  scan(reducer, initialState),
);


export const dispatch = func => (...args) => {
  action.next(func(...args));
};

store.subscribe(state => {
  console.group('STATE - store.js');
  console.log(state);
  console.groupEnd();
});