//import { store$ } from '../../stateManagement/store';
//const store = require('../../stateManagement/store');
import { store } from '../../stateManagement/store';
import { incIndex } from '../../stateManagement/actions';

export default class Card {
  constructor (element, index) {
    this.element = element;
    this.index = index;
    this.currentTab = null;
    this.subscription = store.subscribe((val) => {
      console.group(`CARD ${this.index}`);
      console.log(val);
      this.slideOut();
      console.groupEnd();
    });
  }

  slideOut () {
    console.log('leaving');
  }

  slideIn () {
    console.log('entering');
  }
}