
function startLight() {

    const green = document.getElementsByClassName("red")[0];
    const yellow = document.getElementsByClassName("yellow")[0];
    const red = document.getElementsByClassName("green")[0];
    
    green.style.opacity=1;
    setTimeout(function () {
        red.style.opacity = .2;
        yellow.style.opacity = 1;
        green.style.opacity = .2;
    },2000);
    setTimeout(function () {
        red.style.opacity = 1;
        yellow.style.opacity = .2;
        green.style.opacity = .2;
    },4000);
    setTimeout(function () {
        red.style.opacity = .2;
        yellow.style.opacity = .2;
        green.style.opacity = 1;
    },6000);

}
const timer = setInterval(function() {
    startLight();
},6000);

startLight();

