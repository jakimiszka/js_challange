let pointers = document.querySelectorAll(".hours");
const hours = pointers[0];
const mins = pointers[1];
const seconds = pointers[2];
let deg = 0;

setInterval(() => {
    let date = new Date();
    let sec = date.getSeconds();
    seconds.style.transform = 'rotate(' + sec*6 + 'deg)';
    mins.style.transform = 'rotate(' + date.getMinutes()*6 + 'deg)';
    hours.style.transform = 'rotate(' + date.getHours() + 'deg)';
}, 1000);