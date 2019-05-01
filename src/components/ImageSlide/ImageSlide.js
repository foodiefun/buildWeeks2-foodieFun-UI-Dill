import { TweenMax } from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const dir = (myIndex < newIndex) ? -50 : 150;
  
  //this.element.style.cssText = 'position: absolute';
  TweenMax.to(this.element, 1, {
    x: `${dir}%`,
    clearProps: 'all',
    onComplete: () => {
      this.element.classList.add('hidden');
    }
  });

  console.log('leaving');
}

function slideIn (myIndex, oldIndex) {
  if (oldIndex === null) return; // No animation on first page load.

  const dir = (myIndex < oldIndex) ? -50 : 150;
  
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 1, {
    x: `${dir}%`,
    clearProps: 'all',
  });

  console.log('entering');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}