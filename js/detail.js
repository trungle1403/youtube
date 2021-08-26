
const videoDetail = document.querySelector('.embed')
const videoTitle = document.querySelector('.video-title')

function showVideo() {
    let getLocalStorage = localStorage.getItem('YoutubeLink')
    if(getLocalStorage == null){
        arrLink = { title: "[IU] Blueming Live Clip (2019 IU Tour Concert 'Love, poem')" , id: "https://www.youtube.com/embed/o_nxIQTM_B0?autoplay=1"};
    }else {
        arrLink = JSON.parse(getLocalStorage)
    }
    videoDetail.setAttribute('src', arrLink.id)
    videoTitle.innerHTML = arrLink.title
}
showVideo()


const videoDataDetail = document.querySelectorAll('.video-detail .video-data')

videoData.forEach(video => {
    video.addEventListener('click', () =>{
        location.reload()
    })
})


const btnShowHide = document.querySelector('.btn-show-hide')
const descDetail = document.querySelector('.channel-desc-detail')
btnShowHide.addEventListener('click', () =>{
    descDetail.classList.toggle('active')

    if(descDetail.classList.contains('active')){
        btnShowHide.textContent = "ẩn bớt"
    }else {
        btnShowHide.textContent = "hiển thị thêm"
    }
})
