const searchBox = document.querySelector('.searchBox');

searchBox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchBox.value)
    }
}

function getResults(query) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=df81b59d5a770cd7ff6743e95b3473d8`)
    .then(response => response.json())
    .then(response => displayResult(response))
}

function displayResult(result) {
    const location = document.querySelector('.location'),
          date = document.querySelector('.date'),
          temp = document.querySelector('.temp'),
          weather = document.querySelector('.weather'),
          hilow = document.querySelector('.min-max');
    
    // menampilakn lokasi
    location.innerHTML = `<p>${result.name}, ${result.sys.country}</p>`
    
    // menampilkan tanggal
    let now = new Date();
    date.innerHTML = dateBuilder(now);

    // menampilkan temperatur
    temp.innerHTML = `<p>${Math.round(result.main.temp)}<span>°c</span></p>`;

    // memunculkan weather
    weather.innerHTML = `<p>${result.weather[0].main}</p>`;

    // menampilkan min max temp
    hilow.innerHTML = `<p>${Math.round(result.main.temp_min)}<span>°c</span> / ${Math.round(result.main.temp_max)}<span>°c</span></p>`
    
}

function dateBuilder(time) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[time.getDay()];
    let date = time.getDay();
    let month = months[time.getMonth()];
    let year = time.getFullYear();

    return `<p>${day} ${date} ${month} ${year}</p>`

}