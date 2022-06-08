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

// ! AOS animate
AOS.init(
    {
        disable: 'phone'
    }
);
