let master = document.querySelector('.master_video iframe')
let smallVideos = document.querySelectorAll('.small_video')
smallVideos.forEach(smVideo => {
    smVideo.addEventListener('click',()=>{
        let masVideo = master.src
        let srcV = smVideo.id
        let imgVideo = master.classList[1]
        let smVidImg =smVideo.querySelector('img')
        let srcSm = smVidImg.getAttribute('src')
        master.classList.replace(master.classList[1],srcSm)
        smVidImg.src = imgVideo
        master.src=srcV
        smVideo.id=masVideo
    })
})

// view more videos  button js 
let videosViewMore = document.querySelector('#videosViewMore')
let videosHidden = document.querySelectorAll('.videoShow')
let videosCounter = 0
videosViewMore.addEventListener('click' , (e)=>{
    e.preventDefault()  
        for(let i=0;i<3; i++){
            videosHidden[videosCounter].style.display='block'
            videosCounter++
        }
    if(videosCounter===videosHidden.length){
        console.log('gg')
        videosViewMore.style.display='none'
    }
})