import style from "../css/style.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

const images = [image1, image2, image4, image3, image4];

function render() {
  const wrapper = document.querySelectorAll(".slide");
  wrapper.forEach((img) => {
    img.remove();
  });

  const slides = document.querySelector(".slides");
  images.forEach((img, index) => {
    if (index === 0) {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("slide");
      const image = document.createElement("img");
      image.src = img;

      imageWrapper.appendChild(image);
      slides.appendChild(imageWrapper);
    }
  });
}

render();

const left = document.querySelector("#left");
left.addEventListener("click", () => {
  const firstImg = images.shift();
  images.push(firstImg);

  render();
});

const right = document.querySelector("#right");

right.addEventListener("click", () => {
  const lastImg = images.pop();
  images.unshift(lastImg);
  render();
});
