const fixedNav = document.querySelector('.mini-nav');
const footer = document.querySelector('footer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  if (scrollY >= 2600) {
    fixedNav.classList.add('hide-fixed-nav');
  } else if (
    scrollY >= 2350 &&
    window.matchMedia('(max-width:1024px)').matches
  ) {
    fixedNav.classList.add('hide-fixed-nav');
  } else {
    fixedNav.classList.remove('hide-fixed-nav');
  }
});
