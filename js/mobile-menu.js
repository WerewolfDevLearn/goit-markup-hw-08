;(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-mob-menu-open]'),
    closeMenuBtn: document.querySelector('[data-mob-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  }

  const toggleMenu = () => {
    const isMenuOpen = refs.openMenuBtn.getAttribute('aria-expanded') === 'true' || false
    refs.openMenuBtn.setAttribute('aria-expanded', !isMenuOpen)
    refs.menu.classList.toggle('is-open')

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll'
    bodyScrollLock[scrollLockMethod](document.body)
  }

  refs.openMenuBtn.addEventListener('click', toggleMenu)
  refs.closeMenuBtn.addEventListener('click', toggleMenu)
})()
