const navbarNav = document.querySelector(".navbar-nav");
const hambMenu = document.getElementById("hamb-menu");
hambMenu.addEventListener("click", function (e) {
  navbarNav.classList.toggle("aktif");
  e.preventDefault();
  //   e.stopPropagation();
});
document.addEventListener("click", function (e) {
  if (!hambMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("aktif");
  }
});
