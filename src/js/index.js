import style from "../css/style.css";

const left = document.querySelector("#left");
const right = document.querySelector("#right");

let px = 0;

left.addEventListener("click", () => {
  const slides = document.querySelector("#slides");

  if (px === -600) {
    px = 0;
  }

  slides.style.marginLeft = px + "px";
  px -= 150;
});

right.addEventListener("click", () => {
  const slides = document.querySelector("#slides");

  if (px === 0) {
    px = -600;
  }
  px += 150;

  slides.style.marginLeft = px + "px";
});

setInterval(() => {
  const slides = document.querySelector("#slides");

  if (px === -600) {
    px = 0;
  }

  slides.style.marginLeft = px + "px";
  px -= 150;
}, 5000);
