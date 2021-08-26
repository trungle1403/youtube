const btnMenu = document.querySelector('.btn-menu')
const slidebar = document.querySelector('.slidebar')
const mainContent = document.querySelector('.main-content')


btnMenu.addEventListener('click', (e) => {
    slidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
})
// document.addEventListener("click", function (e) {
//     if (!slidebar.contains(e.target) && !e.target.matches("btn-menu")) {
//         slidebar.classList.remove("active");
//     }
// });
const maxw767 = window.matchMedia("(max-width: 767px)")

function mediaQuery(x) {
    if (x.matches) { // If media query matches
        slidebar.classList.add('active')
        mainContent.classList.add('active')
        
    } else {
        slidebar.classList.remove('active')
        mainContent.classList.remove('active')
}
}



const btnSearchMobile = document.querySelector('.btn-search-mobile')
const btnCloseSearch = document.querySelector('.btn-close-on-search')
const btnHiddenSearch = document.querySelectorAll('.btn-hidden-on-search')
const headerSearch = document.querySelector('.header-search')

btnSearchMobile.addEventListener('click',(e) => {
    btnHiddenSearch.forEach(item => {
        item.classList.toggle('hidden-search')
    })
    btnCloseSearch.classList.toggle('open-search')
    headerSearch.classList.toggle('open-search')
})
btnCloseSearch.addEventListener('click',(e) => {
    btnHiddenSearch.forEach(item => {
        item.classList.toggle('hidden-search')
    })
    btnCloseSearch.classList.toggle('open-search')
    headerSearch.classList.toggle('open-search')
})


const videoData = document.querySelectorAll('.video-data')
videoData.forEach((video,index) => {
    video.addEventListener('click', (e) => {
        let videoId = video.getAttribute('data-view')
        let videoTitle = video.getAttribute('data-title')
        let getLocalStorage = localStorage.getItem('YoutubeLink')
        if(getLocalStorage == null) {
            arrLink = { title: '' , id: ''};
        }else {
            arrLink = JSON.parse(getLocalStorage)
        }
        let link = 'https://www.youtube.com/embed/'+videoId+'?autoplay=1'
        
        arrLink.id = link;
        arrLink.title = videoTitle;
        localStorage.setItem('YoutubeLink', JSON.stringify(arrLink))
    })
})

const videoDetailSeen = document.querySelectorAll('.video-detail-seen')
videoDetailSeen.forEach(item =>{
    dataSeen = item.getAttribute('data-seen')
    item.style.width = dataSeen
})
