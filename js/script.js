let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".team-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});

const images = [
    'before-after-image1.jpg',
    'before-after-image2.jpg',
    'before-after-image3.jpg',
    'before-after-image4.jpg',
    'before-after-image5.jpg'
];

let currentImageIndex = 0;
const sliderImage = document.getElementById('slider-image');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const serviceItems = document.querySelectorAll('.services-list li');

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    sliderImage.src = images[currentImageIndex];
});

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    sliderImage.src = images[currentImageIndex];
});

// Display specific image when clicking on a service list item
serviceItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        const imagePath = item.getAttribute('data-image');
        sliderImage.src = imagePath;
        currentImageIndex = images.indexOf(imagePath);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const contactCard = document.querySelector(".contact-card");

    contactCard.addEventListener("mouseenter", () => {
        contactCard.classList.add("bounce");
    });

    contactCard.addEventListener("mouseleave", () => {
        contactCard.classList.remove("bounce");
    });
});