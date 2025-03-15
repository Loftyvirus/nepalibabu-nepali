document.addEventListener("DOMContentLoaded", function () {
  const mobileSearchIcon = document.getElementById("mobile-search-icon");

  if (window.innerWidth <= 768) {
    mobileSearchIcon.addEventListener("click", function (event) {
      event.stopPropagation();
      mobileSearchIcon.classList.toggle("search-visible");

      if (mobileSearchIcon.classList.contains("search-visible")) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Search...";
        input.classList.add("search-input");
        mobileSearchIcon.appendChild(input);
        input.focus();
      } else {
        const input = mobileSearchIcon.querySelector("input");
        if (input) {
          input.remove();
        }
      }
    });

    document.addEventListener("click", function (event) {
      if (!mobileSearchIcon.contains(event.target)) {
        mobileSearchIcon.classList.remove("search-visible");
        const input = mobileSearchIcon.querySelector("input");
        if (input) {
          input.remove();
        }
      }
    });
  }
});

const animatedPath = document.querySelector("#animated-path");
const updateAnimation = () => {
  const scrollableHeight = document.body.scrollHeight - window.innerHeight;
  const scrollProgress = window.scrollY / scrollableHeight;
  const pathLength = 2027;
  const newOffset = pathLength - scrollProgress * pathLength;
  animatedPath.style.strokeDashoffset = Math.max(newOffset, 0);
};
window.addEventListener("scroll", updateAnimation);
window.addEventListener("resize", updateAnimation);
updateAnimation();
