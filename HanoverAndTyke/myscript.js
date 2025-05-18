const iconMenu = document.querySelector('.icon-menu');
const navlinks = document.querySelector('.nav-links');

//svg icon for menu open and close
const menuIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify">
      <path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x">
      <path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>`;

// Event listener for menu icon click
iconMenu.addEventListener('click', () => {
  navlinks.classList.toggle('active');
});
const toggleMenuIcon = () => {

  const isMenuOpen = iconMenu.classList.contains("open");
  if (isMenuOpen) {
    iconMenu.classList.remove("open");
    iconMenu.innerHTML = menuIcon;
  }
  else {
    iconMenu.classList.add("open");
    iconMenu.innerHTML = closeIcon;
  }
};

