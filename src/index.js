import './sass/main.scss';
// модальное окно
(() => {
  const refs = {
    openModalBtn: document.querySelector('[map-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[map-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('is-open');
  }
})();

const bodyToggleClass = document.querySelector('body');

// мобильное меню
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');

const headerMenu = document.querySelector('.header__menu');

const openMenuMobile = openMenu.addEventListener('click', toggleMenu);
const closeMenuMobile = closeMenu.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  headerMenu.classList.toggle('is-open');
  bodyToggleClass.classList.toggle('is-open');
}

// модальное окно в секции Hero
const openModalHero = document.querySelector('[open-hero-modal]');
const closeModalHero = document.querySelector('[close-hero-modal]');

const heroModal = document.querySelector('.hero__backdrop');

const openModal = openModalHero.addEventListener('click', toggleModalHero);
const closeModal = closeModalHero.addEventListener('click', toggleModalHero);

function toggleModalHero(e) {
  heroModal.classList.toggle('is-hidden');
  bodyToggleClass.classList.toggle('is-open');
}

// модальное окно в Header
const openModalHeader1 = document.querySelector('[open-buy-modal-1]');
const openModalHeader = document.querySelector('[open-buy-modal]');
const closeModalHeader = document.querySelector('[close-buy-modal]');

const headerModal = document.querySelector('.header__backdrop');

const openModalBuy = openModalHeader.addEventListener('click', toggleModalBuy);
const openModalBuy1 = openModalHeader1.addEventListener('click', toggleModalBuy);
const closeModalBuy = closeModalHeader.addEventListener('click', toggleModalBuy);

function toggleModalBuy(e) {
  headerModal.classList.toggle('is-hidden');
  bodyToggleClass.classList.toggle('is-open');
}
