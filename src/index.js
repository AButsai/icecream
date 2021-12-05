import './sass/main.scss';

(() => {
  const menuBtnRef = document.querySelector('.menu-button');
  const mobileMenuRef = document.querySelector('.header__menu');
  const mobileMenuOverflow = document.querySelector('body');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    mobileMenuOverflow.classList.toggle('menu-open');
  });
})();
