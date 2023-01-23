////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\
const bullets = document.querySelector(".bulletsSPC");
const slides = document.querySelectorAll(".slideSPC");
const arrowL = document.querySelector(".arrowL");
const arrowR = document.querySelector(".arrowR");

const slideLen = slides.length;
let currentSlide = 0;


for (let i = 0; i < slides.length-2; i++) {
  bullets.innerHTML += `<div class="bulletSPC"></div>`
}
const bullet = document.querySelectorAll(".bulletSPC");

bullet[0].classList.add("active-bulletSPC");
bullet[1].classList.add("next-bulletSPC");
bullet[2].classList.add("next-next-bulletSPC");
bullet[3].classList.add("bulletNSPC");



const goToNextBullet = function () {
  if (bullet[bullet.length-1].className == "bulletSPC active-bulletSPC" ) {
    

   }else{
  for (let i = 0; i < bullet.length; i++) {
    if (bullet[i].className == "bulletSPC bulletPSPC") {
      bullet[i].classList.remove("bulletPSPC")
      bullet[i].style.transition = " all 0.2s";
    }else
    if (bullet[i].className == "bulletSPC prev-prev-bulletSPC") {
      bullet[i].classList.remove("prev-prev-bulletSPC")
      bullet[i].classList.add("bulletPSPC")
      bullet[i].style.transition = " all 0.2s";
    }else
    if (bullet[i].className == "bulletSPC prev-bulletSPC") {
      bullet[i].classList.remove("prev-bulletSPC")
      bullet[i].classList.add("prev-prev-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC active-bulletSPC") {
      bullet[i].classList.remove("active-bulletSPC")
      bullet[i].classList.add("prev-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC next-bulletSPC") {
      bullet[i].classList.remove("next-bulletSPC")
      bullet[i].classList.add("active-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC next-next-bulletSPC") {
      bullet[i].classList.remove("next-next-bulletSPC")
      bullet[i].classList.add("next-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i-1]=true && bullet[i].className == "bulletSPC bulletNSPC" && bullet[i - 1].className == "bulletSPC next-bulletSPC" ) {
      bullet[i].classList.add("next-next-bulletSPC")
      bullet[i].classList.remove("bulletNSPC")
      bullet[i].style.transition = " all 0.5s";
    } else
    if (bullet[i].className == "bulletSPC" && bullet[i - 1].className == "bulletSPC next-next-bulletSPC") {
      bullet[i].classList.add("bulletNSPC")
      bullet[i].style.transition = " all 0.5s";
    } 
    
  }
}
}

const goToPrevBullet = function () {
  if (bullet[0].className == "bulletSPC active-bulletSPC" ) {

   }else{
  for (let i = 0; i < bullet.length; i++) {
    if (bullet[i].className == "bulletSPC prev-prev-bulletSPC") {
      bullet[i].classList.remove("prev-prev-bulletSPC")
      bullet[i].classList.add("prev-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC prev-bulletSPC") {
      bullet[i].classList.remove("prev-bulletSPC")
      bullet[i].classList.add("active-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC active-bulletSPC") {
      bullet[i].classList.remove("active-bulletSPC")
      bullet[i].classList.add("next-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC next-bulletSPC") {
      bullet[i].classList.remove("next-bulletSPC")
      bullet[i].classList.add("next-next-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC next-next-bulletSPC") {
      bullet[i].classList.remove("next-next-bulletSPC")
      bullet[i].classList.add("bulletNSPC")
      bullet[i].style.transition = " all 0.2s";
    }else
    if (bullet[i].className == "bulletSPC bulletPSPC"&& bullet[i+1].className== "bulletSPC prev-prev-bulletSPC") {
      bullet[i].classList.remove("bulletPSPC")
      bullet[i].classList.add("prev-prev-bulletSPC")
      bullet[i].style.transition = " all 0.5s";
    }else
    if (bullet[i].className == "bulletSPC" && bullet[i+1].className== "bulletSPC bulletPSPC") {
      bullet[i].classList.add("bulletPSPC")
      bullet[i].style.transition = " all 0.2s";
    }
  }
}
}
////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\

const thGoToSlide = function (current) {
    thSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${-397 * current}px)`)
  );
};

const thSlides = document.querySelectorAll(".slideSPC");
const thSlider = document.querySelector(".slider--container");
const thArrowL = document.querySelector(".arrowL");
const thArrowR = document.querySelector(".arrowR");
let thCurrentSlide = 0;
const thSlideLen = thSlides.length;





//*********nextSlide*********

const thNextSlide = function () {
  if (thCurrentSlide === thSlideLen - 3) ;
  else thCurrentSlide++;
  thGoToSlide(thCurrentSlide);
  goToNextBullet();
};
thArrowR.addEventListener("click", thNextSlide);

//*********prevSlide*********

const thPrevSlide = function () {
  if (thCurrentSlide === 0) ;
  else thCurrentSlide--;
  thGoToSlide(thCurrentSlide);
  goToPrevBullet();
};
thArrowL.addEventListener("click", thPrevSlide);

