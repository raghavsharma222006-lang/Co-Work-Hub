const loginLink = document.querySelector(".login-btn");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector("nav .ri-menu-3-line");

if (menuIcon && nav) {
  const menuButton = menuIcon.closest("h4");
  menuButton?.setAttribute("role", "button");
  menuButton?.setAttribute("tabindex", "0");
  menuButton?.setAttribute("aria-label", "Open menu");

  const toggleMenu = () => {
    const isOpen = nav.classList.toggle("menu-open");
    menuButton?.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    menuIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";
  };
  menuButton?.addEventListener("click", toggleMenu);
  menuButton?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") { event.preventDefault(); toggleMenu(); }
  });
}

if (localStorage.getItem("coworkHubLoggedIn") === "true") {
  if (loginLink) {
    loginLink.textContent = "Logout";
    loginLink.href = "#";
    loginLink.addEventListener("click", (event) => {
      event.preventDefault();
      localStorage.removeItem("coworkHubLoggedIn");
      window.location.href = "../homepage/index.html";
    });
  }
}
