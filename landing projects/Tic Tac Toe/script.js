const selectBox = document.querySelector('.select-box'),
    playerXbtn = selectBox.querySelector('.playerX'),
    playerObtn = selectBox.querySelector('.playerO'),
    playBoard = document.querySelector('.play-board'),
    players = playBoard.querySelector('.players'),
    allBox = playBoard.querySelectorAll('section span'),
    body = document.querySelector('body'),
    resultBox = document.querySelector('.result-box'),
    wonText = resultBox.querySelector('.won-text'),
    button = resultBox.querySelector('.btn button');

    
window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute('onclick', 'clickedBox(this)');
    }

    playerXbtn.onclick = () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
        body.style.background = '#0b1018';
        players.setAttribute('class', 'players activeX');
    }

    playerObtn.onclick = () => {
        selectBox.classList.add('hide');
        playBoard.classList.add('show');
        body.style.background = '#0b1018';
        players.setAttribute('class', 'players activeO player');
    }
}

const playerXIcon = 'fas fa-times';
const playerOIcon = 'far fa-circle';
let playerSign = 'X';
let runBot = true;

function clickedBox(element) {
    if (players.classList.contains('player')) {
        element.innerHTML = `<span style="text-shadow: 0 0 5px #842dd4,0 0 15px #842dd4,0 0 40px #842dd4,0 0 10px #842dd4;"><i class="${playerOIcon}"></i></span>`
        players.classList.add('activeX');
        players.classList.remove('activeO')
        playerSign = 'O'
        element.setAttribute('id', playerSign)
    } else {
        element.innerHTML = `<span style="text-shadow: 0 0 5px #ff39cc,0 0 15px #ff39cc,0 0 40px #ff39cc,0 0 10px #ff39cc;"><i class="${playerXIcon}"></i></span>`
        players.classList.add('activeO');
        players.classList.remove('activeX')
        element.setAttribute('id', playerSign)
    }

    playBoard.style.pointerEvents = 'none';
    element.style.pointerEvents = 'none';

    setTimeout(() => {
        bot(runBot);
    }, 1500)

    selectWinner();

}

function bot(runBot) {
    if (runBot) {
        playerSign = 'O';
        let array = [];

        for (let i = 0; i < allBox.length; i++) {
            if (allBox[i].childElementCount == 0) {
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];

        if (array.length > 0) {
            if (players.classList.contains('player')) {
                allBox[randomBox].innerHTML = `<span style="text-shadow: 0 0 5px #ff39cc,0 0 15px #ff39cc,0 0 40px #ff39cc,0 0 10px #ff39cc;"><i class="${playerXIcon}"></i></span>`;
                players.classList.add('activeO');
                players.classList.remove('activeX')
                playerSign = 'X';
                allBox[randomBox].setAttribute('id', playerSign);
            } else {
                allBox[randomBox].innerHTML = `<span style="text-shadow: 0 0 5px #842dd4,0 0 15px #842dd4,0 0 40px #842dd4,0 0 10px #842dd4;"><i class="${playerOIcon}"></i></span>`;
                players.classList.add('activeX');
                players.classList.remove('activeO')
                allBox[randomBox].setAttribute('id', playerSign)
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = 'none';
        playBoard.style.pointerEvents = 'auto'
        playerSign = 'X';
    }
}


function getIdname(idname) {
    return document.querySelector('.box' + idname).id
}

function checkClass(val1, val2, val3, sign) {
    if (getIdname(val1) == sign && getIdname(val2) == sign && getIdname(val3) == sign) {
        return true;
    }
}

function selectWinner() {
    if (checkClass(1, 2, 3, playerSign) || checkClass(4, 5, 6, playerSign) || checkClass(7, 8, 9, playerSign) || checkClass(1, 4, 7, playerSign) || checkClass(2, 5, 8, playerSign) || checkClass(3, 6, 9, playerSign) || checkClass(1, 5, 9, playerSign) || checkClass(3, 5, 7, playerSign)) {
        runBot = false;
        bot(runBot)

        setTimeout(() => {
            playBoard.classList.remove('show');
            resultBox.classList.add('show');
        }, 600)

        wonText.innerHTML = `player <p>${playerSign}</p> won the game`;
    } else {
        if (getIdname(1) !== "" && getIdname(2) !== "" && getIdname(3) !== "" && getIdname(4) !== "" && getIdname(5) !== "" && getIdname(6) !== "" && getIdname(7) !== "" && getIdname(8) !== "" && getIdname(9) !== "") {
            runBot = false;
            bot(runBot)

            setTimeout(() => {
                playBoard.classList.remove('show')
                resultBox.classList.add('show')
            }, 600)

            wonText.textContent = `Match has been draw`;
        }
    }
}

button.onclick = () => {
    window.location.reload();
}