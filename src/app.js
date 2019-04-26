import './less/index.less';

import Card from './components/Card/Card';
//import {  } from './stateManagement/actions';
import { store } from './stateManagement/store';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';




// incIndex();
// incIndex();
// incIndex();

// setInterval(() => {
//   incIndex();
// }, 2000);

new Card({}, 1);

store.subscribe(state => {
  console.group('STATE - app.js');
  console.log(state);
  console.groupEnd();
});

// gotoIndex(3);
// gotoIndex(4);
// gotoIndex(5);

incIndex();
decIndex();