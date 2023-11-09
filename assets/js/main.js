var searchInput = document.querySelector('.search-form-input__text');
var searchHistory = document.querySelector('.wrapper-search-history');
var borderSearchInput = document.querySelector('.search-container__border');
var moveToTop = document.querySelector('.move-to-top');
var reMenuNavigate = document.querySelector('.responsive-menu-navigate');
var responsiveMenuBar = document.querySelector('.responsive-menu-bar');

searchInput.addEventListener('focus', () => {
    searchHistory.classList.add('wrapper-search-history--focus');
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        searchHistory.classList.remove('wrapper-search-history--focus');
    }
});

searchInput.addEventListener('focus', () => {
    borderSearchInput.classList.add('search-container__border--active');
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target)) {
        borderSearchInput.classList.remove('search-container__border--active');
    }
});


window.addEventListener("scroll", () => {
    if(window.scrollY >= 200) {
        moveToTop.classList.add('move-to-top--active');
    } else {
        moveToTop.classList.remove('move-to-top--active');
    }
})

responsiveMenuBar.addEventListener("click", () => {
    reMenuNavigate.style.transform = "translateX(0)";
})

reMenuNavigate.addEventListener("click", () => {
    reMenuNavigate.style.transform = "translateX(-120%)";
})