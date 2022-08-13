
window.addEventListener('hashchange', () => {
  const header = document.getElementById('header');
  const main = document.getElementById('main');
  const body = document.getElementById('page__body');

  if (window.location.hash === '#side-menu') {
    header.classList.add('header--blur');
    main.classList.add('header--blur');
    body.classList.add('page__body--with-menu');
  } else {
    header.classList.remove('header--blur');
    main.classList.remove('header--blur');
    body.classList.remove('page__body--with-menu');
  }
});
