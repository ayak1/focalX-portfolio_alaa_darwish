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

const infinite = setInterval(() => {
    if (!window.matchMedia('screen (max-width: 500px)').matches){
        if (counterr < 8) {
            nextCard();
            } else {
                cards[0].classList.add('blur')
                cards[3].classList.add('blur')
                prevCard();
            }
    }
}, 4000);
