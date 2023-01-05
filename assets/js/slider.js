const thSlides = document.querySelectorAll(".slide");
// const thDots = document.querySelector(".dots");
const thSlider = document.querySelector(".slider--container");
const thArrowL = document.querySelector(".arrowL");
const thArrowR = document.querySelector(".arrowR");
let thCurrentSlide = 0;
const thSlideLen = thSlides.length;

const thGoToSlide = function (current) {
    thSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${-438 * current}px)`)
  );
};

//*********defalut*********
thGoToSlide(2);

thCurrentSlide = 1;

//*********nextSlide*********

const thNextSlide = function () {
  if (thCurrentSlide === thSlideLen - 1) thCurrentSlide = 0;
  else thCurrentSlide++;
  // thDot.forEach((d) => {
  //   d.style.backgroundColor = "#1e1e1e";
  // });
  // thDot[thCurrentSlide].style.backgroundColor = "#f9cc11";

  thGoToSlide(thCurrentSlide);
};
thArrowR.addEventListener("click", thNextSlide);

//*********prevSlide*********

const thPrevSlide = function () {
  if (thCurrentSlide === 0) thCurrentSlide = thSlideLen - 1;
  else thCurrentSlide--;

  // thDot.forEach((d) => {
  //   d.style.backgroundColor = "#1e1e1e";
  // });
  // thDot[thCurrentSlide].style.backgroundColor = "#f9cc11";
  thGoToSlide(thCurrentSlide);
};

thArrowL.addEventListener("click", thPrevSlide);
// //********dots********** */
// thSlides.forEach((s, i) => (thDots.innerHTML += `<div class="th_dot"></div>`));
// const thDot = document.querySelectorAll(".th_dot");
// thDot[2].style.backgroundColor = "#f9cc11";
// for (let i = 0; i < thDot.length; i++) {
//     thDot[i].addEventListener("click", () => {
//         thDot.forEach((d) => {
//       d.style.backgroundColor = "#1e1e1e";
//     });
//     thGoToSlide(i);
//     thDot[i].style.backgroundColor = "#f9cc11";
//     thCurrentSlide = i;
//   });
// }

