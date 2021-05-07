const menu = document.querySelector('.navigation__menu');

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