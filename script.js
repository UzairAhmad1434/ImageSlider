let imgContainer = document.querySelector(".image-container");
let leftBtn = document.getElementById("left");
let rightBtn = document.getElementById("right");

const imgContainerWidth = imgContainer.scrollWidth;

leftBtn.addEventListener("click", () => {
  const imgMovingPixel = imgContainerWidth / 10;
  imgContainer.scrollBy(-imgMovingPixel, 0);
});

rightBtn.addEventListener("click", () => {
  const imgMovingPixel = imgContainerWidth / 10;
  imgContainer.scrollBy(imgMovingPixel, 0);
});
