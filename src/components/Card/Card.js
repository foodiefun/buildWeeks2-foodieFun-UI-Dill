import { TweenMax } from 'gsap/TweenMax';
import Slideable from '../base/Slideable';

function slideOut (myIndex, newIndex) {
  const axis = (window.innerWidth < 1250) ? 'x' : 'y';
  const dir = (myIndex < newIndex) ? -250 : 250;

  this.element.style.cssText = 'position: absolute';
  TweenMax.to(this.element, 1, {
    [axis]: `${dir}%`,
    clearProps: 'all',
    onComplete: () => {
      this.element.classList.add('hidden');
    }
  });
  console.log('leaving');
}

function slideIn (myIndex, oldIndex) {
  if (oldIndex === null) return; // No animation on first page load.

  const axis = (window.innerWidth < 1250) ? 'x' : 'y';
  const dir = (myIndex < oldIndex) ? -250 : 250;
  
  this.element.classList.remove('hidden');
  TweenMax.from(this.element, 1, {
    [axis]: `${dir}%`,
    clearProps: 'all'
  });

  console.log('entering');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}
