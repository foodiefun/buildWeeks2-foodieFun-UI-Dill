import { store } from '../../stateManagement/store';

export default class Slideable {
  constructor (element, index, slideIn, slideOut, type) {
    this.element = element;
    this.index = index;
    this.type = type; // Just a string to make the logs more verbose

    this.currentIndex = null;

    this.slideIn = slideIn;
    this.slideOut = slideOut;

    this.subscription = store.subscribe((state) => {
      const {currentIndex: newIndex} = state;

      if (this.currentIndex === newIndex) { // Looks like something broke, update local state, but don't do anything else.
        this.currentIndex = newIndex;
        return; 
      }

      if (this.index === newIndex) { // Newly selected, set up and execute in-transition.
        console.group(`${this.type} ${this.index}`);
        this.slideIn();
        console.groupEnd();
      }
      if (this.index === this.currentIndex) { // Already on screen, set up and execute out-transition.
        console.group(`${this.type} ${this.index}`);
        this.slideOut();
        console.groupEnd();
      }

      this.currentIndex = newIndex; // Update local state to test against next time
    });
  }
}