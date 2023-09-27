const carouselContainer = document.getElementById("carousel");
const slide = document.querySelector(".carousel__img-box");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

// index.html -- carousel functionality
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carouselContainer.scrollLeft += slideWidth;
  console.log("he");
});
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  carouselContainer.scrollLeft -= slideWidth;
});
