const addToggleBurger = () => {
  const navMain = document.querySelector('.main-nav');
  const headerToggle = document.querySelector('.main-header__toggle');

  navMain.classList.remove('main-nav--nojs');
  headerToggle.classList.remove('main-header__toggle--nojs');

  headerToggle.addEventListener('click', () => {
    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close');
      navMain.classList.add('main-nav--open');
      headerToggle.classList.remove('main-header__toggle--close');
      headerToggle.classList.add('main-header__toggle--open');
    } else {
      navMain.classList.add('main-nav--close');
      navMain.classList.remove('main-nav--open');
      headerToggle.classList.remove('main-header__toggle--open');
      headerToggle.classList.add('main-header__toggle--close');
    }
  });
};

export { addToggleBurger };
