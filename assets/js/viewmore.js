// achievment view more buutton js
let viewMore = document.querySelector('#viewMore')
let dontShow = document.querySelectorAll('.dontShow')
let countBoxesBoxes=0
viewMore.addEventListener('click' , (e)=>{
    e.preventDefault()
    dontShow[countBoxes].style.display='block'
    countBoxes++
    if(countBoxes===dontShow.length){
        viewMore.style.display='none'
    }

})