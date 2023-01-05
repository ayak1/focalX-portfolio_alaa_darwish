let post 
let datePost 
let line
let bodyPost 
let title
let showBtnImg
let head
let showBtn = document.querySelectorAll('.show')
const show = () => {
    head.style.padding='0 5% 0 8%'
    bodyPost.style.display='flex'
    showBtnImg.src='./assets/images/closeicon.svg'
    line.classList.remove('line')
    line.classList.add('postLineActive')
}
const close = () => {
    head.style.padding=' 0 5%'
    bodyPost.style.display='none'
    showBtnImg.src='./assets/images/moreicon.svg'
    line.classList.add('line')
    line.classList.remove('postLineActive')
}
const btnAction = () => {
    if(line.classList.contains('line')){
        show()
        console.log(showBtnImg.src)
    }
    else{
        close()
        console.log(showBtnImg.src)
    }
}
showBtn.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        let postId =  e.target.parentElement.parentElement.parentElement.parentElement.id
        post= document.getElementById(postId)
        showBtnImg=post.querySelector('.show img')
        datePost = post.querySelector('.date')
        line = post.querySelector('.lineSelector')
        bodyPost = post.querySelector('.bodyPost')
        title = post.querySelector('.title')
        head = post.querySelector('.head')
        btnAction()
    })
})

