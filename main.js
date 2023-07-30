
//js class selector
let h = document.getElementsByClassName('hr')[0];
let m = document.getElementsByClassName('mn')[0];
let s = document.getElementsByClassName('ss')[0];



function display_clock() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    h.style.transform = `rotate(${30 * hours + minutes / 2}deg)`;
    m.style.transform = `rotate(${6 * minutes}deg)`;
    s.style.transform = `rotate(${6 * seconds}deg)`;

    let sound = new Audio('clock sound.mp3');
    sound.play();
}
setInterval(display_clock, 1000);
