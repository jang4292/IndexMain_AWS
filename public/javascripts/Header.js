const toggleBtn = document.querySelector('.navigation__toggle_button');
const menu = document.querySelector('.navigation__menu');
const icons = document.querySelector('.navigation__icons');

const container = document.getElementById('container');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    container.classList.toggle('active');
});

fetch('http://yhjang.shop:3000/menus')
    .then(res => res.json())
    .then(data => {
        data.forEach(info => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.innerText = `${info.title}`;
            li.appendChild(a);
            menu.appendChild(li);
        });
    })
    .catch(err => {
        console.log(' err : ' + err);
    });