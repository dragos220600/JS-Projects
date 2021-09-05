let img = document.querySelector('img');
let index = 0;

img.src = `img/${index}.png`;

setInterval(function() {

    if (index == 6) {
        index = 0;
    }

    img.src = `img/${index}.png`;
    index++;

}, 100);