const mobile_nav = document.querySelector(".mobile_nav");
const learnMoreBtn = document.querySelector(".learnMore-btn");

window.addEventListener("resize", () => {
  if (innerWidth < 850) {
    mobile_nav.classList.remove("nav_toggle");
  } else {
    mobile_nav.classList.add("nav_toggle");
  }
});

learnMoreBtn.addEventListener("mouseover", () => {
  learnMoreBtn.classList.toggle("learnMore-toggle");
});

learnMoreBtn.addEventListener("mouseleave", () => {
  learnMoreBtn.classList.toggle("learnMore-toggle");
});
