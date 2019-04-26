import './less/index.less';

import Card from './components/Card/Card';
import { gotoIndex, incIndex, decIndex } from './stateManagement/actions';



document.body.querySelectorAll('.card-track section.info-card')
  .forEach((e, i) => {
    Card(e, i, "Card");
  });

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