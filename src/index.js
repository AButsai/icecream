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
const openModalHero = document.querySelector('.open-hero-modal');
const closeModalHero = document.querySelector('.close-hero-modal');

const heroModal = document.querySelector('.hero__backdrop');

const openModal = openModalHero.addEventListener('click', toggleModalHero);
const closeModal = closeModalHero.addEventListener('click', toggleModalHero);

function toggleModalHero(e) {
  heroModal.classList.toggle('is-hidden');
  bodyToggleClass.classList.toggle('is-open');
}

// модальное окно в Header
const openModalHeader1 = document.querySelector('.open-buy-modal-one');
const openModalHeader = document.querySelector('.open-buy-modal');
const closeModalHeader = document.querySelector('.close-buy-modal');

const headerModal = document.querySelector('.header__backdrop');

const openModalBuy = openModalHeader.addEventListener('click', toggleModalBuy);
const openModalBuy1 = openModalHeader1.addEventListener('click', toggleModalBuy);
const closeModalBuy = closeModalHeader.addEventListener('click', toggleModalBuy);

function toggleModalBuy(e) {
  headerModal.classList.toggle('is-hidden');
  bodyToggleClass.classList.toggle('is-open');
}

window.onload = function () {
  const parallax = document.querySelector('.parallax');
  if (parallax) {
    const mainImg = document.querySelector('.hero__img-main--parallax');
    const milkImg = document.querySelector('.hero__img-milk--parallax');
    const girlImg = document.querySelector('.hero__img-girl--parallax');
    const span = document.querySelector('.hero__img-span--parallax');
    const titleBox = document.querySelector('.hero__title-block');

    span.style.cssText = `transform: scale(100%, 100%);`;
    titleBox.style.cssText = `transform: scale(100%, 100%);`;

    const forMainImg = 50;
    const forMilkImg = 40;
    const forGirlImg = 30;

    const speed = 1;

    let positionX = 0,
      positionY = 0;
    let coordXprocent = 0,
      coordYprocent = 0;

    function setMousrParallaxStyle() {
      const distX = coordXprocent - positionX;
      const distY = coordYprocent - positionY;
      positionX = positionX + distX * speed;
      positionY = positionY + distY * speed;
      mainImg.style.cssText = `transform: translate(${positionX / forMainImg}%,${
        positionY / forMainImg
      }%)`;
      milkImg.style.cssText = `transform: translate(${positionX / forMilkImg}%,${
        positionY / forMilkImg
      }%)`;
      girlImg.style.cssText = `transform: translate(${positionX / forGirlImg}%,${
        positionY / forGirlImg
      }%)`;
      requestAnimationFrame(setMousrParallaxStyle);
    }
    setMousrParallaxStyle();
    parallax.addEventListener('mousemove', function (e) {
      const parallaxWidth = parallax.offsetWidth;
      const parallaxHeight = parallax.offsetHeight;
      const coordX = e.pageX - parallaxWidth / 2;
      const coordY = e.pageY - parallaxHeight / 2;
      coordXprocent = (coordX / parallaxWidth) * 100;
      coordYprocent = (coordY / parallaxHeight) * 100;
    });
  }
};
