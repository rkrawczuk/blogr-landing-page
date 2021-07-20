const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
      menuOpen.classList.toggle("hide-icon");
      menuClose.classList.toggle("hide-icon");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

// DROPDOWN
const dropdown = document.getElementById("dropdown");
const dropdownMenu = document.getElementById("dropdown-menu");
const dropdownArrow = document.querySelector(".dropdown__icon");

if (dropdown) {
  dropdown.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show-dropdown");
    dropdownArrow.classList.toggle("rotate-180");
  });
}
