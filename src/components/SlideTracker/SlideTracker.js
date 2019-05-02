import { TweenMax } from 'gsap/TweenMax';
import { TimelineMax } from 'gsap/TimelineMax';
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
      
      if (this.currentIndex === newIndex || this.currentIndex === null) {
        this.currentIndex = newIndex;
        return;
      };
      
      const target = this.element.querySelector(`.tracker-list li.tracker-dot[data-index="${newIndex}"]`);
      const backer = this.element.querySelector('.backer-dot');

      const offsetScale = backer.getBoundingClientRect().width / backer.offsetWidth;
      const dir = (window.innerWidth > 1250) ? 'X' : 'Y';
      const time = 0.65;

      const tl = new TimelineMax();
      tl.to(backer, time/3, {
        borderWidth: 0,
        ease: Power1.easeIn
      });
      tl.to(backer, time, {
        left: `${target.offsetLeft}px`,
        top: `${target.offsetTop}px`,
        ease: Elastic.easeOut.config(0.3, 0.25)
      });
      tl.to(backer, time/2, {
        [`scale${dir}`]: 0.5 * offsetScale,
        delay: -time,
      });
      tl.to(backer, time/2, {
        [`scale${dir}`]: 1.0 * offsetScale,
        delay: -time/2,
        clearProps: 'scale'
      });
      tl.to(backer, time/4, {
        borderWidth: 8,
        clearProps: 'borderWidth'
      });

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