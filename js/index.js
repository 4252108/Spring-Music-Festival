document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.getElementById("hamburgerMenu");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuButton.classList.toggle("active");
  });
});
