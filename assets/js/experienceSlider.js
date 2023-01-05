const experContainer = document.querySelector(".experienceMobile .title_box");
const expCards = document.querySelectorAll(".experienceMobile .title_box .title_element");
let nextExpCardBtn = document.querySelector(".experienceMobile #nextExpCard");
let prevExpCardBtn = document.querySelector(".experienceMobile #prevExpCard");

let counterExpCard = 0;
let howTransformExpCard = 0;
const nextExpCard = () => {
    if (counterExpCard < 2) {
        counterExpCard = 1 + counterExpCard;
        const sizeExpCard = expCards[0].clientWidth;
        howTransformExpCard = howTransformExpCard + sizeExpCard +20;
        experContainer.style.transition = `transform 1.4s ease-in-out`;
        experContainer.style.transform = `translateX(${-howTransformExpCard}px)`;
    }else{
      prevExpCard()
    }
};
const prevExpCard = () => {
  if (counterExpCard != 0) {
    counterExpCard = 0;
    experContainer.style.transition = `transform 1.4s ease-in-out`;
    experContainer.style.transform = `translateX(${0}px)`;
    howTransformExpCard = 0;
  };
}
nextExpCardBtn.addEventListener("click", nextExpCard);
prevExpCardBtn.addEventListener("click", prevExpCard);

