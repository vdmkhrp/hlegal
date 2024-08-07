const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".close-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
const swiperPag = document.querySelectorAll(".swiper-pagination__btn");
const cardItemLinks = document.querySelectorAll(".teams__card-item-link");
const langBtn = document.querySelectorAll(".header__lang-btn");

burgerBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

tabsItems.forEach((item) => {
  item.addEventListener("click", () => {
    tabsItems.forEach((el) => el.classList.remove("tabs__item--active"));
    item.classList.add("tabs__item--active");
  });
});

swiperPag.forEach((item) => {
  item.addEventListener("click", () => {
    swiperPag.forEach((el) => el.classList.remove("swiper-pagination__btn--active"));
    item.classList.add("swiper-pagination__btn--active");
  });
});

langBtn.forEach((item) => {
  item.addEventListener("click", () => {
    langBtn.forEach((el) => el.classList.remove("header__lang-btn--active"));
    item.classList.add("header__lang-btn--active");
  });
});
