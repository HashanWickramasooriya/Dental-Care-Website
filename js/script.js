let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

const closeMobileMenu = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
};

menu.onclick = () => {
    const isOpen = navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
    menu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
};

window.onscroll = closeMobileMenu;

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMobileMenu();
});


const teamSliderEl = document.querySelector(".team-slider");
if (teamSliderEl && window.Swiper) {
    new Swiper(teamSliderEl, {
        loop: true,
        grabCursor: true,
        spaceBetween: 20,
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
        },
    });
}