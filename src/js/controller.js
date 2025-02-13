import { MarginValues } from "./margin-position";
import { activeNav } from "./active";

export const eventListeners = () => {
  const left = document.querySelector("#left");
  const right = document.querySelector("#right");
  const dots = document.querySelectorAll(".dot");

  left.addEventListener("click", () => {
    const slides = document.querySelector("#slides");
    if (MarginValues.left === -400) {
      MarginValues.left = 600;
    }
    MarginValues.left -= 200;
    slides.style.marginLeft = MarginValues.left + "vw";
    activeNav();
  });

  right.addEventListener("click", () => {
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
      MarginValues.left = MarginValues.imagesPosition[index]
        .split("")
        .filter((el) => {
          return !isNaN(el) || el === "-";
        })
        .join("");
      slides.style.marginLeft = MarginValues.left + "vw";
      activeNav();
    });
  });
};
