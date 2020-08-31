const deg = 6;
const hourHand = document.querySelector('#hr');
const minuteHand = document.querySelector('#mn');
const secondHand = document.querySelector('#sc');
setInterval(() => {
    const currentDate = new Date();
    let hh = currentDate.getHours() * 30;
    let mm = currentDate.getMinutes() * deg;
    let ss = currentDate.getSeconds() * deg;
    hourHand.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    minuteHand.style.transform = `rotateZ(${mm+(ss/60)}deg)`;
    secondHand.style.transform = `rotateZ(${ss}deg)`;
})

//dark mode

const darkMode = document.querySelector('.dark');
darkMode.addEventListener('click', function() {
    document.querySelector('body').classList.toggle('darkTheme');
    document.querySelector('.clock').classList.toggle('darkClock');
})