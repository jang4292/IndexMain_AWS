fetch('http://yhjang1.shop:3000/menus')
    .then(res => res.json())
    .then(data => {
        data.forEach(info => {
            $("#navigation").append(`<li><span>${info.title}</span></li>`);
        });
    })
    .catch(err => {
        console.log(' err : ' + err);
    });
