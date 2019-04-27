import { store } from '../../stateManagement/store';

export default class SlideTracker {
  constructor (element) {
    this.element = element;
    this.type = 'SlideTracker';
    this.currentIndex = null;

    this.slideDots = this.element.querySelectorAll('.tracker-list li.tracker-dot');
    this.buttons = this.element.querySelectorAll('button.tracker-button');

    this.subscription = store.subscribe(state => {
      const { currentIndex: newIndex } = state;5
      
      if (this.currentIndex === newIndex) return;
      
      this.slideDots.forEach((e, i) => {
        if (i === newIndex) e.classList.add('active-dot');
        if (i === this.currentIndex) e.classList.remove('active-dot');
      });

      this.currentIndex = newIndex;
    });
  }
}