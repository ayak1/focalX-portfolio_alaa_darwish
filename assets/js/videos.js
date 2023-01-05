let flag = true
const change = (video) => {
    let master = document.querySelector('.master_video')
        if(!video.classList.contains('master_video') && flag){
        video.classList.remove('small_video')
        video.classList.add('master_video')
        master.classList.remove('master_video')
        master.classList.add('small_video')
        flag=false
        setFLag()
    }
}
const setFLag= () => {
   setTimeout(()=>{
    flag=true
   },100)
}
