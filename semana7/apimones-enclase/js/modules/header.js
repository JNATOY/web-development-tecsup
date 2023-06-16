const header = () => {
    const headerNavMenuIconContainer = document.getElementById('headerNavMenuIconContainer');
    const headerNavMenuCloseIconContainer = document.getElementById('headerNavMenuCloseIconContainer');
    const headerNavMenuLinkList = document.querySelector('.header-nav__menu-link-list');

    const openMenu = () => {
        headerNavMenuLinkList.classList.add('header-nav__menu-link-list--open');
    };

    const closeMenu = () => {
        headerNavMenuLinkList.classList.remove('header-nav__menu-link-list--open');
    };

    headerNavMenuIconContainer.addEventListener('click', openMenu);
    headerNavMenuCloseIconContainer.addEventListener('click', closeMenu);
};

export default header;