import './less/index.less';

import { fromEvent, interval, from } from 'rxjs';
import { throttle } from 'rxjs/operators';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TweenMax } from 'gsap/TweenMax';

import Card from './components/Card/Card';
import ImageSlide from './components/ImageSlide/ImageSlide';
import SlideTracker from './components/SlideTracker/SlideTracker';
import { incIndex } from './stateManagement/actions';


// The if statements are basically just a hack to prevent console errors when the about page is loaded.
const cards = document.body.querySelectorAll('.card-track section.info-card');
if (cards) {
  cards.forEach((e, i) => {
    Card(e, i, "Card");
  });
}


const imageContainer = document.body.querySelectorAll('section.image-container img');
if (imageContainer) {
  imageContainer.forEach((e, i) => {
    ImageSlide(e, i, "ImageSlide");
  });
}

const slideTracker = document.body.querySelector('.slide-tracker');
if (slideTracker) {
  new SlideTracker(slideTracker);
}

if (cards && imageContainer) {
  const autoSlide = setInterval(() => {
    incIndex();
  }, 12000);
  document.addEventListener('click', () => {
    clearInterval(autoSlide);
  });
}

const nav = document.body.querySelector('nav');

const navTray = document.body.querySelector('ul.nav-tray');
const trayBacker = CSSRulePlugin.getRule('.nav-tray:before');

const trayHandler = fromEvent(nav, 'click').pipe(
  throttle(() => interval(500))
);

trayHandler.subscribe(() => {
  if (navTray.classList.contains('hidden')) {
    openTray();
  } else {
    closeTray();
  }
});

const trayClose = fromEvent(navTray, 'click').pipe(
  throttle(() => interval(500))
);

trayClose.subscribe((e) => {
  const { srcElement, offsetX, offsetY } = e;
  if (offsetX < 0 || offsetX > srcElement.offsetWidth || offsetY < 0 || offsetY > srcElement.offsetHeight) {
    closeTray();
  }
});

const openTray = () => {
  navTray.classList.remove('hidden');
  TweenMax.from(navTray, 0.5, {
    x: '-150%',
    clearProps: 'all'
  });
  TweenMax.fromTo(trayBacker, 0.3, {
    background: 'rgba(0, 0, 0, 0)',
  }, {
    background: 'rgba(0, 0, 0, 0.3)'
  });
}

const closeTray = () => {
  TweenMax.to(navTray, 0.5, {
    x: '-150%',
    clearProps: 'all',
    onComplete: () => {
      navTray.classList.add('hidden');
    }
  });
  TweenMax.to(trayBacker, 0.3, {
    background: 'rgba(0, 0, 0, 0)',
    clearProps: 'all'
  });
}
