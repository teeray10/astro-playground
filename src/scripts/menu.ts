document.querySelector('.hamburger')?.addEventListener('click', () => {
    console.log('Hamburger clicked!');
    document.querySelector('.nav-links')?.classList.toggle('expanded');
});