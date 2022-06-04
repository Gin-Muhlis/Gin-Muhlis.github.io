// !sidebar
const sidebarMenu = document.querySelector('.sidebar-menu'),
    sidebar = document.querySelector('.sidebar'),
    closeSidebar = document.querySelector('.close'),
    banner = document.querySelector('.banner');


sidebarMenu.addEventListener('click', () => {
    sidebarMenu.classList.add('hidden');
    sidebar.classList.add('show');
    banner.classList.add('move');
})

closeSidebar.addEventListener('click', () => {
    sidebarMenu.classList.remove('hidden');
    sidebar.classList.remove('show');
    banner.classList.remove('move');
})

// !button to top
const arrowTop = document.querySelector('.top-arrow');
window.onscroll = function () {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        arrowTop.classList.add('show');
    } else {
        arrowTop.classList.remove('show');
    }
}

// !counter progress bar
const numberHTML = document.querySelector('.number-html');
const numberCSS = document.querySelector('.number-css');
const numberJS= document.querySelector('.number-js');

function animateCounter(number, position, time) {
    let counter = 0;
    setInterval(() => {
        if (counter === position) {
            clearInterval()
        } else {
            counter += 1;
            return number.innerHTML = `${counter}%`;
        }
    }, time)
    
}
animateCounter(numberHTML, 85, 20);
animateCounter(numberCSS, 80, 20);
animateCounter(numberJS, 60, 30);


// ! AOS animate
AOS.init();