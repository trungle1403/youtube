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

mediaQuery(maxw767)
maxw767.addListener(mediaQuery)