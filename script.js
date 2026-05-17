const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".desktop-nav a, .header-cta");

function updateHeader() {
  header.classList.toggle("is-scrolled", header.classList.contains("project-header") || window.scrollY > 12);
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  header.classList.remove("menu-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
