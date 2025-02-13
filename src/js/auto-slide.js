import { MarginValues } from "./margin-position";
import { activeNav } from "./active";

export const autoSlide = () => {
  setInterval(() => {
    const slides = document.querySelector("#slides");
    if (MarginValues.left === -400) {
      MarginValues.left = 600;
    }

    MarginValues.left -= 200;
    slides.style.marginLeft = MarginValues.left + "vw";

    if (MarginValues.left <= -600) {
      MarginValues.left = 600;
    }
    console.log(MarginValues.left);

    activeNav();
  }, 5000);
};
