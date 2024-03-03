const navBtn = document.querySelector('.nav__button');
const navMobile = document.querySelector('.nav__link-box');
const footer = document.querySelector('.footer__date');

const controlNav = () => {
    navMobile.classList.toggle('nav__link-box__open');
}

const footerYear = () => {
    const year = (new Date).getFullYear();
    footer.textContent = year;
}

navBtn.addEventListener('click', controlNav);
footerYear();