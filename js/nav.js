document.querySelectorAll('.navbar').forEach((navbar) => {
    const toggle = navbar.querySelector('.nav-toggle');
    const menu = navbar.querySelector('ul');
    if (!toggle || !menu) return;

    const closeMenu = () => {
        menu.classList.remove('active');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.classList.toggle('open', isOpen);
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
});
