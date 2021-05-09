const playButton = document.getElementById('audio_play');
const song = new Audio();
let musicData;

fetch('http://yhjang.shop:3000/musics')
    .then(res => res.json())
    .then(data => {
        musicData = data;
    })
    .catch(err => {
        console.log(' err : ' + err);
    });

playButton.addEventListener('click', () => {
    if (song.paused) {
        if (!song.src) song.src = musicData[0].url;
        song.play();
    } else {
        song.pause();
    }
});