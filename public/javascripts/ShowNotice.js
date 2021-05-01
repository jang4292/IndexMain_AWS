const noticeMsg1 = document.getElementById("typed-strings1").textContent;
const noticeMsg2 = document.getElementById("typed-strings2").textContent;
let index = 0;

function showNotice1() {

    index++;
    const divNotice = document.getElementById("typed1");
    if (index > noticeMsg1.length) {
        index = 0;
        setTimeout(showNotice2, 70);
    } else {
        divNotice.innerText = noticeMsg1.substr(0, index);
        setTimeout(showNotice1, 70);
    }
}

function showNotice2() {
    index++;
    const divNotice = document.getElementById("typed2");
    if (index > noticeMsg2.length) {
        index = 0;
    } else {
        divNotice.innerText = noticeMsg2.substr(0, index);
        setTimeout(showNotice2, 70);
    }
}

const image = document.querySelector("#profile-image");
image.src = "./images/profile_picture.jpg";