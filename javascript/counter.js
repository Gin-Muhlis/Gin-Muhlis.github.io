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
