const cursor = document.querySelector('.cursor');
const mainPage = document.querySelector('.main-page');
const loadingPage = document.querySelector('.loading-page');
const loadingPageImage = document.querySelector('.loading-page img');
const loadingPageCopyright = document.querySelector('.loading-page .copyright');
const burger = document.querySelector('.burger');

/* THIS IS CUSTOM CURSOR MIX-BLEND HOVERING EFFECT */
document.addEventListener('DOMContentLoaded', function (event) {
  let cursor = document.querySelector('.cursor');
  let links = document.querySelectorAll('a');
  let initCursor = false;

  for (let i = 0; i < links.length; i++) {
    let selfLink = links[i];

    selfLink.addEventListener('mouseover', function () {
      cursor.classList.add('custom-cursor--link');
    });
    selfLink.addEventListener('mouseout', function () {
      cursor.classList.remove('custom-cursor--link');
    });
  }

  window.onmousemove = function (e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    if (!initCursor) {
      TweenLite.to(cursor, 0.3, {
        opacity: 1,
      });
      initCursor = true;
    }

    TweenLite.to(cursor, 0, {
      top: mouseY + 'px',
      left: mouseX + 'px',
    });
  };

  window.onmouseout = function (e) {
    TweenLite.to(cursor, 0.3, {
      opacity: 0,
    });
    initCursor = false;
  };
});

const init = () => {
  let counter = 0;
  let size = 160;
  const container = document.querySelector('.counter');
  const values = document.querySelectorAll('.counter p');
  mainPage.style.display = 'none';

  interval = setInterval(() => {
    if (counter === values.length - 1) {
      loadingPage.style.height = '0px';
      mainPage.style.display = 'block';
    } else {
      counter++;
      container.style.transform = 'translateY(' + -size * counter + 'px';
    }
  }, 500);
};
window.addEventListener('load', init);

/* hamburger menu click */

burger.addEventListener('click', () => {
  burger.classList.toggle('toggle');
  document.querySelector('nav').classList.toggle('show-nav');
  document.querySelector('.logo').classList.toggle('white-color');
  document.querySelector('.cart').classList.toggle('white-color');
  document.querySelector('nav h2').classList.toggle('before-expand');
  document.querySelector('html').classList.toggle('html-overflow-hidden');
});

/* ink-mode fixed or not by scrolling */

let lastScrollTop = 0;

window.addEventListener(
  'scroll',
  function () {
    const inkMode = document.querySelector('.ink-mode');
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      inkMode.classList.remove('fixed-ink');
    } else {
      inkMode.classList.add('fixed-ink');
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
