const carouselContainer = document.getElementById("carousel");
const slide = document.querySelector(".carousel__img-box");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

const toggleNavButton = document.getElementById("toggle-nav-button");
const toggleNavLine = document.querySelector(".ham-btn__line");
const navCollapsed = document.getElementById("nav-collapsed");
const navCollapsedNavList = document.getElementById("nav-collapsed__nav-list");

const toggleNavButtonFunc = () => {
  toggleNavButton.classList.toggle("ham-btn--toggled");

  if (toggleNavButton.classList.contains("ham-btn--toggled")) {
    if (toggleNavButton.classList.contains("helper-class--ham-btn")) {
      toggleNavLine.setAttribute(
        "style",
        "transform: translate(-50%, 0%) rotate(45deg);"
      );
    }
    navCollapsed.style.transform = "translateX(0%)";
    navCollapsedNavList.style.transform = "translateX(0%)";
  } else {
    if (toggleNavButton.classList.contains("helper-class--ham-btn")) {
      toggleNavLine.setAttribute("style", "transform: translate(-50%, -50%);");
    }
    navCollapsed.style.transform = "translateX(-100%)";
    navCollapsedNavList.style.transform = "translateX(-100%)";
  }
};

// index.html -- carousel functionality
if (nextButton) {
  nextButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
  });
}

if (prevButton) {
  prevButton.addEventListener("click", () => {
    const slideWidth = slide.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
  });
}

// toggle of hambtn
toggleNavButton.addEventListener("click", toggleNavButtonFunc);
