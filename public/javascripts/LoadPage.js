$(document).ready(function () {
    $("#footer").load("./html/footer.html");
    $("#header").load("./html/header.html");

    fetch('http://yhjang.shop:3000/menus')
        .then(res => res.json())
        .then(data => {
            data.forEach(info => {
                $("#navigation").append(`<li><a href=".">${info.title}</a>&nbsp;&nbsp;</li>`);
            });
        })
        .catch(err => {
            console.log(' err : ' + err);
        });
});