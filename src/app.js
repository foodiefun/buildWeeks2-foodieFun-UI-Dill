import './less/index.less';

import Card from './components/Card/Card';
import { BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

const GOTO_INDEX = 'GOTO_INDEX';
const INC_INDEX = 'INC_INDEX';
const DEC_INDEX = 'DEC_INDEX';

const action$ = new BehaviorSubject();

const initialState = {
  currentIndex: 0,
  slideCount: 6
};

const reducer  = (state, action = {type: null }) => {
  const { currentIndex, slideCount } = state;
  switch (action.type) {
    case GOTO_INDEX:
      return {
        ...state,
        currentIndex: action.payload
      };
    case INC_INDEX:
      return {
        ...state,
        currentIndex: currentIndex >= slideCount - 1 ? 0 : currentIndex + 1
      }
    case DEC_INDEX:
      return {
        ...state,
        currentIndex: currentIndex <= 0 ? slideCount - 1 : currentIndex - 1
      }
    default:
      console.log(`'${action.type}' action type not found`);
      return state;
  }
};

const store$ = action$.pipe(
  scan(reducer, initialState),
);

action$.subscribe(x => console.log(x));
store$.subscribe(state => {
  console.group('STATE');
  console.log(state);
  console.groupEnd();
});

const actionDispatcher = func => (...args) => {
  action$.next(func(...args));
};

const gotoIndex = actionDispatcher(payload => ({  
    type: GOTO_INDEX,
    payload
}));

const incIndex = actionDispatcher(() => ({
  type: INC_INDEX
}));

const decIndex = actionDispatcher(() => ({
  type: DEC_INDEX
}));

gotoIndex(2);

decIndex();
decIndex();
decIndex();
decIndex();
decIndex();

incIndex();
incIndex();
incIndex();
incIndex();
incIndex();
incIndex();
incIndex();
incIndex();
