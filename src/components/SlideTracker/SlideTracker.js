import { store } from '../../stateManagement/store';
import { incIndex, decIndex } from '../../stateManagement/actions';

export default class SlideTracker {
  constructor (element) {
    this.element = element;
    this.type = 'SlideTracker';
    this.currentIndex = null;

    this.slideDots = this.element.querySelectorAll('.tracker-list li.tracker-dot');

    this.buttonInc = this.element.querySelector('#tracker-inc');
    this.buttonDec = this.element.querySelector('#tracker-dec');

    this.subscription = store.subscribe(state => {
      const { currentIndex: newIndex } = state;
      
      if (this.currentIndex === newIndex) return;

      this.slideDots.forEach((e, i) => {
        if (i === newIndex) e.classList.add('active-dot');
        if (i === this.currentIndex) e.classList.remove('active-dot');
      });

      console.group(this.type);
      console.log('moving to', newIndex);
      console.groupEnd();
      
      this.currentIndex = newIndex;
    });

    this.buttonInc.addEventListener('click', incIndex);
    this.buttonDec.addEventListener('click', decIndex);
  }
}