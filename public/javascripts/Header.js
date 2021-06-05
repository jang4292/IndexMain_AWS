const menu = document.querySelector('.navigation__menu');
const container = document.getElementById('container');

const ACTIVIED_MENU_LIST = ['HOME', 'AUDIO', 'PROJECT'];

fetch('http://yhjang.shop:3000/menus')
    .then(res => res.json())
    .then(data => {
        data.forEach(info => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            const div = document.createElement('div');
            const title = info.title;

            div.setAttribute("id", `main_view ${title.toLowerCase()}`);
            div.style.display = 'none';
            span.innerText = title;
            container.appendChild(div);
            switch (title) {
                case 'HOME': {
                    span.classList.toggle('active');
                    $(div).load("../html/Home/home.html");
                    div.style.display = 'block';
                    break;
                }
                case 'PROJECT': {
                    span.classList.toggle('active');
                    $(div).load("../html/Project/project.html");
                    break;
                }
                case 'AUDIO': {
                    span.classList.toggle('active');
                    $(div).load("../html/AudioPlayer/audio_player.html");
                    break;
                }
                default : {
                }
            }

            if (ACTIVIED_MENU_LIST.includes(title)) {
                span.addEventListener('click', (event) => {
                    const title = event.currentTarget.innerText;
                    const container = document.getElementById(`container`);

                    let length = container.children.length;
                    while (length--) {
                        const child = container.children[length];
                        child.style.display = 'none';
                    }

                    const div = document.getElementById(`main_view ${title.toLowerCase()}`);
                    div.style.display = 'block';

                    const menuIcon = document.getElementById('menuicon');
                    menuIcon.checked = false;
                });
            }

            li.appendChild(span);
            menu.appendChild(li);
        });
    })
    .catch(err => {
        console.log(' err : ' + err);
    });