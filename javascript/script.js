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

