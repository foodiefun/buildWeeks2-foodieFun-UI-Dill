import { store } from '../../stateManagement/store';
import { incIndex } from '../../stateManagement/actions';

export default class Card {
  constructor (element, index) {
    this.element = element;
    this.index = index;
    this.currentIndex = null;
    this.subscription = store.subscribe((state) => {
      console.group(`CARD ${this.index}`);
      console.log(state);

      const {currentIndex: newIndex} = state;

      if (this.currentIndex === newIndex) { // Looks like something broke, update local state, but don't do anything else.
        this.currentIndex = newIndex;
        console.groupEnd();
        return; 
      }

      if (this.index === newIndex) { // Newly selected, set up and execute in-transition.
        this.slideIn();
      }
      
      if (this.index === this.currentIndex) { // Already on screen, set up and execute out-transition.
        this.slideOut();
      }

      this.currentIndex = newIndex; // Update local state to test against next time
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