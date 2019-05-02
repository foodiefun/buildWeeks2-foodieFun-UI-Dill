import { TweenMax } from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const dir = (myIndex < newIndex) ? -100 : 100;
  
  TweenMax.to(this.element, 0.7, {
    x: `${dir}%`,
    ease: Elastic.easeOut.config(0.4, 0.3),
    clearProps: 'all',
    onComplete: () => {
      this.element.classList.add('hidden');
    }
  });
}

function slideIn (myIndex, oldIndex) {
  if (oldIndex === null) return; // No animation on first page load.

  const dir = (myIndex < oldIndex) ? -100 : 100;
  
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 0.7, {
    x: `${dir}%`,
    ease: Elastic.easeOut.config(0.4, 0.3),
    clearProps: 'all'
  });
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}