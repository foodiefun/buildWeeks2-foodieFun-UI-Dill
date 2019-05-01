import { store } from '../../stateManagement/store';
import { incIndex, decIndex, gotoIndex } from '../../stateManagement/actions';

export default class SlideTracker {
  constructor (element) {
    this.element = element;
    this.type = 'SlideTracker';
    this.currentIndex = null;

    this.slideDots = this.element.querySelectorAll('.tracker-list li.tracker-dot');
    console.log(this.slideDots);

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

    this.element.querySelector('ol.tracker-list')
      .addEventListener('click', e => {
        if(e.target.classList.contains('tracker-dot')) {
          gotoIndex(parseInt(e.target.dataset.index));
        }
      });
  }
}