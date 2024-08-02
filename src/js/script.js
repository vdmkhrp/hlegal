// const ShowPopup = document.querySelector(".service-entry__block-button");
// const HidePopup = document.querySelector(".popup__close-btn");

// ShowPopup.addEventListener("click", () => {
//   document.body.style.overflow = 'hidden';
// });

// HidePopup.addEventListener("click", () => {
//   document.body.style.overflow = 'auto';
// });

const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".close-btn");

burgerBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
