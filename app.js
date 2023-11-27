const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const box = document.querySelector('.box');
const card = document.querySelectorAll('.card');

let degrees = 0;

prev.addEventListener('click', function() {
    degrees += 45;
    box.style = `transform: perspective(1000px) rotateZ(-15deg) rotateX(0deg) rotateY(${degrees}deg);`;
})

next.addEventListener('click', function() {
    degrees -= 45;
    box.style = `transform: perspective(1000px) rotateZ(-15deg) rotateX(0deg) rotateY(${degrees}deg);`;
});


window.addEventListener('scroll', function(e) {
    const windowTop = this.document.documentElement.scrollTop;


    // if(windowTop < 1000) {
    //     const roX = xdeg / 100 * timeLine;
    //     const per = (persv - 1000) / 100 * timeLine + 1000;
    //     const cZ = 50 + (350 - (350 / 100 * timeLine));

    //     box.style = `transform: rotateX(-${roX}deg) perspective(${per}px) rotateZ(0deg) rotateY(0deg);`;
    //     for(let j = 0; j < card.length; j++) {
    //         card[j].style = `transform: rotateY(calc(${j} * 45deg)) translateZ(${cZ}px);`;
    //     };
    // }

    if(windowTop < 1000) {
        degrees = 0;
        for(let j = 0; j < card.length; j++) {
            card[j].style = `transform: rotateY(calc(${j} * 45deg)) translateZ(50px);`;
        };
        box.style = `transform: rotateX(-90deg) perspective(15000px) rotateZ(0deg) rotateY(0deg);`;
    }
    if(windowTop > 1000) {
        for(let j = 0; j < card.length; j++) {
            card[j].style = `transform: rotateY(calc(${j} * 45deg)) translateZ(600px) rotateZ(15deg);`;
        };
        box.style = `transform: rotateX(0deg) perspective(1000px) rotateZ(-15deg) rotateY(0deg);`;
    }
})

// transform: rotateY(calc(var(--i) * 45deg)) translateZ(50px);
// transform: rotateY(calc(var(--i) * 45deg)) translateZ(600px) rotateZ(15deg);
