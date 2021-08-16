const btnMenu = document.querySelector('.btn-menu')
const slidebar = document.querySelector('.slidebar')
const mainContent = document.querySelector('.main-content')


btnMenu.addEventListener('click', (e) => {
    slidebar.classList.toggle('active')
    mainContent.classList.toggle('active')
})
// document.body.addEventListener('click', (e) => {
//     if (e.target.matches('.slidebar')){
//         slidebar.classList.toggle('active')
//         mainContent.classList.toggle('active')
//     }
// })
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