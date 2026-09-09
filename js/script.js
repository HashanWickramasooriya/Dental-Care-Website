let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

let backdrop = document.querySelector('.rd-backdrop');
if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'rd-backdrop';
    document.body.appendChild(backdrop);
}

const closeMobileMenu = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    menu.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('rd-nav-open');
};

menu.onclick = () => {
    const isOpen = navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
    menu.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('rd-nav-open', isOpen);
};

backdrop.addEventListener('click', closeMobileMenu);

navbar.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
});

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