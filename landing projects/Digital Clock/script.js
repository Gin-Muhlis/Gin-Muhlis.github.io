const displayTime = document.getElementById('time');


setInterval(function () {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayNight = 'AM';

    if (hours > 12) {
        dayNight = 'PM'
        hours = hours - 12;
    }
    
    hours < 10 ? hours = `0${hours}` : hours = hours;
    minutes < 10 ? minutes = `0${minutes}` : minutes = minutes;
    seconds < 10 ? seconds = `0${seconds}` : seconds = seconds;
    
    displayTime.textContent = `${hours}:${minutes}:${seconds} ${dayNight}`;
})
