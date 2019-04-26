import Slideable from '../base/Slideable';

function slideOut () {
  console.log('leaving');
  this.element.classList.add('hidden');
}

function slideIn () {
  console.log('entering');
  this.element.classList.remove('hidden');
}

export default (element, index, type) => {
  return new Slideable(element, index, slideIn, slideOut, type);
}