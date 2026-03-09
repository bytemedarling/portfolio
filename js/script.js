/*Hamburger Menu */
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

/* Enter Button */
document.getElementById("enterBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
