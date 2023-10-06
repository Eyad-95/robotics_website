const carouselContainer = document.getElementById("carousel");
const slide = document.querySelector(".carousel__img-box");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const toggleNavButton = document.getElementById("toggle-nav-button");
const navCollapsed = document.getElementById("nav-collapsed");
const navCollapsedNavList = document.getElementById("nav-collapsed__nav-list");

const toggleNavButtonFunc = () => {
  toggleNavButton.classList.toggle("ham-btn--toggled");

  if (toggleNavButton.classList.contains("ham-btn--toggled")) {
    toggleNavButton.style.position = "fixed";
    navCollapsed.style.transform = "translateX(0%)";
    navCollapsedNavList.style.transform = "translateX(0%)";
  } else {
    toggleNavButton.style.position = "absolute";
    navCollapsed.style.transform = "translateX(-100%)";
    navCollapsedNavList.style.transform = "translateX(-100%)";
  }
};

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

// toggle of hambtn
toggleNavButton.addEventListener("click", toggleNavButtonFunc);
