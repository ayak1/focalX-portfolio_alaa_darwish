const container = document.querySelector(".clientsDesktop .imgs-container");
const imgs = document.querySelectorAll(".clientsDesktop .imgs-container div");
let next = document.querySelector(".clientsDesktop #next");
let prev = document.querySelector(".clientsDesktop #prev");

if (!window.matchMedia('screen (max-width: 500px)').matches){
  imgs[0].classList.add('blur')
  imgs[5].classList.add('blur')
}else{
  imgs[0].classList.add('blur')
  imgs[2].classList.add('blur')
}
let counter = 0;
let howTransform = 0;
const nextimg = () => {
    if (counter < 11) {

      if (!window.matchMedia('screen (max-width: 500px)').matches) {
        imgs.forEach(el =>{el.classList.remove('blur')})
        imgs[counter+1].classList.add('blur')
        imgs[counter+5].classList.add('blur')
    }else{
      imgs.forEach(el =>{el.classList.remove('blur')})
        imgs[counter+1].classList.add('blur')
        imgs[counter+3].classList.add('blur')
    }
      const size = imgs[0].clientWidth;
        howTransform = howTransform + size + 90;
        container.style.transition = `transform 1.4s ease-in-out`;
        container.style.transform = `translateX(${-howTransform}px)`;
        counter++
    }else{
      previmg()
    }
};
const previmg = () => {
  if (counter != 0) {
    if (!window.matchMedia('screen (max-width: 500px)').matches){
      imgs.forEach(el =>{el.classList.remove('blur')})
      imgs[0].classList.add('blur')
      imgs[5].classList.add('blur')
    }else{
      imgs.forEach(el =>{el.classList.remove('blur')})
      imgs[0].classList.add('blur')
      imgs[2].classList.add('blur')
    }
    container.style.transition = `transform 1.4s ease-in-out`;
    container.style.transform = `translateX(${0}px)`;
  }
};
next.addEventListener("click", nextimg);
prev.addEventListener("click", previmg);
    const inte = setInterval(() => {
      if (!window.matchMedia('screen (max-width: 500px)').matches){
        if (counter < 13) {
          nextimg();
        } else {
          previmg();
        }
      }
    }, 5000);
