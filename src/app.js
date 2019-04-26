import './less/index.less';

import Card from './components/Card/Card';
import { store } from './stateManagement/store';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';



document.body.querySelectorAll('.info-card')
  .forEach((e, i) => {
    new Card(e, i);
  });


//new Card({}, 1);

// store.subscribe(state => {
//   console.group('STATE - app.js');
//   console.log(state);
//   console.groupEnd();
// });

// gotoIndex(3);
// gotoIndex(4);
// gotoIndex(5);

// incIndex();
// decIndex();

// incIndex();
// incIndex();
// incIndex();
// decIndex();

// setInterval(() => {
//   incIndex();
// }, 1000);

// setInterval(() => {
//   decIndex();
// }, 2000);

// setTimeout(() => {
//   gotoIndex(4);
// }, 2500);

// setTimeout(() => {
//   gotoIndex(2);
// }, 4000);

// setTimeout(() => {
//   gotoIndex(5);
// }, 6000);