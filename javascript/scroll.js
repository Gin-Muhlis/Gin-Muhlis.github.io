// !button to top
const arrowTop = document.querySelector('.top-arrow');
window.onscroll = function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        arrowTop.classList.add('show');
    } else {
        arrowTop.classList.remove('show');
    }
}