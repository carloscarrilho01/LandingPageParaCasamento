const dataAlvo = new Date("Jan 01, 2026 00:00:00").getTime();
const intervalo = setInterval(() => {
    const dataAtual = new Date().getTime();
    const tempoRestante = dataAlvo - dataAtual;

    if (tempoRestante <= 0) {
        clearInterval(intervalo);
        return;
    }

    const days = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const hours = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((tempoRestante % (1000 * 60)) / 1000).toString().padStart(2, "0");

    document.querySelector("#days").innerHTML = days;
    document.querySelector("#hours").innerHTML = hours;
    document.querySelector("#minutes").innerHTML = minutes;
    document.querySelector("#seconds").innerHTML = seconds;

}, 1000);

ScrollReveal().reveal('.headline');

AOS.init();