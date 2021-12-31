const playButtons = document.getElementsByClassName('audio_play_pause_buttons');
const song = new Audio();
let musicData;

fetch('http://yhjang1.shop:3000/musics')
    .then(res => res.json())
    .then(data => {
        musicData = data;
    })
    .catch(err => {
        console.log(' err : ' + err);
    });

let length = playButtons.length;
while (length--) {
    const button = playButtons[length];
    button.addEventListener('click', () => {
        if (song.paused) {
            if (!song.src) song.src = musicData[0].url;
            song.play();
        } else {
            song.pause();
        }
    });
}
