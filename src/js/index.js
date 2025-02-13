import style from "../css/style.css";

class MarginValues {
  static imagesPosition = ["400vw", "200vw", "0vw", "-200vw", "-400vw"];
  static left = 0;
}

function activeNav() {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("current-nav");
  });

  MarginValues.imagesPosition.forEach((el, index) => {
    if (el === MarginValues.left + "vw") {
      dots[index].classList.add("current-nav");
    }
  });
}

const left = document.querySelector("#left");
const right = document.querySelector("#right");

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

setInterval(() => {
  const slides = document.querySelector("#slides");
  if (MarginValues.left === -400) {
    MarginValues.left = 600;
  }

  MarginValues.left -= 200;
  slides.style.marginLeft = MarginValues.left + "vw";
  activeNav();
}, 5000);

const dots = document.querySelectorAll(".dot");
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
