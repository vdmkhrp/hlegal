const burgerBtn = document.querySelector(".burger-btn");
const menu = document.querySelector(".header__nav");
const closeBtn = document.querySelector(".close-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

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
