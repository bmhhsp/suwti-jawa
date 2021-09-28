// get pilihan bot
function getPilihanBot() {
    const bot = Math.random();

    if (bot < 0.34) return 'gajah';
    if (bot >= 0.34 && bot < 0.67) return 'orang';
    return 'semut';
}

// get hasil
function getHasil(bot, player) {
    if (player == bot) return 'SERI!';
    if (player == 'gajah') return (bot == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (bot == 'gajah') ? 'KALAH!' : 'MENANG!';
    if (player == 'semut') return (bot == 'orang') ? 'KALAH!' : 'MENANG!';
}


// Bot Animation
function putar() {
    const imgBot = document.querySelector('.img-bot');
    const image = ['gajah', 'semut', 'orang'];
    let i = 0;
    const startTime = new Date().getTime();

    setInterval(function () {
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        imgBot.setAttribute('src', 'img/' + image[i++] + '.png')
        if (i == image.length) i = 0;
    }, 100);
}


// persiapan get score 
let win = 1;
let lose = 1;
let reset = document.querySelector('.reset');

reset.addEventListener('click', function() {
    win = 0;
    lose = 0;

    document.querySelector('.player-score-count').innerHTML = win;
    document.querySelector('.bot-score-count').innerHTML = lose;
});


// Click pilihan player
const areaPLayer = document.querySelectorAll('li img');
areaPLayer.forEach(function (pilihan) {
    pilihan.addEventListener('click', function () {
        const pilihanBot = getPilihanBot();
        const pilihanPlayer = pilihan.className;
        const hasil = getHasil(pilihanBot, pilihanPlayer);

        putar();

        setTimeout(function () {
            const imgBot = document.querySelector('.img-bot');
            imgBot.setAttribute('src', 'img/' + pilihanBot + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;

            // cek score
            const botScore = document.querySelector('.bot-score-count');
            const playerScore = document.querySelector('.player-score-count');

            if (hasil == 'MENANG!') {
                playerScore.innerHTML = win++;
            }
            if (hasil == 'KALAH!') {
                botScore.innerHTML = lose++;
            }

        }, 1000);
        });
    });
