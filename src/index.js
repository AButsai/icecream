import './sass/main.scss';
// модальное окно
(() => {
  const refs = {
    openModalBtn: document.querySelector('[map-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[map-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const openModalHero = document.querySelector('[open-hero-modal]');
const closeModalHero = document.querySelector('[close-hero-modal]');
const headerMenu = document.querySelector('.header__menu');
const bodyToggleClass = document.querySelector('body');
const heroModal = document.querySelector('.hero__backdrop');
const heroModal = document.querySelector('.header__backdrop');

const openMenuMobile = openMenu.addEventListener('click', toggleMenu);
const closeMenuMobile = closeMenu.addEventListener('click', toggleMenu);
const openModal = openModalHero.addEventListener('click', toggleModalHero);
const closeModal = closeModalHero.addEventListener('click', toggleModalHero);

function toggleMenu(e) {
  headerMenu.classList.toggle('is-open');
  bodyToggleClass.classList.toggle('is-open');
}

function toggleModalHero(e) {
  heroModal.classList.toggle('is-hidden');
  bodyToggleClass.classList.toggle('is-open');
}
