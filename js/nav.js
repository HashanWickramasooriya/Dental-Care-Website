document.querySelectorAll('.navbar').forEach((navbar) => {
    const toggle = navbar.querySelector('.nav-toggle');
    const menu = navbar.querySelector('ul');
    if (!toggle || !menu) return;

    let backdrop = document.querySelector('.rd-backdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.className = 'rd-backdrop';
        document.body.appendChild(backdrop);
    }

    const openMenu = () => {
        menu.classList.add('active');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        document.body.classList.add('rd-nav-open');
    };

    const closeMenu = () => {
        menu.classList.remove('active');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('rd-nav-open');
    };

    toggle.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    backdrop.addEventListener('click', closeMenu);

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
});
