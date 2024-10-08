import Glide from "@glidejs/glide";

const defaultCarouselSettings = {
  type: "carousel",
  classes: {
    nav: {
      active: "swiper-pagination__btn--active",
    },
  },
};

const defaultBreakpoints = {
  1023: {
    peek: 60,
  },
};

const mainPageCarouselSettings = {
  ...defaultCarouselSettings,
  gap: 60,
  breakpoints: {
    ...defaultBreakpoints,
    767: {
      peek: 30,
      gap: 30,
    },
  },
};

const aboutPageCarouselSettings = {
  ...defaultCarouselSettings,
  perView: 4,
  gap: 30,
  breakpoints: {
    ...defaultBreakpoints,
    767: {
      perView: 1,
      peek: 30,
      gap: 30,
    },
  },
};

const disableBtn = (btn) => {
  btn.classList.add("main-button--loader");
  btn.disabled = true;
};

const enableBtn = (btn) => {
  btn.classList.remove("main-button--loader");
  btn.disabled = false;
};

document.addEventListener("DOMContentLoaded", function () {
  const popupOpenButton = document.querySelector(
    ".service-entry__block-button"
  );
  const popupCloseButton = document.querySelector(".popup__close");
  const popup = document.querySelector("#my-popover");
  const expLink = document.querySelectorAll(".experience__link");
  const menuToggleElements = document.querySelectorAll("[data-menu-toggle]");
  const menuCloseElements = document.querySelectorAll("[data-menu-close]");
  const menu = document.querySelector(".header__nav");
  const langBtn = document.querySelectorAll(".header__lang-btn");
  const contactForms = document.querySelectorAll(".contact__form");
  const tabsItems = document.querySelectorAll(".tabs__item");
  const mainPageCarouselElement = document.querySelector(".main-page-carousel");
  const aboutPageCarouselElement = document.querySelector(
    ".about-page-carousel"
  );

  const mainPageCarousel = new Glide(
    ".main-page-carousel",
    mainPageCarouselSettings
  );

  const aboutPageCarousel = new Glide(
    ".about-page-carousel",
    aboutPageCarouselSettings
  );

  if (mainPageCarouselElement) {
    mainPageCarousel.mount();
  }

  if (aboutPageCarouselElement) {
    aboutPageCarousel.mount();
  }

  menuToggleElements.forEach((menuToggle) => {
    menuToggle.addEventListener("click", () => {
      if (menu) {
        menu.classList.toggle("active");
      }
    });
  });

  menuCloseElements.forEach((menuToggle) => {
    menuToggle.addEventListener("click", () => {
      if (menu) {
        menu.classList.remove("active");
      }
    });
  });

  contactForms.forEach((form) => {
    const submitButton = form.querySelector("[type='submit']");

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (submitButton) {
        disableBtn(submitButton);
        setTimeout(() => {
          enableBtn(submitButton);
        }, 2000);
      }
    });
  });

  langBtn.forEach((item) => {
    item.addEventListener("click", () => {
      langBtn.forEach((el) => el.classList.remove("header__lang-btn--active"));
      item.classList.add("header__lang-btn--active");
    });
  });

  tabsItems.forEach((item) => {
    item.addEventListener("click", () => {
      tabsItems.forEach((el) => el.classList.remove("tabs__item--active"));
      item.classList.add("tabs__item--active");
    });
  });

  expLink.forEach((item) => {
    item.addEventListener("click", () => {
      expLink.forEach((el) => el.classList.remove("experience__link--active"));
      item.classList.add("experience__link--active");
    });
  });

  if (popupOpenButton && popupCloseButton && popup) {
    popupOpenButton.addEventListener("click", () => {
      popup.style.display = "block";
    });

    popupCloseButton.addEventListener("click", () => {
      popup.style.display = "none";
    });
  }
});
