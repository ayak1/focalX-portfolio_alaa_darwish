   //   video_slider_________
   const videoSliderArray = document.querySelector(".section-video-m .videos-slider");
   const VideoArray = document.querySelectorAll(".section-video-m .videos-slider .slider-items");
   let nextBv = document.querySelector(".section-video-m #nextV");
   let prevBv = document.querySelector(".section-video-m #prevV");
    VideoArray[0].classList.add('blur')
    VideoArray[2].classList.add('blur')
   let counterv = 0;
   console.log(VideoArray.length)
   let howTransformXv = 0;

   const nextVid = () => {
       if (counterv < 4) {
           if (window.matchMedia('screen (max-width: 500px)').matches) 
         {
            VideoArray.forEach(el =>{el.classList.remove('blur')})
                 VideoArray[counterv+1].classList.add('blur')
                 VideoArray[counterv+2].classList.add('blur')
           }
           const sizev = VideoArray[0].clientWidth;
           howTransformXv = howTransformXv + sizev +16;
           videoSliderArray.style.transition = `transform 1.4s ease-in-out`;
           videoSliderArray.style.transform = `translateX(${-howTransformXv}px)`;
           counterv = 1 + counterv;
       }else{
        prevVid()
       }
   };
   const prevVid = () => {
       if (counterv != 0) {
           counterv = 0;
           videoSliderArray.style.transition = `transform 1.4s ease-in-out`;
           videoSliderArray.style.transform = `translateX(${0}px)`;
       howTransformXv = 0;
       }
   };
   nextBv.addEventListener("click", nextVid);
   prevBv.addEventListener("click", prevVid);

    // video_js_mobile____________
   
    const videoUrl1=()=>{ 
        document.getElementById("slider-big").src= "https://www.youtube.com/embed/zHG0gi8g-UU" ;}
          
   const videoUrl2=()=>{ 
        document.getElementById("slider-big").src= "https://www.youtube.com/embed/EqSd8vXGcBk"  ;}
         
   const videoUrl3=()=>{ 
       document.getElementById("slider-big").src= "https://www.youtube.com/embed/KRtAxLG0W5k";}
         
   const videoUrl4=()=>{ 
       document.getElementById("slider-big").src= "https://www.youtube.com/embed/911Bx2wtZuY"  ;}
         
   const videoUrl5=()=>{ 
       document.getElementById("slider-big").src= "https://www.youtube.com/embed/06iySihy0PA"  ;}
         
   const videoUrl6=()=>{ 
       document.getElementById("slider-big").src= "https://www.youtube.com/embed/U4mMNtwAzPE" ;}

