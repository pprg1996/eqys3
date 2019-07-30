let isInViewport = elem => {
  let bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

let fadeDown = document.querySelectorAll(".fade-down");
let fadeUp = document.querySelectorAll(".fade-up");

console.log(fadeUp.length);

addEventListener("scroll", () => {
  fadeDown.forEach(elem => {
    if (isInViewport(elem)) {
      elem.classList.add("animated", "fadeInDown", "fast");
      elem.style.visibility = "visible";
    }

    if (elem === document.querySelector(".section-title-2")) {
      let serviciosTipos = document.querySelector(".servicios-tipos");
      serviciosTipos.classList.add("animated", "fadeInUp", "fast");
      serviciosTipos.style.visibility = "visible";
    }
  });

  fadeUp.forEach(elem => {
    if (isInViewport(elem)) {
      elem.classList.add("animated", "fadeInUp", "fast");
      elem.style.visibility = "visible";
    }
  });
});
