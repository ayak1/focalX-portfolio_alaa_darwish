const container = document.querySelector(".clientsDesktop .imgs-container");
const imgs = document.querySelectorAll(".clientsDesktop .imgs-container div");
let next = document.querySelector(".clientsDesktop #next");
let prev = document.querySelector(".clientsDesktop #prev");

if (!window.matchMedia('screen (max-width: 500px)').matches){
  imgs[0].classList.add('blur')
  imgs[4].classList.add('blur')
}else{
  imgs[0].classList.add('blur')
  imgs[2].classList.add('blur')
}

let counter = 0;
let howTransform = 0;
const nextimg = () => {
  goToNextBulletCLI()
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
  goToPrevBulletCLI()
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
    // const inte = setInterval(() => {
    //   if (!window.matchMedia('screen (max-width: 500px)').matches){
    //     if (counter < 13) {
    //       nextimg();
    //     } else {
    //       previmg();
    //     }
    //   }
    // }, 5000);


    ////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\
    const bulletsCLI = document.querySelector(".bulletsCLI");
    const slidesCLI = document.querySelectorAll(".slideCLI");
    const arrowLCLI = document.querySelector(".arrowLCLI");
    const arrowRCLI = document.querySelector(".arrowRCLI");
    
    const slideLenCLI = slidesCLI.length;
    let currentSlideCLI = 0;
    
    
    for (let i = 0; i < slidesCLI.length-5; i++) {
      bulletsCLI.innerHTML += `<div class="bulletCLI"></div>`
    }
    const bulletCLI = document.querySelectorAll(".bulletCLI");
    
    bulletCLI[0].classList.add("active-bulletCLI");
    bulletCLI[1].classList.add("next-bulletCLI");
    bulletCLI[2].classList.add("next-next-bulletCLI");
    bulletCLI[3].classList.add("bulletNCLI");
    
    
    
    const goToNextBulletCLI = function () {
      if (bulletCLI[bulletCLI.length-1].className == "bulletCLI active-bulletCLI" ) {
        
    
       }else{
      for (let i = 0; i < bulletCLI.length; i++) {
        if (bulletCLI[i].className == "bulletCLI bulletPCLI") {
          bulletCLI[i].classList.remove("bulletPCLI")
          bulletCLI[i].style.transition = " all 0.2s";
        }else
        if (bulletCLI[i].className == "bulletCLI prev-prev-bulletCLI") {
          bulletCLI[i].classList.remove("prev-prev-bulletCLI")
          bulletCLI[i].classList.add("bulletPCLI")
          bulletCLI[i].style.transition = " all 0.2s";
        }else
        if (bulletCLI[i].className == "bulletCLI prev-bulletCLI") {
          bulletCLI[i].classList.remove("prev-bulletCLI")
          bulletCLI[i].classList.add("prev-prev-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI active-bulletCLI") {
          bulletCLI[i].classList.remove("active-bulletCLI")
          bulletCLI[i].classList.add("prev-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI next-bulletCLI") {
          bulletCLI[i].classList.remove("next-bulletCLI")
          bulletCLI[i].classList.add("active-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI next-next-bulletCLI") {
          bulletCLI[i].classList.remove("next-next-bulletCLI")
          bulletCLI[i].classList.add("next-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i-1]=true && bulletCLI[i].className == "bulletCLI bulletNCLI" && bulletCLI[i - 1].className == "bulletCLI next-bulletCLI" ) {
          bulletCLI[i].classList.add("next-next-bulletCLI")
          bulletCLI[i].classList.remove("bulletNCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        } else
        if (bulletCLI[i].className == "bulletCLI" && bulletCLI[i - 1].className == "bulletCLI next-next-bulletCLI") {
          bulletCLI[i].classList.add("bulletNCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        } 
        
      }
    }
    }
    
    const goToPrevBulletCLI = function () {
      if (bulletCLI[0].className == "bulletCLI active-bulletCLI" ) {
    
       }else{
      for (let i = 0; i < bullet.length; i++) {
        if (bulletCLI[i].className == "bulletCLI prev-prev-bulletCLI") {
          bulletCLI[i].classList.remove("prev-prev-bulletCLI")
          bulletCLI[i].classList.add("prev-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI prev-bulletCLI") {
          bulletCLI[i].classList.remove("prev-bulletCLI")
          bulletCLI[i].classList.add("active-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI active-bulletCLI") {
          bulletCLI[i].classList.remove("active-bulletCLI")
          bulletCLI[i].classList.add("next-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI next-bulletCLI") {
          bulletCLI[i].classList.remove("next-bulletCLI")
          bulletCLI[i].classList.add("next-next-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI next-next-bulletCLI") {
          bulletCLI[i].classList.remove("next-next-bulletCLI")
          bulletCLI[i].classList.add("bulletNCLI")
          bulletCLI[i].style.transition = " all 0.2s";
        }else
        if (bulletCLI[i].className == "bulletCLI bulletPCLI"&& bulletCLI[i+1].className== "bulletCLI prev-prev-bulletCLI") {
          bulletCLI[i].classList.remove("bulletPCLI")
          bulletCLI[i].classList.add("prev-prev-bulletCLI")
          bulletCLI[i].style.transition = " all 0.5s";
        }else
        if (bulletCLI[i].className == "bulletCLI" && bulletCLI[i+1].className== "bulletCLI bulletPCLI") {
          bulletCLI[i].classList.add("bulletPCLI")
          bulletCLI[i].style.transition = " all 0.2s";
        }
      }
    }
    }
  ////////////////////// Bullets \\\\\\\\\\\\\\\\\\\\\\\\\\

   
    
    