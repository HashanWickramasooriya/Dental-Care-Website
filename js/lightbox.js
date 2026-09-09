(function () {
    const items = Array.from(document.querySelectorAll('.gallery-item[data-full]'));
    const lightbox = document.getElementById('galleryLightbox');
    if (!items.length || !lightbox) return;

    const image = document.getElementById('galleryLightboxImage');
    const caption = document.getElementById('galleryLightboxCaption');
    const closeBtn = lightbox.querySelector('.rd-lightbox-close');
    const prevBtn = lightbox.querySelector('.rd-lightbox-prev');
    const nextBtn = lightbox.querySelector('.rd-lightbox-next');
    let currentIndex = 0;
    let lastFocused = null;

    function show(index) {
        currentIndex = (index + items.length) % items.length;
        const item = items[currentIndex];
        image.src = item.dataset.full;
        image.alt = item.querySelector('img').alt;
        caption.textContent = item.dataset.caption || '';
    }

    function open(index) {
        lastFocused = document.activeElement;
        show(index);
        lightbox.hidden = false;
        document.body.classList.add('rd-nav-open');
        closeBtn.focus();
    }

    function close() {
        lightbox.hidden = true;
        document.body.classList.remove('rd-nav-open');
        if (lastFocused) lastFocused.focus();
    }

    items.forEach((item, index) => {
        item.addEventListener('click', () => open(index));
    });

    closeBtn.addEventListener('click', close);
    prevBtn.addEventListener('click', () => show(currentIndex - 1));
    nextBtn.addEventListener('click', () => show(currentIndex + 1));

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) close();
    });

    document.addEventListener('keydown', (event) => {
        if (lightbox.hidden) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowRight') show(currentIndex + 1);
        if (event.key === 'ArrowLeft') show(currentIndex - 1);
    });
})();
