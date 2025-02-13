import { MarginValues } from "./margin-position";
import { activeNav } from "./active";

export const eventListeners = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const dots = document.querySelectorAll(".dot");

  right.addEventListener("click", () => {
    const slides = document.querySelector("#slides");
    if (MarginValues.left === -400) {
      MarginValues.left = 600;
    }
    MarginValues.left -= 200;

    console.log(MarginValues.left);

    slides.style.marginLeft = MarginValues.left + "vw";

    activeNav();
  });

  left.addEventListener("click", () => {
    const slides = document.querySelector("#slides");
    if (MarginValues.left === 400) {
      MarginValues.left = -600;
    }
    MarginValues.left += 200;

    slides.style.marginLeft = MarginValues.left + "vw";
    activeNav();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slides = document.querySelector("#slides");
      const imgSlide = document.querySelectorAll(".slides > div");

      dots.forEach((dot, dotsIndex) => {
        dot.classList.remove("current-nav");
        imgSlide[dotsIndex].classList.add("hide");
      });

      MarginValues.imagesPosition.forEach((el) => {
        if (el === MarginValues.left + "vw") {
          dot.classList.add("current-nav");
          imgSlide[index].classList.remove("hide");
        }
      });

      slides.style.marginLeft = MarginValues.imagesPosition[index];
      console.log(MarginValues.left);
    });
  });
};
