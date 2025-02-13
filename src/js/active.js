import { MarginValues } from "./margin-position";

export const activeNav = () => {
  const dots = document.querySelectorAll(".dot");
  const imgSlide = document.querySelectorAll(".slides > div");

  dots.forEach((dot, index) => {
    dot.classList.remove("current-nav");
    imgSlide[index].classList.add("hide");
  });

  MarginValues.imagesPosition.forEach((el, index) => {
    if (el === MarginValues.left + "vw") {
      dots[index].classList.add("current-nav");
      imgSlide[index].classList.remove("hide");
    }
  });
};
