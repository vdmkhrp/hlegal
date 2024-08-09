import Glide from "@glidejs/glide";

new Glide(".glide", {
  type: "carousel",
}).mount();

// const burgerBtn = document.querySelector(".burger-btn");
// const menu = document.querySelector(".header__nav");
// const closeBtn = document.querySelector(".close-btn");
// const tabsItems = document.querySelectorAll(".tabs__item");
// const langBtn = document.querySelectorAll(".header__lang-btn");
// const contactBtn = document.querySelector("#contact-btn");
// const contactForm = document.querySelector("#contact-form");

// burgerBtn.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

// closeBtn.addEventListener("click", () => {
//   menu.classList.remove("active");
// });

// tabsItems.forEach((item) => {
//   item.addEventListener("click", () => {
//     tabsItems.forEach((el) => el.classList.remove("tabs__item--active"));
//     item.classList.add("tabs__item--active");
//   });
// });

// langBtn.forEach((item) => {
//   item.addEventListener("click", () => {
//     langBtn.forEach((el) => el.classList.remove("header__lang-btn--active"));
//     item.classList.add("header__lang-btn--active");
//   });
// });

// if (contactForm) {
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     disableBtn(contactBtn);
//     setTimeout(() => {
//       enableBtn(contactBtn);
//     }, 2000);
//   });
// }

// function disableBtn(btn) {
//   btn.classList.add("main-button--loader");
//   btn.disabled = true;
// }

// function enableBtn(btn) {
//   btn.classList.remove("main-button--loader");
//   btn.disabled = false;
// }
