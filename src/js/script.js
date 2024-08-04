const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".close-btn");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
