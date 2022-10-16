const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

const DIRECTION_ENUM = {
  UP: "up",
  DOWN: "down",
};
let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide(DIRECTION_ENUM.UP));
downButton.addEventListener("click", () => changeSlide(DIRECTION_ENUM.DOWN));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  
  if (direction === DIRECTION_ENUM.UP) {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === DIRECTION_ENUM.DOWN) {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translatey(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translatey(${
    activeSlideIndex * sliderHeight
  }px)`;
};
