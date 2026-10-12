import "./style.scss";

const swiperCheck = document.querySelector(".swiper");
if (swiperCheck) {
    const swiper = new Swiper(".swiper", {
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
    });
}

const burgerBtn = document.querySelector(".burger__btn");
const menu = document.querySelector(".menu__list");
const logo = document.querySelector(".section__title");

logo.addEventListener("click", function () {
    console.log("click");
});

burgerBtn.addEventListener("click", () => {
    menu.classList.toggle("menu__list-show");
    console.log("lick");
});
