const containerCard = document.querySelector(".portfolio .wrapper");
const cards = document.querySelectorAll(".portfolio .wrapper .slider-item");
let nextBtn = document.querySelector(".portfolio #nextCard");
let prevBtn = document.querySelector(".portfolio #prevCard");

if (!window.matchMedia('screen (max-width: 500px)').matches){
    cards[0].classList.add('blur')
    cards[3].classList.add('blur')
}else{
    cards[0].classList.add('blur')
    cards[2].classList.add('blur')
}
let counterr = 0;
let howTransformX = 0;
const nextCard = () => {
    goToNextBulletPOR();
    if (counterr < 5) {
        if (!window.matchMedia('screen (max-width: 500px)').matches) {
            cards.forEach(el =>{
                el.classList.remove('blur')
              })
              cards[counterr+1].classList.add('blur')
              cards[counterr+4].classList.add('blur')
        }else{
            cards.forEach(el =>{
                el.classList.remove('blur')
              })
              cards[counterr+1].classList.add('blur')
              cards[counterr+2].classList.add('blur')
        }
        const sizeC = cards[0].clientWidth;
        howTransformX = howTransformX + sizeC +30;
        containerCard.style.transition = `transform 1.4s ease-in-out`;
        containerCard.style.transform = `translateX(${-howTransformX}px)`;
        counterr = 1 + counterr;
    }else{
        prevCard()
    }
};
const prevCard = () => {
    goToPrevBulletPOR();
    if (counterr != 0) {
        if (!window.matchMedia('screen (max-width: 500px)').matches){
            cards.forEach(el =>{
                el.classList.remove('blur')
              })
            cards[0].classList.add('blur')
            cards[3].classList.add('blur')
        }else{
            cards.forEach(el =>{
                el.classList.remove('blur')
              })
            cards[0].classList.add('blur')
            cards[2].classList.add('blur')
        }
    counterr = 0;
    containerCard.style.transition = `transform 1.4s ease-in-out`;
    containerCard.style.transform = `translateX(${0}px)`;
    howTransformX = 0;
    }
};
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

// const infinite = setInterval(() => {
//     if (!window.matchMedia('screen (max-width: 500px)').matches){
//         if (counterr < 8) {
//             nextCard();
//             } else {
//                 cards[0].classList.add('blur')
//                 cards[3].classList.add('blur')
//                 prevCard();
//             }
//     }
// }, 4000);



////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\
const bulletsPOR = document.querySelector(".bulletsPOR");
const slidesPOR = document.querySelectorAll(".slidePOR");
const arrowLPOR = document.querySelector(".arrowLPOR");
const arrowRPOR = document.querySelector(".arrowRPOR");

const slideLenPOR = slides.length;
let currentSlidePOR = 0;


for (let i = 0; i < slidesPOR.length-2; i++) {
  bulletsPOR.innerHTML += `<div class="bulletPOR"></div>`
}
const bulletPOR = document.querySelectorAll(".bulletPOR");

bulletPOR[0].classList.add("active-bulletPOR");
bulletPOR[1].classList.add("next-bulletPOR");
bulletPOR[2].classList.add("next-next-bulletPOR");
bulletPOR[3].classList.add("bulletNPOR");



const goToNextBulletPOR = function () {
  if (bulletPOR[bulletPOR.length-1].className == "bulletPOR active-bulletPOR" ) {
    

   }else{
  for (let i = 0; i < bulletPOR.length; i++) {
    if (bulletPOR[i].className == "bulletPOR bulletPPOR") {
      bulletPOR[i].classList.remove("bulletPPOR")
      bulletPOR[i].style.transition = " all 0.2s";
    }else
    if (bulletPOR[i].className == "bulletPOR prev-prev-bulletPOR") {
      bulletPOR[i].classList.remove("prev-prev-bulletPOR")
      bulletPOR[i].classList.add("bulletPPOR")
      bulletPOR[i].style.transition = " all 0.2s";
    }else
    if (bulletPOR[i].className == "bulletPOR prev-bulletPOR") {
      bulletPOR[i].classList.remove("prev-bulletPOR")
      bulletPOR[i].classList.add("prev-prev-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR active-bulletPOR") {
      bulletPOR[i].classList.remove("active-bulletPOR")
      bulletPOR[i].classList.add("prev-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR next-bulletPOR") {
      bulletPOR[i].classList.remove("next-bulletPOR")
      bulletPOR[i].classList.add("active-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR next-next-bulletPOR") {
      bulletPOR[i].classList.remove("next-next-bulletPOR")
      bulletPOR[i].classList.add("next-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i-1]=true && bulletPOR[i].className == "bulletPOR bulletNPOR" && bulletPOR[i - 1].className == "bulletPOR next-bulletPOR" ) {
      bulletPOR[i].classList.add("next-next-bulletPOR")
      bulletPOR[i].classList.remove("bulletNPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    } else
    if (bulletPOR[i].className == "bulletPOR" && bulletPOR[i - 1].className == "bulletPOR next-next-bulletPOR") {
      bulletPOR[i].classList.add("bulletNPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    } 
    
  }
}
}

const goToPrevBulletPOR = function () {
  if (bulletPOR[0].className == "bulletPOR active-bulletPOR" ) {

   }else{
  for (let i = 0; i < bulletPOR.length; i++) {
    if (bulletPOR[i].className == "bulletPOR prev-prev-bulletPOR") {
      bulletPOR[i].classList.remove("prev-prev-bulletPOR")
      bulletPOR[i].classList.add("prev-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR prev-bulletPOR") {
      bulletPOR[i].classList.remove("prev-bulletPOR")
      bulletPOR[i].classList.add("active-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR active-bulletPOR") {
      bulletPOR[i].classList.remove("active-bulletPOR")
      bulletPOR[i].classList.add("next-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR next-bulletPOR") {
      bulletPOR[i].classList.remove("next-bulletPOR")
      bulletPOR[i].classList.add("next-next-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR next-next-bulletPOR") {
      bulletPOR[i].classList.remove("next-next-bulletPOR")
      bulletPOR[i].classList.add("bulletNPOR")
      bulletPOR[i].style.transition = " all 0.2s";
    }else
    if (bulletPOR[i].className == "bulletPOR bulletPPOR"&& bulletPOR[i+1].className== "bulletPOR prev-prev-bulletPOR") {
      bulletPOR[i].classList.remove("bulletPPOR")
      bulletPOR[i].classList.add("prev-prev-bulletPOR")
      bulletPOR[i].style.transition = " all 0.5s";
    }else
    if (bulletPOR[i].className == "bulletPOR" && bulletPOR[i+1].className== "bulletPOR bulletPPOR") {
      bulletPOR[i].classList.add("bulletPPOR")
      bulletPOR[i].style.transition = " all 0.2s";
    }
  }
}
}
////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\
