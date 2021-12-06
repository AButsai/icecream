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
const buttonMenu = document.querySelector('.header__menu');
const bodyToggleClass = document.querySelector('body');

const openMenuMobile = openMenu.addEventListener('click', toggleMenu);
const closeMenuMobile = closeMenu.addEventListener('click', toggleMenu);

function toggleMenu(e) {
  buttonMenu.classList.toggle('is-open');
  bodyToggleClass.classList.toggle('is-open');
}
