import { MarginValues } from "./margin-position";

export const activeNav = () => {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("current-nav");
  });

  MarginValues.imagesPosition.forEach((el, index) => {
    if (el === MarginValues.left + "vw") {
      dots[index].classList.add("current-nav");
    }
  });
};
