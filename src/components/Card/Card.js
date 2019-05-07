import { TweenMax } from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const axis = (window.innerWidth < 1250) ? 'x' : 'y';
  const dir = (myIndex < newIndex) ? -250 : 250;

  // No bounces on out-transition.
  this.element.style.cssText = 'position: absolute';
  TweenMax.to(this.element, 0.8, {
    [axis]: `${dir}%`,
    ease: Power2.easeOut,
    clearProps: 'all',
    onComplete: () => {
      this.element.classList.add('hidden');
    }
  });
}

function slideIn (myIndex, oldIndex) {
  if (oldIndex === null) return; // No animation on first page load.

  const axis = (window.innerWidth < 1250) ? 'x' : 'y';
  const dir = (myIndex < oldIndex) ? '-' : '';
  
  // Animate the base card
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 1, {
    [axis]: `${dir}200%`,
    ease: Elastic.easeOut.config(0.4, 0.3),
    clearProps: 'all'
  });

  // Allow the backer-card to bounce slightly, relative to parent.
  TweenMax.from(this.element.querySelector('.backer-card'), 1.2, {
    [axis]: `${dir}100%`,
    ease: Elastic.easeOut.config(0.8, 0.6),
    clearProps: 'all'
  });

}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}
